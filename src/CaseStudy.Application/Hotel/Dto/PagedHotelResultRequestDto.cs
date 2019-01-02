using Abp.Application.Services.Dto;

namespace CaseStudy.Hotel.Dto
{
    public class PagedHotelResultRequestDto : PagedAndSortedResultRequestDto
    {
        public string FileId { get; set; }
    }
}