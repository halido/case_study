using Abp.Application.Services.Dto;
using Abp.Auditing;
using Abp.Dependency;
using Abp.Domain.Uow;
using Abp.Extensions;
using Abp.IO;
using CaseStudy.Hotel.Dto;
using CaseStudy.Serialization;
using CsvHelper;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Linq.Dynamic.Core.CustomTypeProviders;
using System.Linq.Dynamic.Core.Parser;
using System.Reflection;
using System.Threading.Tasks;

namespace CaseStudy.Hotel
{


    public class HotelAppService : CaseStudyAppServiceBase<HotelDto>, IHotelAppService
    {
        private readonly IocManager _iocManager;

        public HotelAppService(IocManager iocManager)
        {
            _iocManager = iocManager;
        }

        [DisableAuditing]
        [UnitOfWork(IsDisabled = true)]
        public async Task<PagedResultDto<HotelDto>> GetAll(string filePath, PagedHotelResultRequestDto input)
        {

            //Simulate long running operation
            //await Task.Delay(TimeSpan.FromSeconds(1));

            //Read Hotel Data From Csv Filter, Sort ,Group
            var result = ReadCsv(filePath).AsQueryable();
            var totalRowCount = result.Count();
            result = ApplySorting(result, input);
            result = ApplyPaging(result, input);
            return new PagedResultDto<HotelDto>()
            {
                Items = result.ToList(),
                TotalCount = totalRowCount
            };
        }

        public List<HotelDto> ReadCsv(string filePath)
        {
            var hotelValidator = new HotelValidator();
            var records = new List<HotelDto>();
            try
            {

                using (var reader = new StreamReader($"{filePath}"))
                using (var csv = new CsvReader(reader))
                {
                    csv.Configuration.PrepareHeaderForMatch = (s, i) => s.ToLower();
                    while (csv.Read())
                    {
                        var record = csv.GetRecord<HotelDto>();
                        var validationResult = hotelValidator.Validate(record);
                        if (validationResult.IsValid)
                            records.Add(record);
                    }
                    return records.ToList();
                }
            }
            catch (Exception e)
            {
                return records;
            }

        }

        public async Task<ExportResult> Export(string filePath, ExportRequest input)
        {
            var pagedResultDto = await GetAll(filePath, new PagedHotelResultRequestDto()
            {
                Sorting = input.Sorting,
                FileId = input.FileId,
                MaxResultCount = int.MaxValue,
                SkipCount = 0
            });
         
            var objectSerializer = _iocManager.IocContainer.Resolve<IObjectSerializer>(input.OutputFormat.ToString());
            var directoryInfo = new FileInfo(filePath).Directory;
            DirectoryHelper.CreateIfNotExists(directoryInfo.FullName);

            var exportedFileId = Path.GetRandomFileName() + "." + input.OutputFormat.ToString();

            ExportResult result  = new ExportResult()
            {
                FileId = exportedFileId
            };
            

            if (input.Group.IsNullOrWhiteSpace() == false)
            {
             

                var groupBy = pagedResultDto.Items.AsQueryable().GroupBy(input.Group, "it").Select<GroupedHotel>($"new (it.Key.ToString() as Group ,it.ToList() as Hotels)");
             

                var groupByContent = objectSerializer.Serialize(groupBy.ToList());
                    System.IO.File.WriteAllText(Path.Combine(directoryInfo.FullName, exportedFileId), groupByContent);
                    return result;
             
             
            }
            var contents = objectSerializer.Serialize(pagedResultDto.Items);
            System.IO.File.WriteAllText(Path.Combine(directoryInfo.FullName, exportedFileId), contents);
            return result;
        }
    }
    
}
