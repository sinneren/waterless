import React from 'react';

const calculateDateTimeFormatted = (date) => {
    let datetime = new Date(date);
    return datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
}
const NewsItem = props => ({
    
    render() {
        return (
            <div>
                <h2>{props.title}</h2>
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