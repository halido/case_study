using System.Collections.Generic;

namespace CaseStudy.Hotel.Dto
{
    public class GroupedHotel
    {
        public string Group { get; set; }
        public List<HotelDto> Hotels { get; set; }
    }
}