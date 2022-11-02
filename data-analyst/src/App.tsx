import { useQuery, gql, DocumentNode } from '@apollo/client';
import { Container, Column, Row } from './Styles/Grid';
import GlobalStyle from './Styles/Global';
import Books from './books';
import BookById from './bookById';


function App() {

  // const GET_BOOKS: DocumentNode = gql`
  //     query Query($myId: Int) {
  //         bookById(id: $myId) {
  //           title
  //           author
  //           id
  //           rate
  //           avg
  //         }
  //         books {
  //           title
  //           id
  //         }
  //     }
  //   `;

  // const { loading, error, data } = useQuery(GET_BOOKS, {
  //   variables: { myId },
  // });

  // if (loading) return <p>Loading...</p>;

  // if (error) return <p>Error :(</p>;


  // function displayBookById() {
  //   const tab = [];
  //   for (const [key, value] of Object.entries(data.bookById)) {
  //     // if(key !== "__typename")
  //     tab.push(`${key}: ${value}`);
  //   }

  //   return tab.map((elt: String) => (
  //     <li>{elt}</li>
  //   ))
  // }


  return (
    <Container>
      <GlobalStyle />

      <Column>
        {/* {data && (
          <>
            <ul>
              <li>____ BookById: {myId} _____</li>
              {displayBookById()}
            </ul>
            {data.books.map((elt: { title: String, id: number }) => (
              <Row>
                <p>id: {elt.id + " " + elt.title}</p>
              </Row>
            ))}
          </>
        )} */}
 
      
      </Column>

    </Container>
  );
}

export default App;