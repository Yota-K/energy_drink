import React from 'react';
import { Link } from 'react-router-dom';

class SlideNav extends React.Component {
    render() {
        return (
            <div id="slide-nav">
                <ul>
                    <li><Link to="/">TOP</Link></li>
                    {this.props.data.map((drink) => {
                        return (
                            <li><Link data-id={drink.id} to="/data">{drink.name}</Link></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default SlideNav;