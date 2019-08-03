import React from 'react';
import Table from 'react-bootstrap/Table';
import DrinkTable from './DrinkTable';

class TableArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
        this.drinkSort = this.drinkSort.bind(this);
    }
    
    drinkSort() {
        const value = document.getElementById('select-box').value;
        switch (value) {
            case 'capa_asc':
                const capa_asc = this.state.data.sort((a ,b) => {
                    return b.capa - a.capa;
                });
                this.setState({data: capa_asc});
            break;
            case 'cal_asc':
                const cal_asc = this.state.data.sort((a ,b) => {
                    return b.cal - a.cal;
                });
                this.setState({data: cal_asc});
            break;
            case 'caffeine_asc':
                const caffeine_asc = this.state.data.sort((a ,b) => {
                    return b.caffeine - a.caffeine;
                });
                this.setState({data: caffeine_asc});
            break;
            case 'capa_desc':
                const capa_desc = this.state.data.sort((a ,b) => {
                    return a.capa - b.capa;
                });
                this.setState({data: capa_desc});
            break;
            case 'cal_desc':
                const cal_desc = this.state.data.sort((a ,b) => {
                    return a.cal - b.cal;
                });
                this.setState({data: cal_desc});
            break;
            case 'caffeine_desc':
                const caffeine_desc = this.state.data.sort((a ,b) => {
                    return a.caffeine - b.caffeine;
                });
                this.setState({data: caffeine_desc});
            break;
            default:
        }
    }

    render() {
        return(
            <div className="Table-area">
                <div className="sort-area">
                <span className="sort-text">並び変え：</span>
                <select id="select-box" onChange={this.drinkSort}>
                    <option>-</option>
                    <option value="capa_asc">容量（多い順）</option>
                    <option value="capa_desc">容量（少ない順）</option>
                    <option value="cal_asc">カロリー（昇順）</option>
                    <option value="cal_desc">カロリー（降順）</option>
                    <option value="caffeine_asc">カフェイン（昇順）</option>
                    <option value="caffeine_desc">カフェイン（降順）</option>
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
                    {this.state.data.map((drink) => {
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

export default TableArea;