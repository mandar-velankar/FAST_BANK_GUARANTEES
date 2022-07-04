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
				editMode: false,
				selectedCountry:""
			};

			this.bgService = oService;
			BaseState.call(this);
		},

		getService: function () {
			return this.bgService;
		},

		setSelectedGuarantee: function(guarantee){
			this.setProperty("selectedGuarantee", guarantee);
		},

		getSelectedGuarantee: function(){
			return this.getProperty("selectedGuarantee");
		},
		setSelectedCountry:function(countryCode){
			this.setProperty("selectedCountry", countryCode);
		},
        getBankGuarantee: function (sId){
           /* this.setProperty("bankGuarantee", new BankGuarantee());
			return this.getService().getBankGuarantee(sId).then((guaranteeResponse) => {
				this.setProperty("bankGuarantee", new BankGuarantee(guaranteeResponse.data.results[0]));
				return this.getProperty("bankGuarantee");
			});*/
        },

		createGuarantee: function(data){
			if(data){
				return new BankGuarantee(data);
			}

			return "You must provide an object literal as a parameter to create a bank guarantee.";
		},

		createStateObject: function (selectedObj) {

			return this.createGuarantee(selectedObj);

		},

		onCancelBankGuarantee: function(oSelectedObjectContext){
			if(oSelectedObjectContext){
				var oSelectedGuarantee = oSelectedObjectContext.getObject();
				const guarantee = this.createStateObject(oSelectedGuarantee);

				/* new date should be calculated and set, together with the status*/
				let oClosingDate = new Date();
				oClosingDate.setHours(0,0,0,0);
				guarantee.closingDate = oClosingDate;
                if(guarantee.countryCode === 'ES'){
                    guarantee.expectedExpiryDate = oClosingDate;
                }
				guarantee.status = "Cancelled";

				this.setSelectedGuarantee(guarantee);
				this.saveBankGuarantee();
			}
		},

		/**
		 * Saves a given bank guarantee in the backend.
		 * @returns {Promise} - Return a promise
		 */
		 saveBankGuarantee: function(){
			return this.getService().saveBankGuarantee(this.getSelectedGuarantee());
		},
		
	});

	return BgState;

});