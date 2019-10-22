# Implement Simple Map fusion chart with react app
FusionCharts is a JavaScript charting library which provides more than 95 charts and 2,000 maps which can be use full in mobile and web applications.

## Official Links
  - Website: [https://www.fusioncharts.com](https://www.fusioncharts.com)
  - NPM Package: [https://www.npmjs.com/package/fusioncharts](https://www.npmjs.com/package/fusioncharts)

## Getting Started

**Note:** [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com/lang/en) must be installed globally on your local pc.
 - See [npm documentation](https://docs.npmjs.com/) to know more about npm in detail.
 - See [yarn documentation](https://yarnpkg.com/en/docs) to know more about yarn in detail.
 
## Installation Fusion Chart Library

[Note](#): In demo for designing purpose we used the simple [bootstrap](https://www.npmjs.com/package/bootstrap) library.
 
We will use `react-fusioncharts` component to integrate fusion chart functionality.

**Install from NPM or from Yarn**
 ```
npm install --save react-fusioncharts

or

yarn add react-fusioncharts
```

### Usage

- create react app using your specific app name in desire folder path `create-react-app`
- once you create the react app successfully there will be `app.js` file lies in `src` folder.
- now we need to import `react-fusioncharts` and FusionCharts in your `app.js` file

```
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);
```

Note: This way of import will not work in IE11 and below.

#### Configuration setting for chart

```
        type: 'world',
        width: '100%',
        height: 450,
        dataFormat: 'json',
        dataSource: {
            "chart": {
              "theme": "fusion",
              "caption": "Increased Population History by country Last Year",
              "xAxisName": "Population",
              "yAxisName": "Growth",
              "entityFillHoverColor": "#FFF9C4",
              "numberSuffix": "%",
              "showBorder": "1",
              "borderColor": "#ccc",
              "bgColor": "#FFFFFF",
              //Tooltip customization
              "toolTipBorderColor": "#666666",
              "toolTipBgColor": "#efefef",
              "toolTipBgAlpha": "80",
              "showToolTipShadow": "1",
              //Theme
              "plotBorderThickness": "0.25",
              "showxaxispercentvalues": "1",
              "showValues": "1"
            },
            "colorrange": {
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
            "data": []
        }
```

#### Data Source Collection

```
       "data": [{
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
```

This sample static data collection need to pass in configuration setting. 

#### Attach the callback to an event through the React-FC component:

```javascript
 <ReactFC {...chartConfigsSettings} /> 
```

##### Consider the example to integrate or implement fusion chart in the react app.

```javascript
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
```

## ISSUE : With current package fusion chart library not provided all map collection

Fusion Maps XT offers interactive maps to plot geographical data like revenue by regions, population by state, survey and election results effectively. You can also drop markers on the map to pinpoint places like office locations and flight routes. It has over 1000 maps including all continents, major countries and all the US states.

Fusion chart library initially not provided any collection of maps. Whenever you install fusion chart library on initial base it has only few maps file in map folder of package. Due to that reason you're file is not available in the whole package. They provided the link on their official page for download all the map related to fusion map chart.

To render these maps, you need to download the map definition files from here and copy-paste the maps folder within your fusion charts directory.

###### Please follow the steps

1) open link https://www.fusioncharts.com/download/map-definition-files
2) click on Download Map Definition Files(https://cdn.fusioncharts.com/downloads/addons/fusionmaps-xt-definition.zip) which contains collection of all the maps available in Fusion Maps XTall the maps available in Fusion Maps XT
3) after download copy the /maps folder from this download package and paste it in your fusion charts folder.
4) now run you're existing application the file will be found and your react application will work as expected.

## Licensing

The FusionCharts React component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FusionCharts library in your page separately, which has a [separate license](https://www.fusioncharts.com/buy).
