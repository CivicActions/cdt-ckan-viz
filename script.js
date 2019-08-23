function buildStateWidget(elementID) {
  return {
    "elementId": elementID,
    "view": {
      "metadata": {},
      "resources": [
        {
          "datasetId": "local_area_unemployment_statistics",
          "name": "local_area_unemployment_statistics__laus___annual_average",
          "transform": [
            {
              "type": "filter",
              "expression": "data['Area Type'] == 'State'"
            }
          ]
        }
      ],
      "specType": "vega",
      "spec": {
        "$schema": "https://vega.github.io/schema/vega/v3.json",
        "height": 200,
        "width": 238,
        "padding": 0,
        "data": [
          {
            "name": "local_area_unemployment_statistics__laus___annual_average",
            "format": {
              "parse": {
                "Year": "date"
              }
            }
          }
        ],
        "scales": [
          {
            "name": "x",
            "type": "utc",
            "range": "width",
            "domain": {
              "data": "local_area_unemployment_statistics__laus___annual_average",
              "field": "Year"
            }
          },
          {
            "name": "y",
            "type": "linear",
            "range": "height",
            "nice": true,
            "zero": false,
            "domain": {
              "data": "local_area_unemployment_statistics__laus___annual_average",
              "field": "Unemployment Rate"
            }
          }
        ],
        "axes": [
          {
            "orient": "bottom",
            "scale": "x",
            "labelFont": "Lato",
            "format": "%Y",
            "domain": false,
            "ticks": false,
            "labelPadding": 10,
            "labelOverlap": true,
            "labelFontSize": 9
          },
          {
            "orient": "right",
            "scale": "y",
            "labelFont": "Lato",
            "domain": false,
            "ticks": false,
            "grid": true,
            "labelFontSize": 9
          }
        ],
        "marks": [
          {
            "type": "line",
            "from": {
              "data": "local_area_unemployment_statistics__laus___annual_average"
            },
            "encode": {
              "enter": {
                "x": {
                  "scale": "x",
                  "field": "Year"
                },
                "y": {
                  "scale": "y",
                  "field": "Unemployment Rate"
                },
                "strokeWidth": {
                  "value": 2
                },
                "stroke": {
                  "value": "#A95F6D"
                }
              }
            }
          }
        ]
      }
    }
  }
}

function buildCountyWidget(elementID, county) {
  var expression = `(data['Area Type'] == 'County') && (data['Area Name'] == '${county}')`;
  return {
    "elementId": elementID,
    "view": {
      "metadata": {},
      "resources": [
        {
          "datasetId": "local_area_unemployment_statistics",
          "name": "local_area_unemployment_statistics__laus___annual_average",
          "transform": [
            {
              "type": "filter",
              "expression": expression
            }
          ]
        }
      ],
      "specType": "vega",
      "spec": {
        "$schema": "https://vega.github.io/schema/vega/v3.json",
        "height": 200,
        "width": 238,
        "padding": 0,
        "data": [
          {
            "name": "local_area_unemployment_statistics__laus___annual_average",
            "format": {
              "parse": {
                "Year": "date"
              }
            }
          }
        ],
        "scales": [
          {
            "name": "x",
            "type": "utc",
            "range": "width",
            "domain": {
              "data": "local_area_unemployment_statistics__laus___annual_average",
              "field": "Year"
            }
          },
          {
            "name": "y",
            "type": "linear",
            "range": "height",
            "nice": true,
            "zero": false,
            "domain": {
              "data": "local_area_unemployment_statistics__laus___annual_average",
              "field": "Unemployment Rate"
            }
          }
        ],
        "axes": [
          {
            "orient": "bottom",
            "scale": "x",
            "labelFont": "Lato",
            "format": "%Y",
            "domain": false,
            "ticks": false,
            "labelPadding": 10,
            "labelOverlap": true,
            "labelFontSize": 9
          },
          {
            "orient": "right",
            "scale": "y",
            "labelFont": "Lato",
            "domain": false,
            "ticks": false,
            "grid": true,
            "labelFontSize": 9
          }
        ],
        "marks": [
          {
            "type": "line",
            "from": {
              "data": "local_area_unemployment_statistics__laus___annual_average"
            },
            "encode": {
              "enter": {
                "x": {
                  "scale": "x",
                  "field": "Year"
                },
                "y": {
                  "scale": "y",
                  "field": "Unemployment Rate"
                },
                "strokeWidth": {
                  "value": 2
                },
                "stroke": {
                  "value": "#A95F6D"
                }
              }
            }
          }
        ]
      }
    }
  }
}

function buildConfig() {
  return {
    widgets: [
      buildStateWidget('unemployment_state_average'),
      buildCountyWidget('unemployment_santa_clara_average', 'Santa Clara County'),
      buildCountyWidget('unemployment_alameda_average', 'Alameda County'),
      buildCountyWidget('unemployment_santa_cruz_average', 'Santa Cruz County'),
      buildCountyWidget('unemployment_los_angeles_average', 'Los Angeles County'),
      buildCountyWidget('unemployment_napa_average', 'Napa County'),
      buildCountyWidget('unemployment_sonoma_average', 'Sonoma County'),
      buildCountyWidget('unemployment_monterey_average', 'Monterey County')
    ],
    datasets: ["https://datahub.io/tom.wood/local_area_unemployment_statistics"]
  }
}
var config = buildConfig();

