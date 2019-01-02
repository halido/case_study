using Abp.Application.Services.Dto;
using CsvHelper.Configuration.Attributes;
using System.Web;

namespace CaseStudy.Hotel.Dto
{
    public class HotelDto
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int Stars { get; set; }
        public string Contact { get; set; }
        public string Phone { get; set; }
        [Name("uri")]
        public string Url { get; set; }
    }

    public class PagedHotelResultRequestDto : PagedAndSortedResultRequestDto
    {
        public string FileId { get; set; }
    }
    public class CsvUploadResultDto
    {
        public string FileName { get; set; }
        public string Name { get; set; }
    }
}
