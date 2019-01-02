using Abp.Application.Services.Dto;
using Abp.Auditing;
using Abp.Domain.Services;
using Abp.Domain.Uow;
using Abp.Extensions;
using Abp.Linq.Extensions;
using CaseStudy.Hotel.Dto;
using CsvHelper;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Abp.Logging;

namespace CaseStudy.Hotel
{

  
    public class HotelAppService : CaseStudyAppServiceBase<HotelDto>, IHotelAppService
    {


        [DisableAuditing]
        [UnitOfWork(IsDisabled = true)]
        public async Task<PagedResultDto<HotelDto>> GetAll(string filePath, PagedHotelResultRequestDto input)
        {

            //Simulate long running operation
            //await Task.Delay(TimeSpan.FromSeconds(1));

            //Read Hotel Data From Csv Filter, Sort ,Group
            var result = ReadCsv(filePath).AsQueryable();
            result = ApplySorting(result, input);
            result = ApplyPaging(result, input);
            return new PagedResultDto<HotelDto>()
            {
                Items = result.ToList(),
                TotalCount = 100
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


    }
}
