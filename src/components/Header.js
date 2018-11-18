import React from 'react';
import { Link } from "react-router-dom";

const Header = () => ({
    render() {
        return (
            <header>
                <Link to="/">Главная</Link>
                <Link to="/login">Войти</Link>
            </header>
        )
    }
})

export default Header;