import React, { Component } from 'react';
import ClassList from './ClassList';
import SearchBox from './SearchBox';
import './App.css';
import { classes } from './classes';

class App extends Component {
    constructor() {
        super()
        this.state = {
            classes: classes,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredClasses = this.state.classes.filter(filClass => {
            return filClass.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
            <div className='tc'>
                <h1 className='f1'>Playable Classes</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <ClassList classes={filteredClasses}/>
            </div>
        );
    }
}
export default App;