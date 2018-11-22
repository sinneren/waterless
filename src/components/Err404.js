import React from 'react';

const err404Style = {
    fontSize: '48px',
    margin: '40px auto',
    color: '#ffdd2d',
    textShadow: '0 1px 1px #CCC'
}
const Err404 = () => ({
    render() {
        return (
            <>
                <h1 style={err404Style}>Sorry, You are not a winner and this is a 404 page. Try to navigate on that shaft not in the dark.</h1>
            </>
        );
    }
});

export default Err404;