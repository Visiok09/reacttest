import Posts from './Posts'

class App extends React.Component{
    state = {
        posts:[
            {id: 'a1',  name: 'Js'},
            {id: 'a2', name: 'React'},
            {id: 'a3', name:'Solidity'}
        ]
    };

    removePost = (id) =>{
        this.setState(prevState => ({
            posts: prevState.posts.filter(post => post.id !== id)
        }));
    }
    
    render(){
        const { posts } = this.state;
        return(
            <div className="App">
             <Posts posts={posts} removePost={this.removePost}/>
            </div>
        )
    }
}

export default App;