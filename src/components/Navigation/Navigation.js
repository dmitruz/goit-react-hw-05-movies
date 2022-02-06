import React from 'react';
import {Link} from './Navigation.styled'


export default function Navigation() {
    return (
        <nav>
            <Link
                to="/"
                exact
            >
                Home
            </Link>

            <Link
                to="/movies"
            >
                Movies
            </Link>
        </nav>
    );
}