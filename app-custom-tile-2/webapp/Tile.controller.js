sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
    Controller,
    JSONModel
) {
    "use strict";

    return Controller.extend("project.namespace.customTile2.controller.Tile", {

        _oProperties: {},
        _oViewModel: undefined,

        onInit: function() {
            var oComponentData = this.getOwnerComponent().getComponentData();
            this._oProperties = (oComponentData && oComponentData.properties)
                ? oComponentData.properties
                : {
                    title: "Fallback Title",
                    subtitle: "Fallback SubTitle",
                    targetURL: "#"
                };

            this._oViewModel = this._initViewModel();
            this.getView().setModel(this._oViewModel, "view");
            this.fetchData(this._oViewModel, "/notifications", "/notifservice/Notifications/$count");
            this.fetchData(this._oViewModel, "/errors", "/notifservice/Notifications/$count?$filter=Type eq 'ERROR'");
            this.fetchData(this._oViewModel, "/warnings", "/notifservice/Notifications/$count?$filter=Type eq 'WARNING'");
            this.fetchData(this._oViewModel, "/infos", "/notifservice/Notifications/$count?$filter=Type eq 'INFO'");
        },

        /* =========================================================== */
		/*  internal methods                                           */
		/* =========================================================== */

        /**
		 * Creates view model (local view model).
		 *
		 * @returns {sap.ui.model.json.JSONModel} Local JSON model for fragment data
		 * @private
		 */
		_initViewModel: function () {
			var oData = {
                busy: false,
                title: this._oProperties.title,
                subTitle: this._oProperties.subtitle,
                notifications: 0,
                errors: 0,
                warnings: 0,
                info: 0
			};

			if (!this._oViewModel) {
				return new JSONModel(oData);

			} else {
				this._oViewModel.setData(oData);
				return this._oViewModel;
			}
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
            oViewModel.setProperty("/busy", true);

            jQuery.ajax({
                url: sEntity,
                contentType: "application/json",
                headers: {"Accept": "application/json"}
            })
            .done(function (data, textStatus, jqXHR) {
                oViewModel.setProperty("/busy", false);
                oViewModel.setProperty(sProperty, parseInt(data));
            }.bind(this))
            .fail(function (oResponse, textStatus, oError) {
                oViewModel.setProperty("/busy", false);
                oViewModel.setProperty(sProperty, 0);
            }.bind(this));
        }

    });
});
