import React, {useState} from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import classes from "./Compose.module.css";
import axios from "../../axios";

const Compose = () => {
    const [form, setForm] = useState({
        title: "",
        post: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        
        let postData = {};
        
        for (let formElementIdentifier in form) {
            postData[formElementIdentifier] = form[formElementIdentifier];
        }

        axios.post("/posts.json", postData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function inputChangedHandler(event) {
        const {name, value} = event.target;

        const updatedPost = {
            ...form
        };

        updatedPost[name] = value;
        setForm(updatedPost);
    }

    return (
        <React.Fragment>
            <Header />
                <div className={classes.Compose}>
                    <h1>Compose</h1>
                    <form onSubmit={(event) => handleSubmit(event)} autoComplete="off">
                        <div className="form-group">
                            <label>Title</label>
                            <input onChange={(event) => inputChangedHandler(event)} className="form-control" type="text" name="title" value={form.title}/>
                            <label>Post</label>
                            <textarea onChange={(event) => inputChangedHandler(event)} className="form-control" name="post" rows="5" cols="30" value={form.post}></textarea>
                        </div>
                        <button className="btn btn-primary">Publish</button>
                    </form>
                </div>
            <Footer />
        </React.Fragment>
    );
}

export default Compose;