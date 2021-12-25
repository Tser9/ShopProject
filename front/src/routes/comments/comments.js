import React, {Component} from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";
//import NewCart from "./newcartitem/newcart";
//import NewItem from "../shop/modules/newitem";
import {Link, useHistory} from "react-router-dom";
import CommentItem from "./modules/commentItem";
//import Courses from "../buying/buying";
//import Destroy from "../buying/vsevse";
//import Shop from "../shop/shop";
export default class comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        }
        componentDidMount() {
            fetch(" http://127.0.0.1:8000/api/comments ")
                .then(res => res. json())
                .then(
                (result) => {
                    // eslint-disable-next-line no-unused-expressions
                    this.setState({
                        isLoaded: true,
                        items: result.comments
                    }),
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                }
                )
    }
            render() {
                const {error, isLoaded, items} = this.state;
                if (error) {
                    return <p> Error {error.message} </p>
                } else if (!isLoaded) {
                    return <p> Loading… </p>
                } else {
                    return (
                        <ul>
                            {items.map(item => (
                                <li key={item.name}>
                                    {item.feedback}
                                </li>
                                )
                            )
                            }
                        </ul>
                    )
                }
                }
    }


