import React, { Component } from 'react';
import { Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Link to="/">Главная</Link>
                    <Link to="/login">Войти</Link>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    &copy; 2018 - &laquo;Waterless&raquo;, тестовое задание #3. Автор regieslinkas[@at]gmail[dot]com
                </footer>
            </div>
        );
    }
}

export default App;
