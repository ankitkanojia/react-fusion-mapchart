import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';

//download all map from https://cdn.fusioncharts.com/downloads/addons/fusionmaps-xt-definition.zip
import WorldWithCountries from 'fusioncharts/maps/fusioncharts.worldwithcountries';
import ReactFCWorldWithCountries  from 'react-fusioncharts';
import ReactFCWorld from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import World from 'fusioncharts/maps/fusioncharts.world';

ReactFCWorldWithCountries.fcRoot(FusionCharts, Maps, WorldWithCountries, FusionTheme);
ReactFCWorld.fcRoot(FusionCharts, Maps, World, FusionTheme);

class MapChart extends Component {
    state = {
        dataSource_world: {
            "chart": {
                canvasBorderColor: "#000000",
                canvasBorderThickness: 1,
                showBorder: true,
                borderColor: "#000000",
                showCanvasBorder: true,
                theme: "fusion",
                caption: "Increased Population History by country Last Year",
                xAxisName: "Population",
                yAxisName: "Growth",
                entityFillHoverColor: "#FFF9C4",
                numberSuffix: "%",
                showBorder: "1",
                bgColor: "#FFFFFF",
                //Tooltip customization
                toolTipBorderColor: "#666666",
                toolTipBgColor: "#efefef",
                toolTipBgAlpha: "80",
                showToolTipShadow: "1",
                //Theme
                plotBorderThickness: "0.25",
                showxaxispercentvalues: "1",
                showValues: "1"
            },
            colorrange: {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "100",
                    "color": "#FFD74D"
                }, {
                    "minvalue": "0",
                    "maxvalue": "100",
                    "color": "#FB8C00"
                }, {
                    "minvalue": "0",
                    "maxvalue": "100",
                    "color": "#E65100"
                }]
            },
            data: [{
                "id": "NA",
                "value": "20",
                "showLabel": "1"
            }, {
                "id": "SA",
                "value": "30",
                "showLabel": "1"
            }, {
                "id": "AS",
                "value": "48",
                "showLabel": "1"
            }, {
                "id": "EU",
                "value": "20",
                "showLabel": "1"
            }, {
                "id": "AF",
                "value": "2.58",
                "showLabel": "1"
            }, {
                "id": "AU",
                "value": "15",
                "showLabel": "1"
            }]
        },
        dataSource_worldWithCountry: {
            "chart": {
                showCanvasBorder: true,
                canvasBorderColor: "#000000",
                canvasBorderThickness: 1,
                showBorder: true,
                borderColor: "#000000",
                fillColor: "#f1f1f1",
                caption: "* USA traffic not displayed on Heat Map",
                includevalueinlabels: "1",
                showHoverEffect: false,
                showEntityHoverEffect: false,
                theme: "fusion",
            },
            data: [
                {
                    "id": "27",
                    "value": "8",
                    "color" : "#f65122"
                },
                {
                    "id": "159",
                    "value": "3",
                    "color" : "#fcc50b"
                },
                {
                    "id": "142",
                    "value": "3",
                    "color" : "#f65122"
                },
                {
                    "id": "141",
                    "value": "9",
                    "color" : "#f3172d"
                },
                {
                    "id": "173",
                    "value": "9",
                    "color" : "#f3172d"
                },
                {
                    "id": "113",
                    "value": "5",
                    "color" : "#f65122"
                },
                {
                    "id": "193",
                    "value": "5",
                    "color" : "#f65122"
                },
                {
                    "id": "122",
                    "value": "9",
                    "color" : "#f65122"
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2 style={{textAlign:"center"}}>Map With World Chart</h2>
                <div style={{ textAlign: 'center' }}>
                    <ReactFCWorldWithCountries
                        type="worldwithcountries"
                        width="80%"
                        height="500"
                        dataFormat="JSON"
                        dataSource={this.state.dataSource_worldWithCountry} />
                </div>
                <br />
                <h2 style={{ textAlign: "center" }}>Map World Chart</h2>
                <div style={{ textAlign: 'center' }}>
                    <ReactFCWorld
                        type="world"
                        width="80%"
                        height="500"
                        dataFormat="JSON"
                        dataSource={this.state.dataSource_world} />
                </div>
                <br />
                <br />
            </React.Fragment>);
    }
}

export default MapChart;
