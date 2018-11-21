import React from 'react';
import { Link } from "react-router-dom";
import history from "../history";

const calculateDateTimeFormatted = (date) => {
    let datetime = new Date(date);
    return datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
}
const NewsItem = props => ({
    handleDeleteClick(event) {
        event.preventDefault();

        props.actionDelete(props.id);
    },
    handleEditClick(event) {
        event.preventDefault();
        history.push('/news/' + props.id + '/edit');
    },
    render() {
        const controls = <div>
            <button onClick={this.handleDeleteClick}>DELETE</button>
            <button onClick={this.handleEditClick}>EDIT</button>
        </div>
        return (
            <div>
                <h2>
                    <Link to={"/news/" + props.id}>{props.title}</Link>
                </h2>
                {!props.editable && controls}
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