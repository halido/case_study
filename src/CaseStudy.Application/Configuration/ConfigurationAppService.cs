using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using CaseStudy.Configuration.Dto;

namespace CaseStudy.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : CaseStudyAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
