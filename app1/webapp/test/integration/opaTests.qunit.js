/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tutorial/app/one/app1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});