using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CaseStudy.Configuration;

namespace CaseStudy.Web.Host.Startup
{
    [DependsOn(
       typeof(CaseStudyWebCoreModule))]
    public class CaseStudyWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public CaseStudyWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CaseStudyWebHostModule).GetAssembly());
        }
    }
}
