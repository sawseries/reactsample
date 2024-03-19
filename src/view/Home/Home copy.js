import Layout from "../../components/layout/Layout";
import Img from "../../components/image/Img";
import styles from '../../components/elements/styles/containner.module.css';
import DataTable from 'react-data-table-component';


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
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
//import data from './data.json';

/*class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        loginStatus: false,
      };

    
      
      const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
      ]
    }

render() {
  return <Layout>
    
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
</Layout>;
}
}

export default withNavigate(Home);*/

const getdata2= () => {

  const data = [
    { asset_code: "Anom", asset_name: 19, buy_price: "Male" },
    { asset_code: "Megha", asset_name: 19, buy_pricer: "Female" },
    { asset_code: "Subham", asset_name: 25, buy_price: "Male" },
  ]

  //const data = getdata();
  console.log("11111 : "+data);
  return data;
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

    //console.log(JSON.parse(JSON.stringify(response2)));

    
    
    const obj = Object.fromEntries(response2)

    console.log(obj);

    //const result = JSON.stringify(response2["asset"]);
    //console.log("result +"+result);
    //return result;
    //console.log(JSON.stringify(response2["asset"]));
    //return response2["asset"];
};




const Home = () => {
  const re = getdata();
  const data = re;
  console.log("getdata"+re);
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
                              <td>{val.asset_code}</td>
                              <td>{val.asset_name}</td>
                              <td>{val.buy_price}</td>
                          </tr>
                      )
                  })}
              </table>
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
