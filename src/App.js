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

// map chart configuration settings
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
      "entityFillColor": "#A8A8A8",
      "entityFillHoverColor": "#E5E5E9"
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
            <div className="col-sm-12" style={{marginTop:50}}>
              <h3 className="text-center">Map With Marker Chart</h3>
              <ReactFC {...chartConfigs_withMarkerMap} />
            </div>
          </div>
        </div>)
  }
}

export default App;
