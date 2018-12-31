using System.Threading.Tasks;
using Abp.Application.Services;
using CaseStudy.Sessions.Dto;

namespace CaseStudy.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
