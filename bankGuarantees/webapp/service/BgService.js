sap.ui.define([
	"com/bayer/tender/uilib/objects/BaseService",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (CoreService, Sorter, Filter, FilterOperator) {
	"use strict";

	var BgService = CoreService.extend("com.bayer.tender.bankguarantees.service.Bgservice", {

		constructor: function (model) {
			CoreService.call(this, model);
		},

        getBankGuarantee: function (sId) {
            var sKey = this.model.createKey("/BankGuarantees", {
                id: sId
            });
            return this.odata(sKey).get({});
        },

		saveBankGuarantee: function (guarantee) {

			const data = guarantee.getAll();

			const sKey = this.model.createKey("/BankGuarantees", {
				ID: data.ID
			});

			return this.odata(sKey).put(data);

		},

	});

	return BgService;
});