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
        // チャートのデータを取得
        const drinkName = this.state.data.map((drink) => {
            return drink.name;
        });

        const caffeine = this.state.data.map((drink) => {
            return drink.caffeine;
        });

        const caffeineHundred = this.state.data.map((drink) => {
            return Math.round((drink.caffeine / drink.capa) * 100);
        });

        // チャート
        const data = {
            labels: drinkName,
                datasets: [
                {
                    label: 'カフェインの量',
                    data: caffeine,
                    borderColor: 'rgba(75,192,192,1)',
                    backgroundColor: 'rgba(153,255,51,0.6)'
                },
                {
                    label: 'カフェインの量 100mlあたり',
                    data: caffeineHundred,
                    borderColor: 'rgba(75,192,192,1)',
                    backgroundColor: 'rgba(255,153,0,0.4)'
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        min: 0,
                        max: 200,
                        stepSize: 50
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 10
                    }
                }]
            }
        };

        return(
            <div className="chart-area">
                <HorizontalBar data={data} options={options} />
            </div>
        );
    }
}

export default ChartArea;