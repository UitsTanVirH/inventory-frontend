
import {
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroup,
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
import { faTrash, faEdit, faCartPlus} from '@fortawesome/free-solid-svg-icons';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [ items, setItems ] = useState();
  const [ remove, setRemove ] = useState(false);
  const [ edit, setEdit ] = useState(false);
  const [ id, setId ] = useState();
  const [ item, setItem ] = useState();
  const [ order, setOrder ] = useState(false);
  
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
      });
    } catch(error) {
      console.log(error)
    }
  }

  // Get Orders
  useEffect(async() => {
    await axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/items"
    }).then(response => {
        setItems(response.data.data);
    })
  }, []);

  // Form Fill
  useEffect(()=> {
    id && axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/item/${id}`
    }).then(response => {
        setItem(response.data.data);
    })
    // console.log(response.data.data);
    // itemList = response.data.data;
  }, [edit]);

  // Order
  useEffect(()=> {
    id && axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/item/${id}`
    }).then(response => {
        setItem(response.data.data);
    })
    // window.location.replace("http://localhost:3000/admin/order");
    // console.log(response.data.data);
    // itemList = response.data.data;
  }, [order]);

  const [formValue, setformValue] = React.useState({
    name: '',
    description: '',
    quantity: '',
    cost: '',
    lower_limit: '',
  });

  console.log("Item ", item);
  // console.log(item.name);
  

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
    }

    const handleEdit = async () => {
      console.log("ID = ", id);
      const editFormData = {
        name: formValue.name ? formValue.name : item.name,
        description: formValue.description ? formValue.description : item.description,
        quantity: +formValue.quantity ? formValue.quantity : item.quantity,
        cost: +formValue.cost ? formValue.cost : item.cost,
        lower_limit: +formValue.lower_limit ? formValue.lower_limit : item.lower_limit,
      }
      console.log("Handle Edit", editFormData);

      try {
        // make axios post request
        const response = await axios({
          method: "patch",
          url: `http://127.0.0.1:8000/api/item/update/${id}`,
          data: editFormData,
        });
      } catch(error) {
        console.log(error)
      }
      window.location.replace("http://localhost:3000/admin/inventory");
    }

    const handleOrder = async () => {
      console.log("ID = ", id);
      const orderFormData = {
        item_id: item.id,
        name: item.name,
        quantity: +formValue.quantity ? formValue.quantity : item.quantity,
        cost: item.cost,
        status: true
      }
      console.log("Handle Order", orderFormData);

      try {
        // make axios post request
        const response = await axios({
          method: "post",
          url: `http://127.0.0.1:8000/api/orders`,
          data: orderFormData,
        });
      } catch(error) {
        console.log(error)
      }
      window.location.replace("http://localhost:3000/admin/order");
    }
    

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <Col lg="6" md="8" >
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
            <th>Per Cost</th>
            <th>Total Cost</th>
            <th>Lower Limit</th>
            {/* <th>Status</th> */}
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
                    <td>{ item.quantity * item.cost }</td>
                    <td>{ item.lower_limit }</td>
                    {/* <td>{ item.status ? "Pending" : "--" }</td> */}
                    <td> 

                      <span onClick={() => {setEdit(true); setId(item.id)}}><FontAwesomeIcon icon={faEdit} /></span>
                      {" "}
                      <span onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrash}/> </span> { " " }

                      { item.quantity < item.lower_limit &&  <span onClick={() => {setId(item.id); setOrder(true); handleOrder(item.id)} }><FontAwesomeIcon icon={faCartPlus}/> </span>} 
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
                  <Input placeholder={edit && item ? item.name : "name "} type="text" id="name" name="name" value={formValue.name} onChange={handleChange}/>
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="description">Description:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                  </InputGroupAddon>
                  <Input placeholder={edit && item ? item.description : "description" } type="text" id="description" name="description" value={formValue.description} onChange={handleChange}/>
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="quantity">Quantity:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    
                  </InputGroupAddon>
                  <Input placeholder={edit && item ? item.quantity : "quantity"} type="text" id="quantity" name="quantity" value={formValue.quantity} onChange={handleChange} />
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="cost">Per Cost:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    
                  </InputGroupAddon>
                  <Input placeholder={edit && item ? item.cost : "cost"} type="text" id="cost" name="cost" value={formValue.cost} onChange={handleChange}/>
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="lower_limit">Lower Limit:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    
                  </InputGroupAddon>
                  <Input placeholder={edit && item ? item.lower_limit : "lower_limit"}type="text" id="lower_limit" name="lower_limit" value={formValue.lower_limit} onChange={handleChange}/>
                </InputGroup>
              </FormGroup>
              
              
              {/* <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Submit
                </Button>
              </div> */}
            <Button color="primary" onClick={handleEdit}>Save Changes</Button>{' '}
            <Button color="secondary" onClick={() => setEdit(false) }>Cancel</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
      </Modal>

      <Modal isOpen={order}>
          <ModalHeader>Order Item</ModalHeader>
          <ModalBody>
          <Form onSubmit={handleOrder} role="form">
              <FormGroup>
              <Label for="name">Item Name:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                  </InputGroupAddon>
                  <Input type="text" id="name" name="name" value={ order && item && item?.name }/>
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="quantity">Quantity:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                  </InputGroupAddon>
                  <Input placeholder={item && item.quantity} type="text" id="quantity" name="quantity" value={formValue.quantity} onChange={handleChange} />
                </InputGroup>
              </FormGroup>

              <FormGroup>
              <Label for="cost">Per Cost:</Label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                  </InputGroupAddon>
                  <Input type="text" id="cost" name="cost" value={order && item && item?.cost}/>
                </InputGroup>
              </FormGroup>
              
              
              {/* <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Submit
                </Button>
              </div> */}
            <Button color="primary" onClick={handleOrder}>Place Order</Button>{' '}
            <Button color="secondary" onClick={() => setOrder(false) }>Cancel</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
      </Modal>
      
    </>
  );
};

export default Register;
