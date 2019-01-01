using Abp.Application.Services.Dto;
using Abp.Auditing;
using Abp.Domain.Uow;
using CaseStudy.Hotel.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Extensions;
using Abp.Linq.Extensions;

namespace CaseStudy.Hotel
{
    public class HotelAppService : CaseStudyAppServiceBase, IHotelAppService
    {
        [DisableAuditing]
        [UnitOfWork(IsDisabled = true)]
        public async Task<PagedResultDto<HotelDto>> GetAll(PagedHotelResultRequestDto input)
        {
            //Read Hotel Data From Csv Filter, Sort ,Group
            var result = GenerateHotels(100).AsQueryable();
            result= ApplySorting(result.AsQueryable(),input);
            result=ApplyPaging(result.AsQueryable(),input);
            return new PagedResultDto<HotelDto>()
            {
                Items = result.ToList(),
                TotalCount = 100
            };
        }
        protected virtual IQueryable<HotelDto> ApplySorting(IQueryable<HotelDto> query, PagedHotelResultRequestDto input)
        {
            //Try to sort query if available
            var sortInput = (ISortedResultRequest) input;
            if (sortInput != null)
            {
                if (!sortInput.Sorting.IsNullOrWhiteSpace())
                {
                    return query.OrderBy(sortInput.Sorting);
                }
            }
          
            //No sorting
            return query;
        }

        /// <summary>
        /// Should apply paging if needed.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="input">The input.</param>
        protected virtual IQueryable<HotelDto> ApplyPaging(IQueryable<HotelDto> query, PagedHotelResultRequestDto input)
        {
            //Try to use paging if available
            var pagedInput = (IPagedResultRequest) input;
            if (pagedInput != null)
            {
                return query.PageBy(pagedInput);
            }

            //Try to limit query result if available
            var limitedInput = (ILimitedResultRequest) input;
            if (limitedInput != null)
            {
                return query.Take(limitedInput.MaxResultCount);
            }

            //No paging
            return query;
        }
        private List<HotelDto> GenerateHotels(int i)
        {
            var hotelDtos = new List<HotelDto>();
            for (int j = 0; j < 100; j++)
            {
                hotelDtos.Add(new HotelDto()
                {
                    Address = $" Address {j}",
                    Contact = $"Contact {j}",
                    Name = $"Name {j}",
                    Phone = $"Phone {j}",
                    Url = $"Url {j}",
                    Stars = j

                });

            }

            return hotelDtos;
        }
    }
}
