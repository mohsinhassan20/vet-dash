import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import constants from "../../constants/constants"
const { data } = constants
console.log(data);
class Donut extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {},
            series: [44, 55, 41],
            labels: ['A', 'B', 'C',]
        }
    }

    render() {

        return (
            <div className="donut  ">
                <Chart className="mx-44" options={this.state.options} series={this.state.series} type="donut" width="500" height="500" />
            </div>
        );
    }
}

export default Donut;