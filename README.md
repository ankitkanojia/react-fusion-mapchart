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
import React,{Component} from 'react';

// import Fusion Charts library
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

// Map chart configuration settings
const chartConfigs_map = {
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
  },
};

// map with marker chart configuration settings
const chartConfigs_withMarkerMap = {
  type: 'world',
  width: '100%',
  height: 450,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Top 5 Airports in the World",
      "subcaption": "Based on Passenger Traffic",
      "theme": "fusion",
      "showMarkerLabels": "1",
      "entityFillColor": "#ffca3a",
      "entityFillHoverColor": "#FFF9C4"
    },
    "markers": {
      "shapes": [{
          "id": "myCustomShape",
          "type": "image",
          "url": "https://static.fusioncharts.com/docs/assets/airplane-99047_150.png",
          "xscale": "15",
          "yscale": "15",
          "labelPadding": "15"
      }],
      "items": [{
              "id": "lon",
              "shapeid": "myCustomShape",
              "x": "340.23",
              "y": "125.9",
              "label": "LHR",
              "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
              "labelpos": "left"
          }, {
              "id": "was",
              "shapeid": "myCustomShape",
              "x": "160.14",
              "y": "164.9",
              "label": "ATL",
              "tooltext": "Hartsfield Jackson Atlanta International Airport {br}IACL Code : KATL",

              "labelpos": "bottom"
          }, {
              "id": "dub",
              "shapeid": "myCustomShape",
              "x": "458.14",
              "y": "203.9",
              "label": "DXB",
              "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
              "labelpos": "bottom"
          }, {
              "id": "tok",
              "shapeid": "myCustomShape",
              "x": "628.14",
              "y": "165.9",
              "label": "HND",
              "tooltext": "Tokyo Haneda Airport{br} IACL Code : RJTT",
              "labelpos": "bottom"
          }, {
              "id": "beij",
              "shapeid": "myCustomShape",
              "x": "573.14",
              "y": "161.9",
              "tooltext": "Beijing Capital International Airport {br} IACL Code : ZBAA",
              "labelpos": "bottom"
          }

      ]
  }
  },
};

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row" style={{marginTop:50}}>

            {/*Map section*/}
            <div className="col-sm-12">
              <h3 className="text-center">Map Chart</h3>
              <ReactFC {...chartConfigs_map} />
            </div>

            {/*Map with marker section*/}
            <div  className="col-sm-12 border" style={{marginTop:50}}>
              <h3 className="text-center">Map With Marker Chart</h3>
              <ReactFC {...chartConfigs_withMarkerMap} />
            </div>
            
          </div>
        </div>)
  }
}

export default App;
```

#### Error in displaying map

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
