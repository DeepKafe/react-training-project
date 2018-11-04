import React from 'react';
import BarChart from 'react-bar-chart';
import { chartConfig } from '../constants';

class Chart extends React.Component {
    render() {
        return (
            <div className="bar-chart">
                <BarChart
                    width={chartConfig.width}
                    height={chartConfig.height}
                    margin={chartConfig.margin}
                    data={this.props.data} />
            </div>
        );
    }
}

export default Chart;
