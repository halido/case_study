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

         
                output.User = new UserLoginInfoDto()
                {
                    Name = "Halit",
                    EmailAddress = "halitmuslu@gmail.com",
                    Id = 1,
                    Surname = "Muslu",
                    UserName="halitmuslu"
                };
            return output;
        }
    }
}
