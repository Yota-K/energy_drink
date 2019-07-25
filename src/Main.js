import React from 'react';
import './css/main.css';
import ChartArea from './main/ChartArea';
import TableArea from './main/TableArea';

class Main extends React.Component {
    render() {
        return(
            <div class="container">
                <ChartArea data={this.props.data} />
                <TableArea data={this.props.data} />
            </div>
        );
    }
}

export default Main;