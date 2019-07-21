import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'
import DrinkTable from './DrinkTable';
import {HorizontalBar} from 'react-chartjs-2';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.drink_data = [
            {
                name: 'モンスターエナジー（日本）',
                capa: 355,
                cal: 178,
                caffeine: 142
            },
            {
                name: 'モンスターエナジー（米）',
                capa: 473,
                cal: 210,
                caffeine: 160
            },
            {
                name: 'モンスターエナジー M3',
                capa: 150,
                cal: 66,
                caffeine: 150
            },
            {
                name: 'レッドブル（日本）',
                capa: 185,
                cal: 85,
                caffeine: 80
            },
            {
                name: 'レッドブル（米国）',
                capa: 250,
                cal: 110,
                caffeine: 80
            },
            {
                name: 'ロックスターエナジー（日本）',
                capa: 250,
                cal: 145,
                caffeine: 120
            },
            {
                name: 'ロックスターエナジー（米）',
                capa:　473,
                cal: 280,
                caffeine: 160
            },
            {
                name: 'コカ･コーラ エナジー',
                capa:　250,
                cal: 105,
                caffeine: 80
            },
            {
                name: 'みなさまのお墨付きエナジードリンク',
                capa:　250,
                cal: 128,
                caffeine: 160
            },
            {
                name: 'ブラックアウトゼロ',
                capa:　500,
                cal: 0,
                caffeine: 175
            },
            {
                name: 'ブラックアウトゴッド',
                capa:　250,
                cal: 148,
                caffeine: 160
            },
            {
                name: 'エナジーハンター',
                capa:　300,
                cal: 162,
                caffeine: 195
            }
        ];
    }

    render() {
        let drink_name = this.drink_data.map((drink) => {
            return drink.name;
        });

        let caffeine = this.drink_data.map((drink) => {
            return drink.caffeine;
        });

        let caffeine_hundred = this.drink_data.map((drink) => {
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
            <div class="container">
                <div class="chart-area">
                    <HorizontalBar data={data} options={options} />
                </div>
                <div class="sort-area">
                <span class="sort-text">並び変え：</span>
                <select id="select-box">
                    <option>-</option>
                    <option value="capa_small">容量（多い順）</option>
                    <option value="capa_big">容量（少ない順）</option>
                    <option value="cal_small">カロリー（昇順）</option>
                    <option value="cal_big">カロリー（降順）</option>
                    <option value="caffeine_small">カフェイン（昇順）</option>
                    <option value="caffeine_big">カフェイン（降順）</option>
                </select>
                </div>
                <Table size="sm" striped bordered hover>
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>容量</th>
                        <th>カロリー</th>
                        <th>カフェイン</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.drink_data.map((drink) => {
                        return (
                            <DrinkTable 
                                name={drink.name}
                                capa={drink.capa}
                                cal={drink.cal}
                                caffeine={drink.caffeine}
                            />
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Main;