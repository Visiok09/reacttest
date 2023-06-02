import Post from "./Post";

export default function Posts (props){
    return <div>
        {
            props.posts.map(post => (
                <Post key={post.id} name={post.name}/>
            ))
        }
    </div>
}