using System.Linq;
using System.Linq.Dynamic.Core;
using Abp.Application.Services.Dto;
using Abp.Domain.Services;
using Abp.Extensions;
using Abp.Linq.Extensions;

namespace CaseStudy
{
    /// <summary>
    /// Derive your application services from this class.
    /// </summary>
    public abstract class CaseStudyAppServiceBase<T> : DomainService
    {


        protected CaseStudyAppServiceBase()
        {
        }

        protected virtual IQueryable<T> ApplySorting(IQueryable<T> query, PagedResultRequestDto input)
        {
            //Try to sort query if available
            var sortInput = (ISortedResultRequest)input;
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
        protected virtual IQueryable<T> ApplyPaging(IQueryable<T> query, PagedResultRequestDto input)
        {
            //Try to use paging if available
            var pagedInput = (IPagedResultRequest)input;
            if (pagedInput != null)
            {
                return query.PageBy(pagedInput);
            }

            //Try to limit query result if available
            var limitedInput = (ILimitedResultRequest)input;
            if (limitedInput != null)
            {
                return query.Take(limitedInput.MaxResultCount);
            }

            //No paging
            return query;
        }



    }
}
