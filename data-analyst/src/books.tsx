import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery, gql, DocumentNode } from '@apollo/client';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


function Books() {

    const GET_BOOKS: DocumentNode = gql`
    query Query {
        books {
            title
            id
          }
    }
  `;

    const { loading, error, data } = useQuery(GET_BOOKS);


    if (loading) return <p>Loading...</p>;

    if (error) {
        console.log(error);
        <p>Error :(</p>;

    }
    return (
        <>

            {data && data.books.map((elt: { title: String, id: number }, i: number) => (
                <>
                    <Link to={`/${elt.id}`} >
                        <p key={i}>{elt.title}</p>
                    </Link>

                </>

            ))}
        </>

    )
}

export default Books;