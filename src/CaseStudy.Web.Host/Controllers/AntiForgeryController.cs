using Microsoft.AspNetCore.Antiforgery;
using CaseStudy.Controllers;

namespace CaseStudy.Web.Host.Controllers
{
    public class AntiForgeryController : CaseStudyControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
