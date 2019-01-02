using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Services;
using CaseStudy.Hotel.Dto;

namespace CaseStudy.Hotel
{
    public interface IHotelAppService : IDomainService
    {
        Task<PagedResultDto<HotelDto>> GetAll(string filePath, PagedHotelResultRequestDto input);
    }
}