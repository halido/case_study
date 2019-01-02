using Abp.Application.Services.Dto;
using CaseStudy.Serialization;

namespace CaseStudy.Hotel.Dto
{
    public class ExportRequest : ISortedResultRequest, IGroupedResultRequest
    {
        public string Sorting { get; set; }
        public string Group { get; set; }
        public OutputFormat OutputFormat { get; set; }
        public string FileId { get; set; }
    }
}