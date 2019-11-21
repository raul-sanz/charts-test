import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class ChartComponent extends Component {
  
  constructor(props) {
    super(props);

    let total = props.datos.tablet + props.datos.smartphone
    let smartphoneVal = props.datos.smartphone/total*100
    let tabletVal = 100-smartphoneVal

    this.state = {
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -2,
                show: true,
                color: "#888",
                fontSize: "15px"
              },
              value: {
                formatter: function(val) {
                  return total;
                },
                color: "#111",
                fontSize: "18px",
                show: true
              }
            },
          },
        },
        labels: [`${this.props.label}`],
        fill: {
          colors: [`${this.props.color}`],
        }
      },
      series: [tabletVal],
      vals:{
        smartphoneVal,
        tabletVal
      }
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <Chart options={this.state.options} series={this.state.series} type="radialBar" />
          </div>
        </div>
        <footer className="is-mobile columns">
          <div className="column is-6">
            <p className="is-size-7 has-text-weight-medium" style={{color: this.props.color}}>Tablet</p>
            <p className="is-size-7 has-text-weight-medium" >
              {Math.round(this.state.vals.tabletVal)}% <span className="has-text-weight-normal color-grey" >{this.props.datos.tablet}</span>
            </p>
          </div>
          <div className="column is-6 is-pulled-right">
            <p className="is-size-7 has-text-weight-medium">Smartphone</p>
            <p className="is-size-7 has-text-weight-medium" >
              {Math.round(this.state.vals.smartphoneVal)}% <span className="has-text-weight-normal color-grey" >{this.props.datos.smartphone}</span>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}
export default ChartComponent