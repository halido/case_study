using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Auditing;
using CaseStudy.Sessions.Dto;

namespace CaseStudy.Sessions
{
    public class SessionAppService : CaseStudyAppServiceBase, ISessionAppService
    {
        [DisableAuditing]
        public async Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations()
        {
            var output = new GetCurrentLoginInformationsOutput
            {
                Application = new ApplicationInfoDto
                {
                    Version = AppVersionHelper.Version,
                    ReleaseDate = AppVersionHelper.ReleaseDate,
                    Features = new Dictionary<string, bool>()
                }
            };

            return output;
        }
    }
}
