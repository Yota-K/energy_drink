import React from 'react';
import { Radar } from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';

class Data extends React.Component {
    render() {
        // クリックされたテキストのオブジェクトを取得
        const target = this.props.data.find((drink) => {
            return (drink.name === this.props.clickText)
        });

        // 必要なデータのみを取得
        let drinkArray = [];

        for (let i in target) {
            drinkArray.push(target[i]);
        }

        drinkArray.shift();
        drinkArray.pop();

        // テーブル
        const labelName = [
            'カロリー',
            'カフェイン',
            '炭水化物',
            'アルギニン',
            'BCAA',
            'ナイアシン',
        ];

        let drinkData = [];

        for (let i = 0; i < labelName.length; i++) {
            drinkData.push(
                <tr>
                    <th>{labelName[i]}</th>
                    <td>{drinkArray[i]}</td>
                </tr>
            )
        }

        // レーダーチャート 
        const data = {
            labels: labelName,
            datasets: [
            {
                label: '成分',
                data: drinkArray,
                backgroundColor: 'rgba(153,255,51,0.6)',
                borderColor: "rgba(62, 253, 52, 1.0)",
                borderWidth: 2,
            }
            ]
        }

        const options = {
            legend: {
                position: 'top'
            },
            scale: {
                ticks: {
                    display: false
                }
            }
        };
        
        return(
            <div className="container">
                <h2>{this.props.clickText}</h2>
                <div id="radar-area">
                <Radar data={data} options={options}/>
                <Table size="sm" striped bordered hover>
                    <tbody>
                        {drinkData}
                    </tbody>
                </Table>
                </div>
            </div>
        );
    }
}

export default Data;