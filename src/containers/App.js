import React, { Component } from 'react';
import ClassList from '../components/ClassList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            playableClasses: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> {
                return response.json()
            })
            .then((users) => {
                this.setState({playableClasses: users});
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { playableClasses, searchfield } = this.state;
        const filteredClasses = playableClasses.filter(play =>{
            return play.name.toLowerCase().includes(searchfield.toLowerCase());
        })
          return !playableClasses.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Playable Classes</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ClassList classes={filteredClasses}/>
                    </Scroll>
                </div>
                );
            }
        }
export default App;