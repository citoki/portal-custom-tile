sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("project.namespace.customTile.Component", {

		metadata: {
			"manifest": "json"
		},

		createContent: function () {
			var oTile = sap.ui.view({
				viewName: "project.namespace.customTile.DynamicTile",
				type: sap.ui.core.mvc.ViewType.JS
			});

			return oTile;
		}
	});
});