using RefinancingRates.BusinessObjects;
using StateBuilder.Library.Infrastructure;
using StateBuilder.RequestManager;
using System.Threading;
using System.Threading.Tasks;

namespace RefinancingRates.RequestProcessors
{
    public class RRSummaryRequestProcessor : IRequestProcessor<RRQueryObject, RRResponseObject>
    {
        public void AssertRequest(RRQueryObject request)
        {
            //throw new System.NotImplementedException();
        }

        public Task ProcessAsync(RequestContext<RRQueryObject, RRResponseObject> requestContext, CancellationToken cancellationToken)
        {
            return Task.Run(() =>
            {
                requestContext.Response = new RRResponseObject()
                {
                    ProductType = requestContext.Request.ProductType,
                    Currency = requestContext.Request.Currency
                };
            });
        }
    }
}
