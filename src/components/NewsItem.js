import React, {Component} from 'react';
import { Link } from "react-router-dom";
import history from "../history";

const calculateDateTimeFormatted = (date) => {
    let datetime = new Date(date);
    return datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
}
const newsItemStyle = {
    newsItemStyleBlock: {
        marginBottom: '20px',
        padding: '0 0 10px',
        border: '1px solid #878a8c',
        borderRadius: '6px'
    },
    controlsStyle: {
        fontSize: '24px'
    },
    controlStyleCross: {
        color: '#ff4500',
        marginRight: '10px',
        cursor: 'pointer'
    },
    controlStyleEdit: {
        fontSize: '20px',
        marginRight: '10px',
        cursor: 'pointer'
    },
    newsItemHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 10px 5px',
        backgroundColor: '#ccc'
    },
    title: {
        fontSize: '32px'
    },
    info: {
        display: 'block',
        marginTop: '5px',
        fontSize: '11px',
        color: '#e1e1e1'
    },
    content: {
        padding: '10px 10px 0',
    }
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
        const controls = <div style={newsItemStyle.controlsStyle}>
            <a onClick={this.handleDeleteClick} style={newsItemStyle.controlStyleCross}>&times;</a>
            <a onClick={this.handleEditClick} style={newsItemStyle.controlStyleEdit}>&#9998;</a>
        </div>;
        return (

            <article style={newsItemStyle.newsItemStyleBlock}>
                <header style={newsItemStyle.newsItemHeader}>
                    <h2 style={newsItemStyle.title}>
                        <Link to={"/news/" + this.props.id}>{this.props.title}</Link>
                        <small style={newsItemStyle.info}>{this.props.creator.displayName}</small>
                        <small style={newsItemStyle.info}>{calculateDateTimeFormatted(this.props.createDate)}</small>
                    </h2>
                    {(this.props.editable === 'editable') ? controls : ''}

                </header>
                <section style={newsItemStyle.content}>
                    {this.props.content.slice(0, 200) + '...'}
                </section>
            </article>
        )
    }
}
