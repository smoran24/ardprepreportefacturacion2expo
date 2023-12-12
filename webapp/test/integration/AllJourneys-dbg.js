sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "AR_DP_REP_FACTURACIONREPORTE_EXPO.AR_DP_REP_FACTURACIONREPORTE_EXPO.view.",
		autoWait: true
	});
});