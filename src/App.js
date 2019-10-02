import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.worldwithcountries';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

class MapChart extends Component {
    state = {
        dataSource: {
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
                <h2 style={{textAlign:"center"}}>Map Chart</h2>
                <div style={{ textAlign: 'center' }}>
                    <ReactFC
                        type="worldwithcountries"
                        width="80%"
                        height="500"
                        dataFormat="JSON"
                        dataSource={this.state.dataSource} />
                </div>
            </React.Fragment>);
    }
}

export default MapChart;
