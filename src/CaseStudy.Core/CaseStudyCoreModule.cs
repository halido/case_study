using Abp;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Timing;
using CaseStudy.Configuration;
using CaseStudy.Serialization;
using CaseStudy.Timing;
using Castle.MicroKernel.Registration;

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
            IocManager.IocContainer.Register(
                Component.For<IObjectSerializer>().ImplementedBy<JsonSerializer>().Named(OutputFormat.json.ToString()).LifestyleSingleton());
            IocManager.IocContainer.Register(
                Component.For<IObjectSerializer>().ImplementedBy<XmlSerializer>().Named(OutputFormat.xml.ToString()).LifestyleSingleton());
        }

        public override void PostInitialize()
        {
            IocManager.Resolve<AppTimes>().StartupTime = Clock.Now;
        }
    }
}
