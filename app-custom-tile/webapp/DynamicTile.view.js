sap.ui.jsview("project.namespace.customTile.DynamicTile", {

	getControllerName: function () {
		return "project.namespace.customTile.DynamicTile";
	},

	createContent: function (oController) {
		this.setHeight("100%");
		this.setWidth("100%");
	},

	getTileControl: function () {
		jQuery.sap.require("sap.m.GenericTile");
		var oController = this.getController();

		var oChartData1 = new sap.suite.ui.microchart.ComparisonMicroChartData({title: "Errors", value: "{/errors}", color: "Critical"});
		var oChartData2 = new sap.suite.ui.microchart.ComparisonMicroChartData({title: "Total Notifications", value: "{/notifications}", color: "Neutral"});
		var oMicroChart = new sap.suite.ui.microchart.ComparisonMicroChart({
			busy: "{/busyChart}",
			size: "Responsive",
			data: [oChartData1, oChartData2]
		});

		var oTile = new sap.m.GenericTile({
			mode: sap.m.GenericTileMode.ContentMode,
			header: "{/title}",
			subheader: "{/subTitle}",
			press: [oController.onPress, oController],
			tileContent: new sap.m.TileContent({content: oMicroChart})
		});

		return oTile;
	}
});