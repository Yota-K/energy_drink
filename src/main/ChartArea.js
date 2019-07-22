import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class ChartArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    render() {
        const drink_name = this.state.data.map((drink) => {
            return drink.name;
        });

        const caffeine = this.state.data.map((drink) => {
            return drink.caffeine;
        });

        const caffeine_hundred = this.state.data.map((drink) => {
            return Math.round((drink.caffeine / drink.capa) * 100);
        });

        const data = {
            labels: drink_name,
                datasets: [
                {
                    label: 'カフェインの量',
                    data: caffeine,
                    borderColor: 'rgba(75,192,192,1)',
                    backgroundColor: 'rgba(153,255,51,0.6)'
                },
                {
                    label: 'カフェインの量 100mlあたり',
                    data: caffeine_hundred,
                    borderColor: 'rgba(75,192,192,1)',
                    backgroundColor: 'rgba(255,153,0,0.4)'
                }
            ]
        };

        const options = {
            scales: {
                xAxes: [{
                    ticks: {
                        min: 0,
                        max: 200
                    }
                }]
            }
        };
        return(
            <div class="chart-area">
                <HorizontalBar data={data} options={options} />
            </div>
        );
    }
}

export default ChartArea;