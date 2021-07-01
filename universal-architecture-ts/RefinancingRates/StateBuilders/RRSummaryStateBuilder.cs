using RefinancingRates.BusinessObjects;
using RefinancingRates.Constants;
using StateBuilder.Library.Infrastructure;
using StateBuilder.Library.StateBuilders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EarlyRedemption.StateBuilders
{
    public class RRSummaryStateBuilder : StateBuilderBase<RRResponseObject>
    {
        private readonly IWorkItem _workItem;
        public RRSummaryStateBuilder(IWorkItem workItem)
            : base(workItem, StateNames.RRSummary)
        {
            _workItem = workItem;
        }

        protected override IEnumerable<string> GetDependencies()
        {
            yield return StateNames.RRQuery;
            //yield return base.GetDependencies();
        }
        protected override void GetStateObject(StateBuilderContext context)
        {
            /*ERQueryObject eRQueryObject = _workItem.State[StateNames.ERQuery] as ERQueryObject;
            if (eRQueryObject != null)
            {
                context.SetResult(new ERResponseObject() { Currency = eRQueryObject.Currency, ProductType = eRQueryObject.ProductType });
            }*/
            context.QueueAsync<RRQueryObject, RRResponseObject>(
                context.GetValue<RRQueryObject>(StateNames.RRQuery),
                requestContext =>
                {
                    context.SetResult(requestContext.Response);
                }
            );
        }
    }
}
