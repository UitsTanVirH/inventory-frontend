
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
  Table
} from "reactstrap";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formValue, setformValue] = React.useState({
    name: '',
    description: '',
    quantity: '',
    cost: '',
    lower_limit: '',
  });

  const [ items, setItems ] = useState();

  const handleSubmit = async(event) => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("name", formValue.name)
    loginFormData.append("description", formValue.description)
    loginFormData.append("quantity", formValue.quantity)
    loginFormData.append("cost", formValue.cost)
    loginFormData.append("lower_limit", formValue.lower_limit)
    console.log("Handle Submit")
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/items",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  // let itemList;
  useEffect(async() => {
    const response = await axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/items"
    });
    console.log(response.data.data);
    // itemList = response.data.data;
  }, []);

  setItems(response.data.data);

  console.log(items);



  // const fetchData = async() => {
  //   const response = await axios({
  //     method: "get",
  //     url: "http://127.0.0.1:8000/api/items"
  //   });
  //   console.log(response);
  // }

  // fetchData();

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          
          <CardBody className="px-lg-5 py-lg-5">
            
            <Form onSubmit={handleSubmit} role="form">
              <FormGroup>
              <Label for="name">Item Name:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" id="name" name="name" value={formValue.name} onChange={handleChange}/>
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="description">Description:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                  </InputGroupAddon>
                  <Input placeholder="Description" type="text" id="description" name="description" value={formValue.description} onChange={handleChange}/>
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="quantity">Quantity:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    
                  </InputGroupAddon>
                  <Input placeholder="Quantity" type="text" id="quantity" name="quantity" value={formValue.quantity} onChange={handleChange} />
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="cost">Cost:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    
                  </InputGroupAddon>
                  <Input placeholder="Cost" type="text" id="cost" name="cost" value={formValue.cost} onChange={handleChange}/>
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="lower_limit">Lower Limit:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    
                  </InputGroupAddon>
                  <Input placeholder="Lower Limit" type="text" id="lower_limit" name="lower_limit" value={formValue.lower_limit} onChange={handleChange}/>
                </InputGroup>
              </FormGroup>
              
              
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>

      {/* { 
        itemList && itemList?.map((item)=>{
          return (
            <h1>{ item.name }</h1>
          )
        }) 
      } */}

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Lower Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>

            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
      
    </>
  );
};

export default Register;
