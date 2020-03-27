sap.ui.jsview("project.namespace.customTile.Tile", {

	getControllerName: function () {
		return "project.namespace.customTile.Tile";
	},

	createContent: function (oController) {
		this.setHeight("100%");
		this.setWidth("100%");
	},

	getTileControl: function () {
		jQuery.sap.require("sap.m.GenericTile");
		var oController = this.getController();

		// color attribute is only for backup reasons, colorPalette by ComparisonMicroChart is used
		var oChartData1 = new sap.suite.ui.microchart.ComparisonMicroChartData({title: "Errors", value: "{/errors}", color: "Error"});
		var oChartData2 = new sap.suite.ui.microchart.ComparisonMicroChartData({title: "Total", value: "{/notifications}", color: "Neutral"});
		var oMicroChart = new sap.suite.ui.microchart.ComparisonMicroChart({
			busy: "{/busyChart}",
			size: "Responsive",
			colorPalette: ["sapUiChartPaletteSemanticBad", "sapUiChartPaletteQualitativeHue1"],
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