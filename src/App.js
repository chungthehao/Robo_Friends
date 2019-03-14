import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox';
import { robots } from './robots';

// const state = {
//     robots: robots,
//     searchfield: ''
// }

class App extends Component {
    constructor() {
        super()
        this.state = { // state là cái sẽ thay đổi để describe hệ thống của mình. Thường để ở parent component để truyền props xuống cho các children components.
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        // this.state.searchfield = event.target.value // Ko nen set state truc tiep
        this.setState({ searchfield: event.target.value }) // state duoc update thi React se re-render lai
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))

        return (
            <div className="tc">
                <h2>RoboFriends</h2>
                <SearchBox searchChange={ this.onSearchChange } />
                <CardList robots={ filteredRobots } />
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