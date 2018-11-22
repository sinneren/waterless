import React, {Component} from 'react';
import { Link } from "react-router-dom";
import history from "../history";
import { calculateDateTimeFormatted } from '../helpers';

const newsItemStyle = {
    newsItemStyleBlock: {
        marginBottom: '20px',
        padding: '0 0 10px',
        border: '1px solid #878a8c',
        borderRadius: '6px'
    },
    d_newsItemStyleBlock: {
        marginBottom: '20px',
    },
    controlsStyle: {
        fontSize: '24px'
    },
    d_controlsStyle: {
        fontSize: '24px',
        float: 'right'
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
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        padding: '10px 10px 5px',
        backgroundColor: 'hsl(0, 0%, 29%)'
    },
    d_newsItemHeader: {
        display: 'block',
    },
    title: {
        fontSize: '32px',
        color: '#FFF'
    },
    info: {
        display: 'block',
        marginTop: '5px',
        fontSize: '11px',
        color: '#FFEE40'
    },
    d_info: {
        display: 'block',
        fontSize: '11px',
        color: '#333',
        marginBottom: '10px'
    },
    content: {
        padding: '10px 10px 0',
    },
    d_content: {
        padding: '0',
    },
    d_title: {
        fontSize: '34px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    infoListWrap: {
        width: '100%'
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
        return (
            <article style={this.props.detail ? newsItemStyle.d_newsItemStyleBlock : newsItemStyle.newsItemStyleBlock}>
                <header style={this.props.detail ? newsItemStyle.d_newsItemHeader : newsItemStyle.newsItemHeader}>
                    {(this.props.detail && this.props.editable === 'editable') &&
                        <div style={newsItemStyle.d_controlsStyle}>
                            <a onClick={this.handleDeleteClick} style={newsItemStyle.controlStyleCross}>&times;</a>
                            <a onClick={this.handleEditClick} style={newsItemStyle.controlStyleEdit}>&#9998;</a>
                        </div>
                    }
                    {
                    this.props.detail ? 
                        <h1 style={newsItemStyle.d_title}>{this.props.title}</h1>
                        :
                        <h2><Link to={"/news/" + this.props.id} style={newsItemStyle.title}>{this.props.title}</Link></h2>
                    }
                    {this.props.detail && 
                        <div>
                            <small style={this.props.detail ? newsItemStyle.d_info : newsItemStyle.info}>{this.props.creator.displayName}</small>
                            <small style={this.props.detail ? newsItemStyle.d_info : newsItemStyle.info}>{calculateDateTimeFormatted(this.props.createDate)}</small>
                        </div>
                    }
                    {(!this.props.detail && this.props.editable === 'editable') && 
                        <div style={newsItemStyle.controlsStyle}>
                            <a onClick={this.handleDeleteClick} style={newsItemStyle.controlStyleCross}>&times;</a>
                            <a onClick={this.handleEditClick} style={newsItemStyle.controlStyleEdit}>&#9998;</a>
                        </div>
                    }
                    {!this.props.detail &&
                        <div style={newsItemStyle.infoListWrap}>
                            <small style={this.props.detail ? newsItemStyle.d_info : newsItemStyle.info}>{this.props.creator.displayName}</small>
                            <small style={this.props.detail ? newsItemStyle.d_info : newsItemStyle.info}>{calculateDateTimeFormatted(this.props.createDate)}</small>
                        </div>
                    }
                </header>
                <section style={this.props.detail ? newsItemStyle.d_content : newsItemStyle.content}>
                    {this.props.content.slice(0, 200) + '...'}
                </section>
                {
                    (this.props.detail && this.props.editable === 'editable') && 
                    <div className="buttons">
                        <a onClick={this.handleDeleteClick} className="btn btn-danger">&times;&nbsp;Удалить</a>
                        <a onClick={this.handleEditClick} className="btn btn-info">&#9998;&nbsp;Редактировать</a>
                    </div>
                }
            </article>
        )
    }
}
