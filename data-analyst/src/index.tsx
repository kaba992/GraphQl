import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import BookById from './bookById';
import Books from './books';
import Authors from './authors';
import Home from './Home';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new ApolloClient({

  uri: 'http://localhost:4000/',

  cache: new InMemoryCache(),

});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/:id" element={<BookById />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>

);
