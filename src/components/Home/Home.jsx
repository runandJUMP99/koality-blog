import React, {useEffect, useState} from "react";

import classes from "./Home.module.css";
import axios from "../../axios";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchedPosts = [];

        axios.get("/posts.json")
                .then(res => {    
                    for (let key in res.data) {
                        fetchedPosts.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                    setPosts(fetchedPosts);
                })
                .catch(err => {
                    console.log(err);
                });
    }, []);

    function handleClick(post) {
        setPosts([post]);
    }

    return (
        <div className={classes.Home}>
            {posts.map(post => {
                return (
                    <React.Fragment key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{posts.length > 1 
                            ? post.post.substring(0, 100) + " ..."
                            : post.post}
                        <span onClick={() => handleClick(post)}>{posts.length > 1 && "Read More"}</span>
                        </p>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Home;