import React from 'react';
import { Link } from "react-router-dom";

const calculateDateTimeFormatted = (date) => {
    let datetime = new Date(date);
    return datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
}
const NewsItem = props => ({
    handleDeleteClick(event) {
        event.preventDefault();

        props.actionDelete(props.id);
    },
    render() {
        return (
            <div>
                <h2>
                    <Link to={"/news/" + props.id}>{props.title}</Link>
                </h2>
                <button onClick={this.handleDeleteClick}>DELETE</button>
                <button>EDIT</button>
                <small>{props.creator.displayName}</small>
                <small>{calculateDateTimeFormatted(props.createDate)}</small>
                <section>
                    {props.content}
                </section>
            </div>
        )
    }
})

export default NewsItem;