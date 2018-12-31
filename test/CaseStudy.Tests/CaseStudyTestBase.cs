using System;
using Abp;
using Abp.TestBase;

namespace CaseStudy.Tests
{
    public abstract class CaseStudyTestBase : AbpIntegratedTestBase<CaseStudyTestModule>
    {
        protected CaseStudyTestBase()
        {
          
            // Seed initial data for host
            AbpSession.TenantId = null;
          

            // Seed initial data for default tenant
            AbpSession.TenantId = 1;
        
        }

        protected IDisposable UsingTenantId(int? tenantId)
        {
            var previousTenantId = AbpSession.TenantId;
            AbpSession.TenantId = tenantId;
            return new DisposeAction(() => AbpSession.TenantId = previousTenantId);
        }


     
    }
}
