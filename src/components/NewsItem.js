import React, {Component} from 'react';
import { Link } from "react-router-dom";
import history from "../history";

const calculateDateTimeFormatted = (date) => {
    let datetime = new Date(date);
    return datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
}
export default class NewsItem extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }
    handleDeleteClick(event) {
        event.preventDefault();
        this.props.actionDelete(this.props.id);
    }
    handleEditClick(event) {
        event.preventDefault();
        history.push('/news/' + this.props.id + '/edit');
    }
    render() {
        const controls = <div>
            <button onClick={this.handleDeleteClick}>DELETE</button>
            <button onClick={this.handleEditClick}>EDIT</button>
        </div>
        return (
            <div>
                <h2>
                    <Link to={"/news/" + this.props.id}>{this.props.title}</Link>
                </h2>
                {(this.props.editable === 'editable') ? controls : ''}
                <small>{this.props.creator.displayName}</small>
                <small>{calculateDateTimeFormatted(this.props.createDate)}</small>
                <section>
                    {this.props.content.slice(0, 200) + '...'}
                </section>
            </div>
        )
    }
}
