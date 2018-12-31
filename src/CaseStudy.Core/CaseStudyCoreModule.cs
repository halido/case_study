using Abp;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Timing;
using CaseStudy.Configuration;
using CaseStudy.Timing;

namespace CaseStudy
{
    [DependsOn(typeof(AbpKernelModule))]
    public class CaseStudyCoreModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Auditing.IsEnabledForAnonymousUsers = true;

          


            // Enable this line to create a multi-tenant application.
            Configuration.MultiTenancy.IsEnabled = CaseStudyConsts.MultiTenancyEnabled;


            Configuration.Settings.Providers.Add<AppSettingProvider>();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CaseStudyCoreModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            IocManager.Resolve<AppTimes>().StartupTime = Clock.Now;
        }
    }
}
