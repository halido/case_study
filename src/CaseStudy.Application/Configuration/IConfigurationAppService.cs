using System.Threading.Tasks;
using CaseStudy.Configuration.Dto;

namespace CaseStudy.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
