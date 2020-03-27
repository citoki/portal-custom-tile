"use strict";
/*global jQuery, sap, hasher */

sap.ui.controller("project.namespace.customTile.Tile", {

	_oProperties: {},

	onInit: function () {
		var oComponentData = this.getOwnerComponent().getComponentData();
		this._oProperties = (oComponentData && oComponentData.properties) ? oComponentData.properties : {};

		var oModel = new sap.ui.model.json.JSONModel({
			title: this._oProperties.title || "Notifications",
			subTitle: this._oProperties.subtitle || "custom tile",
			busyChart: false,
			errors: 0,
			notifications: 0
		});

		this.getView().setModel(oModel);

		var oTileControl = this.getView().getTileControl();
		this.getView().addContent(oTileControl);

		this.fetchData(this.getView().getModel(), "/errors", "/notifservice/Notifications/$count?$filter=Type eq 'ERROR'");
		this.fetchData(this.getView().getModel(), "/notifications", "/notifservice/Notifications/$count");
	},

	onPress: function () {
		var sTargetUrl = this._oProperties.targetURL;

		if (sTargetUrl) {
			if (sTargetUrl[0] === "#") {
				hasher.setHash(sTargetUrl);
			} else {
				window.open(sTargetUrl, "_blank");
			}
		}
	},

	fetchData: function (oViewModel, sProperty, sEntity) {
		oViewModel.setProperty("/busyChart", true);

		jQuery.ajax({
			url: sEntity,
			contentType: "application/json",
			headers: {"Accept": "application/json"}
		})
		.done(function (data, textStatus, jqXHR) {
			oViewModel.setProperty("/busyChart", false);
			oViewModel.setProperty(sProperty, parseInt(data));
		}.bind(this))
		.fail(function (oResponse, textStatus, oError) {
			oViewModel.setProperty("/busyChart", false);
			oViewModel.setProperty(sProperty, 0);
		}.bind(this));
	}


});