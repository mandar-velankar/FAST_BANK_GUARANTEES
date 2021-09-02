sap.ui.define([
	"com/bayer/tender/uilib/objects/BaseState",
	//"../libs/momentjs/moment.min",
    "../model/BankGuarantee",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/BusyIndicator",
	"sap/m/MessageBox",
], function (BaseState, BankGuarantee, JSONModel, BusyIndicator, MessageBox) {
	"use strict";

	var BgState = BaseState.extend("com.bayer.tender.bankguarantees.state.BgState", {

		constructor: function (oService) {
			//data used for the view
			this.data = {
                //bankGuarantee: new BankGuarantee(),
				editMode: false
			};

			this.bgService = oService;
			BaseState.call(this);
		},

		getService: function () {
			return this.bgService;
		},

        getBankGuarantee: function (sId){
           /* this.setProperty("bankGuarantee", new BankGuarantee());
			return this.getService().getBankGuarantee(sId).then((guaranteeResponse) => {
				this.setProperty("bankGuarantee", new BankGuarantee(guaranteeResponse.data.results[0]));
				return this.getProperty("bankGuarantee");
			});*/
        }
		
	});

	return BgState;

});