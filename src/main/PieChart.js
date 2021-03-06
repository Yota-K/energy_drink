import React from 'react';
import {Pie} from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';

class Data extends React.Component {
    render() {
        const drink = this.props.data;
        const capa = Array.from(drink);
        const caffeine = Array.from(drink);
        
        // クリックされたテキストのオブジェクトを取得
        const target = drink.find((drink) => {
            return (drink.name === this.props.clickText);
        });

        // /dataに直接アクセスされたらトップにリダイレクト
        if (typeof target === 'undefined') {
            window.location.href = '/energy_drink/';
        }

        let drinkArray = [];

        // 必要なデータのみを取得
        for (let i in target) {
            drinkArray.push(target[i]);
        }
        drinkArray.shift();
        drinkArray.pop();
        drinkArray.splice(4,1); 

        // 量のランキング
        const capaSort = capa.sort((a,b) => {
            return b.capa - a.capa;
        });
        const capaArray = capaSort.map((drink) => {
            return drink.capa;
        });
    
        const capaRank = capaArray.indexOf(target.capa) + 1;
    
        // カフェインのランキング
        const caffeineSort = caffeine.sort((a,b) => {
            return b.caffeine - a.caffeine;
        })
    
        const caffeineArray = caffeineSort.map((drink) => {
            return drink.caffeine;
        });
    
        const caffeineRank = caffeineArray.indexOf(target.caffeine) + 1;

        // テーブル
        const labelName = [
            'カロリー', 
            'カフェイン',
            '炭水化物',
            'アルギニン',
            'ナイアシン'
        ];

        const drinkData = [];

        Object.keys(labelName).forEach((key, index) => {
            drinkData.push(
                <tr key={index}>
                    <th>{labelName[key]}</th>
                    <td>{drinkArray[key]}</td>
                </tr>
            );
        });

        // レーダーチャート 
        const data = {
            labels: labelName,
            datasets: [
                {
                    label: '成分',
                    data: drinkArray,
                    backgroundColor: [
                        '#90ee90',
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
            <article className="container">
                <section id="drink-data">
                    <h1>{this.props.clickText}</h1>
                    <p>量の多さ：<span className="rank">{capaRank}位</span> / <span>{drink.length}本中</span></p>
                    <p>カフェインの量：<span className="rank">{caffeineRank}位</span> / <span>{drink.length}本中</span></p>
                </section>
                <section id="radar-area">
                <Pie data={data} />
                <Table size="sm" striped bordered hover>
                    <tbody>
                        {drinkData}
                    </tbody>
                </Table>
                </section>
            </article>
        );
    }
}

export default Data;
