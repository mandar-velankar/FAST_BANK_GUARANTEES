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
        }
        
        //<property>Changed function
        // countryCodeChanged: function (state, event) {
        //     //do something when countryCode changes in the view/ui
        // },
     
        // getJSON: function () {
        //     return this.getJSONObject(["CountryCode", "CountryName"]);
        // },
        // getAll: function () {
        //     // return {
        //     //     ...this
        //     // };
        // }
    });
    return bankGuarantee;
});