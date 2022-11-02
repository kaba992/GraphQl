import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery, gql, DocumentNode } from '@apollo/client';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


function Authors() {

    const GET_BOOKS: DocumentNode = gql`
    query Query {
        authors {
            author
           
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

            {data && data.authors.map((elt: { author: String }, i: number) => (
                <>
                  
                        <p key={i}>{elt.author}</p>
                    

                </>

            ))}
        </>

    )
}

export default Authors;