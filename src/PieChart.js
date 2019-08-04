import React from 'react';
import {Pie} from 'react-chartjs-2';
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
        drinkArray.splice(4,1);

        // テーブル
        const labelName = ['カロリー','カフェイン','炭水化物','アルギニン','ナイアシン'],
              drinkData = [];

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
                backgroundColor: [
                    '#ff4500',
                    '#ff7b00',
                    '#ffc21a',
                    '#2996cc',
                    '#967acc',
                    '#29cc44'
                ],
                borderWidth: 2,
            }
            ]
        }
        
        return(
            <div className="container">
                <h1>主な成分</h1>
                <h2>{this.props.clickText}</h2>
                <div id="radar-area">
                <Pie data={data} />
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