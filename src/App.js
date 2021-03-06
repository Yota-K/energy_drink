import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import SlideNav from './components/SlideNav';
import Main from './main/Main';
import PieChart from './main/PieChart.js';
import Footer from './components/Footer';
import './css/main.css';
import {drinkData} from './drinkData';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickText: ''
        }
    }

    // クリックした要素を取得
    getText(e) {
        const event = e.target;
        const text = event.innerHTML;

        this.setState({
            clickText: text
        });
        
        return text;
    }

    render() {
        // 配列のコピーを作成
        const copy = Array.from(drinkData);
      
        return (
            <>
                <Header />
                <SlideNav 
                  data={drinkData}
                  text={(e) => this.getText(e)}
                />
                <Switch>
                    <Route exact path="/energy_drink/"　render={() => <Main data={copy} />} />
                    <Route exact path="/data/" render={() => <PieChart data={drinkData} clickText={this.state.clickText} />} />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default App;
