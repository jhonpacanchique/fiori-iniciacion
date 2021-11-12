/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Narwhal_IT/invoices/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
