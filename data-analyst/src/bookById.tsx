import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery, gql, DocumentNode } from '@apollo/client';
import { useParams } from "react-router-dom";



function BookById() {

    const { id: myId } = useParams();
    

    const GET_BOOKS: DocumentNode = gql`
      query Query($myId: Int) {
          bookById(id: $myId) {
            title
            id
          }
      }
    `;
    console.log(myId);

    const { loading, error, data } = useQuery(GET_BOOKS, {
        variables:  { myId: myId && parseInt(myId) },
    });

    if (loading) return <p>Loading...</p>;

    if (error) {
        console.log(error);
        return <p>Error :(</p>;
    }


    return (
        <>
            <p>{data && data.bookById.title}</p>
            <p>{data && data.bookById.id}</p>
        </>
    )
}
export default BookById;