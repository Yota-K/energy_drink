import React from 'react';
import './css/main.css';
import ChartArea from './main/ChartArea';
import TableArea from './main/TableArea';

class Main extends React.Component {
    render() {
        const drink_data = [
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

        return(
            <div class="container">
                <ChartArea data={drink_data} />
                <TableArea data={drink_data} />
            </div>
        );
    }
}

export default Main;