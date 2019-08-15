var config = {
 widgets: [
    {
      "elementId": "unemployment_state_average",
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
          "height": 160,
          "width": 350,
          "padding": 0,
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
    },
    {
      "elementId": "unemployment_santa_clara_average",
      "view": {
        "metadata": {},
        "resources": [
          {
              "datasetId": "local_area_unemployment_statistics",
            "name": "local_area_unemployment_statistics__laus___annual_average",
            "transform": [
                {
                    "type": "filter",
                    "expression": "(data['Area Type'] == 'County') && (data['Area Name'] == 'Santa Clara County')"
                }
            ]
          }
        ],
        "specType": "vega",
        "spec": {
          "$schema": "https://vega.github.io/schema/vega/v3.json",
          "height": 160,
          "width": 350,
          "padding": 0,
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
  ],
    datasets: ["https://datahub.io/tom.wood/local_area_unemployment_statistics"]
}
