import React from "react";
import Posts from './Posts'

class App extends React.Component{
    state = {
        posts:[
            {id: 'a1',  name: 'Js'},
            {id: 'a2', name: 'React'},
            {id: 'a3', name:'Solidity'}
        ]
    }
    
    render(){
        return(
            <div className="App">
             <Posts posts={this.state.posts}/>
            </div>
        )
    }
}
export default App;