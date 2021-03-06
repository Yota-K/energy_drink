import React from 'react';
import { Link } from 'react-router-dom';

class SlideNav extends React.Component {
    render() {
        return (
            <div id="slide-nav">
                <ul>
                    <li><Link to="/energy_drink/">TOP</Link></li>
                    {this.props.data.map((drink,i) => {
                        return (
                            <li key={i}><Link id="link-text" to='/data/' onClick={this.props.text}>{drink.name}</Link></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default SlideNav;
