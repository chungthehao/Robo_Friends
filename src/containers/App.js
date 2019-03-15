import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots';
import './App.css';

// const state = {
//     robots: robots,
//     searchfield: ''
// }

class App extends Component {
    constructor() {
        super()
        this.state = { // state là cái sẽ thay đổi để describe hệ thống của mình. Thường để ở parent component để truyền props xuống cho các children components.
            robots: [], //robots,
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        // this.state.searchfield = event.target.value // Ko nen set state truc tiep
        this.setState({ searchfield: event.target.value }) // state duoc update thi React se re-render lai
    }

    render() {
        const { robots, searchfield } = this.state
        if ( ! robots.length) {
            return <h1 className="tc ma5">Loading</h1>
        }

        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()))

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange } />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={ filteredRobots } />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

// const App = () => {
//     return (
//         <div className="tc">
//             <h2>RoboFriends</h2>
//             <SearchBox />
//             <CardList robots={ robots } />
//         </div>
//     );
// }

export default App;