import React from 'react';

const footerStyle = {
    flexShrink: '0',
    padding: '20px 0',
    color: 'darkgrey'
}
const Footer = () => ({
    render() {
        return (
            <footer style={footerStyle}>
                <div className="container">
                    &copy; 2018 - &laquo;Waterless&raquo;, тестовое задание #3. Автор regieslinkas[@at]gmail[dot]com
                </div>
            </footer>
        )
    }
})

export default Footer;