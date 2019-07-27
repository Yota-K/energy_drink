import React from 'react';

class SlideNav extends React.Component {
    render() {
        return (
            <div id="slide-nav">
                <ul>
                    {this.props.data.map((drink) => {
                        return (
                            <li>{drink.name}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default SlideNav;