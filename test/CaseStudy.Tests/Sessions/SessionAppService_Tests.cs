using System.Threading.Tasks;
using Shouldly;
using Xunit;
using CaseStudy.Sessions;

namespace CaseStudy.Tests.Sessions
{
    public class SessionAppService_Tests : CaseStudyTestBase
    {
        private readonly ISessionAppService _sessionAppService;

        public SessionAppService_Tests()
        {
            _sessionAppService = Resolve<ISessionAppService>();
        }

     
    }
}
