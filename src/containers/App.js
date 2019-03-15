import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

// const state = {
//     robots: robots,
//     searchfield: ''
// }

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField, // state/*.searchRobots*/.searchField
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
})

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
})

class App extends Component {
    /*constructor() {
        super()
        this.state = { // state là cái sẽ thay đổi để describe hệ thống của mình. Thường để ở parent component để truyền props xuống cho các children components.
            robots: [], //robots,
            // searchfield: ''
        }
    }*/

    componentDidMount() {
        // console.log(this.props.store.getState())

        // fetch('http://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users }));

        this.props.onRequestRobots()
    }

    // onSearchChange = (event) => {
    //     // this.state.searchfield = event.target.value // Ko nen set state truc tiep
    //     this.setState({ searchfield: event.target.value }) // state duoc update thi React se re-render lai
    // }

    render() {
        // const { robots/*, searchfield*/ } = this.state
        const { searchField, onSearchChange, robots, isPending } = this.props
        if ( /*! robots.length*/ isPending) {
            return <h1 className="tc ma5">Loading</h1>
        }

        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={ /*this.*/onSearchChange } />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);