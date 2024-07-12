sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("chart.controller.Master", {
            onInit: function () {
                var data = {
                    BusinessData: [
                        { Country: "Canada", profit: 410.87 },
                        { Country: "China", profit: 338.29 },
                        { Country: "France", profit: 487.66 }
                    ]
                };
                var oModel = new JSONModel(data);
                this.getView().setModel(oModel);
            }
        });
    });
