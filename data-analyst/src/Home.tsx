import React from 'react';

import './App.css';


import { Link } from 'react-router-dom'

function Home() {

    return (
        <div >
            <p></p>

            <Link to={`/books`}>
                <div className='dragons card'>
                    <p>Books</p>
                </div>
            </Link>
            <Link to={`/authors`}>

                <p>Authors</p>

            </Link>

        </div>

    );
}

export default Home;
