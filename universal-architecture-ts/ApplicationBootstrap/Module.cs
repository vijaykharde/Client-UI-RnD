﻿using CsTech.Modularity.Configuration;
using Library.Infrastructure;
using Microsoft.Practices.EnterpriseLibrary.Common.Configuration;
using StateBuilder.Library.Infrastructure;
using StateBuilder.RequestManager;
using Unity;

namespace ApplicationBootstrap
{
    [ConfigurationElementType(typeof(ModuleConfigurationElement))]
    public class Module : ModuleBase<ModuleConfigurationElement>
    {
        public Module(IWorkItem rootWorkItem)
            : base(rootWorkItem, "Module.ApplicationBootstrap")
        {
        }

        protected override void OnInitialize(ModuleConfigurationElement configurationElement)
        {
            base.OnInitialize(configurationElement);
            /*var requestProcessorRegistry = RootWorkItem.Container.Resolve<IRequestProcessorRegistry>();
            requestProcessorRegistry.RegisterProcessorType<RRQueryObject, RRResponseObject, RRSummaryRequestProcessor>();

            RootWorkItem.WorkItems.AddNew<RefinanceRatesWorkItem>();
            IWorkItem workItem = RootWorkItem.WorkItems.Get<RefinanceRatesWorkItem>();
            if (workItem.Status == WorkItemStatus.NotRunning)
            {
                workItem.Run();
            }*/
        }
    }
}
