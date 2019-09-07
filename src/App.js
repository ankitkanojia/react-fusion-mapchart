import React,{Component} from 'react';

// import Fusion Charts library
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import India from 'fusioncharts/maps/india';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

ReactFC.fcRoot(FusionCharts, Maps, India, FusionTheme);

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

// asia map chart configuration settings
const chartConfigs_asiaMap = {
  type: 'maps/india',
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


class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row" style={{marginTop:50}}>

            {/*Map section*/}
            {/* <div className="col-sm-12">
              <h3 className="text-center">Map Chart</h3>
              <ReactFC {...chartConfigs_map} />
            </div> */}

            {/*Map section*/}
            <div className="col-sm-12" style={{marginTop:50}}>
              <h3 className="text-center">Map Chart</h3>
              <ReactFC {...chartConfigs_asiaMap} />
            </div>
          </div>
        </div>)
  }
}

export default App;
