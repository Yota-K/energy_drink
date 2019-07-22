import React from 'react';

class DrinkTable extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.capa}ml</td>
                <td>{this.props.cal}kcal</td>
                <td>{this.props.caffeine}mg</td>
            </tr>
        );
    }
}

export default DrinkTable;