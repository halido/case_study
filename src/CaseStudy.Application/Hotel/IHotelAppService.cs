using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CaseStudy.Hotel.Dto;

namespace CaseStudy.Hotel
{
    public interface IHotelAppService : IApplicationService
    {
        Task<PagedResultDto<HotelDto>> GetAll(PagedHotelResultRequestDto input);
    }
}