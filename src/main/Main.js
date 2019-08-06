import React from 'react';
import '../css/main.css';
import ChartArea from './ChartArea';
import TableArea from './TableArea';

class Main extends React.Component {
    render() {
        return(
            <div className="container">
                <ChartArea data={this.props.data} />
                <TableArea data={this.props.data} />
            </div>
        );
    }
}

export default Main;