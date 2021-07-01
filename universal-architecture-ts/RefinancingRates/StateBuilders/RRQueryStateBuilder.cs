using RefinancingRates.BusinessObjects;
using RefinancingRates.Constants;
using StateBuilder.Library.Infrastructure;
using StateBuilder.Library.StateBuilders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EarlyRedemption.StateBuilders
{
    public class RRQueryStateBuilder : StateBuilderBase<RRQueryObject>
    {
        private readonly IWorkItem _workItem;
        public RRQueryStateBuilder(IWorkItem workItem)
            : base(workItem, StateNames.RRQuery)
        {
            _workItem = workItem;
        }

        protected override IEnumerable<string> GetDependencies()
        {
            //yield return MemberToMemberStateNames.BuyerAbuseReports;
            return base.GetDependencies();
        }

        protected override void GetStateObject(StateBuilderContext context)
        {

        }
    }
}
