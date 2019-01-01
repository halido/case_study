using CaseStudy.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using CaseStudy.Models;

namespace CaseStudy.Web.Host.Controllers
{
    [Route("api/[controller]/[action]")]
    public class HotelController : CaseStudyControllerBase
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public HotelController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }
        // GET: /<controller>/
        [HttpPost, DisableRequestSizeLimit]
        public CsvUploadResultDto UploadCsv(IFormFile file)
        {
            try
            {
                string folderName = "Upload";
                string webRootPath = _hostingEnvironment.WebRootPath;
                string newPath = Path.Combine(webRootPath, folderName);
                string uniqueFileName = Guid.NewGuid().ToString("N");
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                if (file.Length > 0)
                {

                    string fullPath = Path.Combine(newPath, uniqueFileName+ Path.GetExtension(file.FileName));
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
    }
}

