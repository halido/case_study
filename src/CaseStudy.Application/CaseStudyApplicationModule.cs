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

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddProfiles(thisAssembly)
            );
        }
    }
}
