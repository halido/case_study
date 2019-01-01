using System;
using System.Collections.Generic;
using System.Text;
using Abp.Application.Services.Dto;

namespace CaseStudy.Hotel.Dto
{
   public class HotelDto
    {
        public string Name { get; set; }
        public string Address{ get; set; } 
        public int  Stars {get;set;}
        public string Contact { get; set; }
        public string Phone { get; set; }
        public string Uri { get; set; }
    }

   public class PagedHotelResultRequestDto : PagedAndSortedResultRequestDto
   {
       public string FileId { get; set; }
   }
}
