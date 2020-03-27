sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("project.namespace.customTile2.Component", {

		metadata: {
			manifest: "json"
		},

		createContent: function () {
			var oView = sap.ui.xmlview({
				viewName: "project.namespace.customTile2.Tile",
				type: sap.ui.core.mvc.ViewType.XML
			});

			return oView;
		},

		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
		}

	});

});
