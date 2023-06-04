import React from "react";
import Post from "./Post";

export default function Posts(props){
    const { posts, removePost } = props;
  
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} id={post.id} name={post.name} removePost={removePost} />
            ))}
        </div>
    );
}