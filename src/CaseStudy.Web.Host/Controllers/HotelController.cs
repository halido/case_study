using CaseStudy.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using CaseStudy.Hotel;
using CaseStudy.Hotel.Dto;
using Microsoft.AspNetCore.Hosting.Internal;

namespace CaseStudy.Web.Host.Controllers
{
    [Route("api/[controller]/[action]")]
    public class HotelController : CaseStudyControllerBase
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IHotelAppService _appService;

        public HotelController(IHostingEnvironment hostingEnvironment,IHotelAppService appService)
        {
            _hostingEnvironment = hostingEnvironment;
            _appService = appService;
        }
        // GET: /<controller>/
        [HttpPost, DisableRequestSizeLimit]
        public CsvUploadResultDto UploadCsv(IFormFile file)
        {
            try
            {
                var newPath = Path.Combine(_hostingEnvironment.WebRootPath, AppConsts.UploadPath);
                var uniqueFileName = Guid.NewGuid().ToString("N")+ Path.GetExtension(file.FileName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                if (file.Length > 0)
                {

                    var fullPath = Path.Combine(newPath, uniqueFileName );
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }
                return new CsvUploadResultDto()
                {
                    FileName = uniqueFileName,
                    Name = file.Name
                };
            }
            catch (System.Exception ex)
            {
                return new CsvUploadResultDto();
            }
        }

        [HttpGet]
        public async Task<PagedResultDto<HotelDto>> GetAll( PagedHotelResultRequestDto input)
        {
            var newPath = Path.Combine(_hostingEnvironment.WebRootPath, AppConsts.UploadPath);
            var fullPath = Path.Combine(newPath, input.FileId);
            var pagedResultDto = await _appService.GetAll(fullPath, input);
            return pagedResultDto;
        }
        [HttpPost]
        public async Task<ExportResult> Export(ExportRequest input)
        {
            var newPath = Path.Combine(_hostingEnvironment.WebRootPath, AppConsts.UploadPath);
            var fullPath = Path.Combine(newPath, input.FileId);
            var exportResult = await _appService.Export(fullPath, input);
            //Requires API gateway domain to expose static files
            var url = $"{Request.Scheme}://{Request.Host}/{AppConsts.UploadPath}/{exportResult.FileId}";
            
            exportResult.DownloadUrl = url;
            return exportResult;
        }


    }
}

