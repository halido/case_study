using System;
using System.Text;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Abp.AspNetCore;
using Abp.AspNetCore.Configuration;
using Abp.AspNetCore.SignalR;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CaseStudy.Configuration;

namespace CaseStudy
{
    [DependsOn(
         typeof(CaseStudyApplicationModule),
         typeof(AbpAspNetCoreModule)
     )]
    public class CaseStudyWebCoreModule : AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public CaseStudyWebCoreModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void PreInitialize()
        {

            Configuration.Modules.AbpAspNetCore()
                 .CreateControllersForAppServices(
                     typeof(CaseStudyApplicationModule).GetAssembly()
                 );

        }

    

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CaseStudyWebCoreModule).GetAssembly());
        }
    }
}
