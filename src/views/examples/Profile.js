
import {
  Table
} from "reactstrap";
// core components

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [ orders, setOrders ] = useState();

  useEffect(async() => {
    await axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/orders"
    }).then(response => {
        setOrders(response.data.data);
    })
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Name</th>
            <th>Quantity</th>
            <th>Per Cost</th>
            <th>Created At</th>
            {/* <th>Status</th> */}
          </tr>
        </thead>

        <tbody>
            {/* <th scope="row">1</th> */}
                { 
              orders && orders?.map((order)=>{
                return (
                  <tr>
                    <td>{ order.name }</td>
                    <td>{ order.quantity }</td>
                    <td>{ order.cost }</td>
                    <td>{ order.created_at }</td>
                    {/* <td>{ item.status ? "Pending" : "--" }</td> */}
                  </tr>
                )
              })
            }
        </tbody>
      </Table>
    </>
  );
};

export default Profile;
