import React from 'react';

const calculateDateTimeFormatted = (date) => {
    let datetime = new Date(date);
    return datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
}
const NewsDetail = props => ({
    render() {
        return (
            <div>
                <h1>{props.title}</h1>
                <small>{props.creator}</small>
                <small>{calculateDateTimeFormatted(props.date)}</small>
                <section>
                    {props.content}
                </section>
            </div>
        )
    }
})

export default NewsDetail;