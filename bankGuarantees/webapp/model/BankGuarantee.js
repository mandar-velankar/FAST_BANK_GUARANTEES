sap.ui.define([
    "com/bayer/tender/uilib/objects/BaseObject"
], function (BaseObject) {
    "use strict";

    var bankGuarantee = BaseObject.extend("com.bayer.tender.uilib.model.BankGuarantee", {
        constructor: function (data) {
            //will copy all properties and make them camelcase starting with lowercase ;)
            BaseObject.call(this, data);

            if (data) {
                //copy array's manually to objects
                data.BankGuarantees && this.setBankGuarantees(data.BankGuarantees.results);
            }
        },

        setBankGuarantees: function (bankGuarantees){
            if(bankGuarantees){
                this.bankGuarantees = bankGuarantees.map((guarantee) => new BankGuarantee(guarantee));
                this.bankGuarantees.unshift({}); //add an empty object - needed for the ui
            }
        },

        getBankGuarantees: function (){
            return this.bankGuarantees || [];
        },
        
        getJSON: function () {
            return this.getJSONObject([
                "iD",
                "tenderID",
                "countryCode",
                "reference",
                "issueDate",
                "closingDate",
                "status",
                "type",
                "guaranteedAmount",
                "currency",
                "comment"
            ]);
        },

        getAll: function () {
            return {
                ...this.getJSON(),
            };
        }
    });
    
    return bankGuarantee;
});