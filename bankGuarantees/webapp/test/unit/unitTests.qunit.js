/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"combayer.tender.bankguarantees./bank_guarantees/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
