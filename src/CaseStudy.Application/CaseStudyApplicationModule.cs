using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;

namespace CaseStudy
{
    [DependsOn(
        typeof(CaseStudyCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class CaseStudyApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(CaseStudyApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Auditing.IsEnabled = false;
        }
    }
}
