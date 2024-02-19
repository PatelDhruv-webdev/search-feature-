import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data';


function App() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  console.log(search);

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr >
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
       {data.filter((value)=>{
         return search.toLowerCase( ) === "" ? value : value.first_name.toLowerCase().includes(search);

  })
       .map((value) =>(
         <tr key={value.id} >
                   <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email} </td>
                  <td>{value.phone} </td>
         </tr>
       ))}     
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;