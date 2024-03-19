import Layout from "../../components/layout/Layout";

import styles from '../../components/elements/styles/containner.module.css';
import Table from 'react-bootstrap/Table';

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from 'react-dom/client';
import {
  FiHome,
  FiHelpCircle,
  FiUser,
  FiSettings,
  FiLogOut,
  FiBox,
} from "react-icons/fi";
import Auth from "./../../controller/Auth"
import { withNavigate } from "../../components/withRouter";

const getdata2= () => {

  const data = [
    { asset_code: "Anom", asset_name: 19, buy_price: "Male" },
    { asset_code: "Megha", asset_name: 19, buy_pricer: "Female" },
    { asset_code: "Subham", asset_name: 25, buy_price: "Male" },
  ]

  //const data = getdata();
  //console.log("11111 : "+data);
  return data;
};


const getdata3= async() => {

  const data = [];
  const response = await axios.get("http://localhost/tnswms_local/api/asset");
  //data = response.data.asset;
  //console.log(response.data);
  return response.data;
};

const getdata = async() => {

  const headers = {
    'Content-Type': 'application/json',
    //'Authorization': '',
    //'client-id':'default',
    //'X-API-KEY':'d5168cf6-d8e2-4701-9f8f-d51fe287d73a'
    }

    var response2 = await axios({ 
    method: 'get',
    url: 'http://localhost/tnswms_local/api/asset',
    headers: headers,
    })
    .catch((error) => {
      return error
    }) 
    .then((response) => {
      return response.data.asset;
    });
};

const columns = [
  {
    name: 'asset_code',
    selector: 'asset_code',
    sortable: true,
  },
  {
    name: 'asset_name',
    selector: 'asset_name',
    sortable: true,
  },
  {
    name: 'buy_price',
    selector: 'buy_price',
    sortable: true,
  }
];


const Home = () => {

  const [data, setIsBooked] = useState([]);

  useEffect(() => {
      axios.get("http://localhost/tnswms_local/api/asset").then((response) => {
      setIsBooked(response.data.asset);
  });
  }, []);

  console.log(data);

  return (<Layout>
    <div className={styles.widgetbox}>
      <div className={styles.widgetcontent}>
              <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Keeper</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>  
                  {data.map((val, key) => {
                      return (
                          <tr key={key}>
                              <td>{val.asset_code}</td>
                              <td>{val.asset_name}</td>
                              <td>{val.status}</td>
                              <td>{val.serial_num}</td>
                              <td></td>
                          </tr>
                      )
                  })}
               </tbody>   
              </Table>
              
      </div>
    </div>
  </Layout>);
};

export default Home;



/*export default function Home() {

  const data = this.getdata();

  function getdata(){

    const data = [
      { name: "Anom", age: 19, gender: "Male" },
      { name: "Megha", age: 19, gender: "Female" },
      { name: "Subham", age: 25, gender: "Male" },
    ]

    return data;

  }

  return (<Layout>
    <div className={styles.widgetbox}>
      <div className={styles.widgetcontent}>
              <table border="1">
                  <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                  </tr>
                  {data.map((val, key) => {
                      return (
                          <tr key={key}>
                              <td>{val.name}</td>
                              <td>{val.age}</td>
                              <td>{val.gender}</td>
                          </tr>
                      )
                  })}
              </table>
      </div>
    </div>
  </Layout>);
}*/
