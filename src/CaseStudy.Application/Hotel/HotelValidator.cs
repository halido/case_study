using System;
using System.Text;
using CaseStudy.Hotel.Dto;
using FluentValidation;

namespace CaseStudy.Hotel
{
    public class HotelValidator : AbstractValidator<HotelDto>
    {
        public HotelValidator()
        {
            RuleFor(f => f.Name).NotEmpty().Must(BeUtf8);
            RuleFor(f => f.Url).Must(BeAUrl);
            RuleFor(f => f.Stars).InclusiveBetween(0, 5);
        }

        private bool BeAUrl(string arg)
        {
            Uri uriResult;
            return Uri.TryCreate(arg, UriKind.Absolute, out uriResult)
                   && (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
        }

        private bool BeUtf8(string arg)
        {
            return Encoding.UTF8.GetByteCount(arg) == arg.Length;
        }
    }
}