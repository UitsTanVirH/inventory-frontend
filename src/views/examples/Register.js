
import {
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
  Table,
  Button,
  Modal,
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faL } from '@fortawesome/free-solid-svg-icons';

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
  const [ remove, setRemove ] = useState(false);
  const [ edit, setEdit ] = useState(false);
  const [ id, setId ] = useState();
  
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
    await axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/items"
    }).then(response => {
        setItems(response.data.data);
    })
    // console.log(response.data.data);
    // itemList = response.data.data;
  }, []);

  // setItems(response.data.data);

  // console.log(items);



  // const fetchData = async() => {
  //   const response = await axios({
  //     method: "get",
  //     url: "http://127.0.0.1:8000/api/items"
  //   });
  //   console.log(response);
  // }

  // fetchData();

  const handleDelete = async(id) => {
    //console.log("ID = ", id);
    try{
        await axios({
          method: "delete",
          url: `http://127.0.0.1:8000/api/item/delete/${id}`
        }).then(response => {
          setRemove(!remove);
        })
      }
      catch(e){
        console.log(e);
      }
      window.location.replace("http://localhost:3000/admin/inventory");
      // window.href("http://localhost:3000/admin/inventory")
    }

    const handleEdit = async () => {
      console.log("ID = ", id);
      const editFormData = new FormData();
      editFormData.append("name", formValue.name)
      editFormData.append("description", formValue.description)
      editFormData.append("quantity", formValue.quantity)
      editFormData.append("cost", formValue.cost)
      editFormData.append("lower_limit", formValue.lower_limit)

      console.log("Handle Edit", editFormData);

      await axios({
        method: "put",
        url: `localhost:8000/api/item/update/${id}`,
        data: editFormData,
      }).then(res => {
        console.log(res);
      }).catch(e => {
        console.log(e);
      })

    // try {
    //   // make axios post request
    //   const response = await axios({
    //     method: "put",
    //     url: `localhost:8000/api/item/update/${id}`,
    //     data: editFormData,
    //   });
    // } catch(error) {
    //   console.log("+++++ ", error)
    // }
    }

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


      <Table>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Lower Limit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {/* <th scope="row">1</th> */}
                { 
              items && items?.map((item)=>{
                return (
                  <tr>
                    <td>{ item.name }</td>
                    <td>{ item.description }</td>
                    <td>{ item.quantity }</td>
                    <td>{ item.cost }</td>
                    <td>{ item.lower_limit }</td>
                    <td> 
                      <span onClick={() => {setEdit(true); setId(item.id)}}><FontAwesomeIcon icon={faEdit} /></span>
                      {" "}
                      <span onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrash} /> </span>
                    </td>
                  </tr>
                )
              })
            }
            {/* <td>Mark</td> */}

        </tbody>
      </Table>
      
      <Modal isOpen={edit}>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalBody>
          <Form onSubmit={handleEdit} role="form">
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
              
              
              {/* <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Submit
                </Button>
              </div> */}
            <Button type="submit" color="primary">Save Changes</Button>{' '}
            <Button color="secondary" onClick={() => setEdit(false) }>Cancel</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
      </Modal>
      
    </>
  );
};

export default Register;
