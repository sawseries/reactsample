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
import Layout from "../../components/layout/Layout"; 
import Auth from "./../../controller/Auth"
import { withNavigate } from "../../components/withRouter";
import styles from '../../components/elements/styles/containner.module.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          loginStatus: false,
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.checklogin=this.checklogin.bind(this);
      }

      checklogin = async (data) => {
        const headers = {
          'Content-Type': 'application/json',
          //'Authorization': '',
          //'client-id':'default',
          //'X-API-KEY':'d5168cf6-d8e2-4701-9f8f-d51fe287d73a'
          }
      
          let found = await axios({ 
            method: 'post',
            url: 'http://localhost/tnswms_local/api/login',
            data: data,
            headers: headers,
            })
            .catch((error) => {
              return error
            })
            .then((response) => {
              return response.data;
            });   
                       
            if(found.success==true){
              sessionStorage.setItem('auth', true);  
              this.props.navigate('/Home');
            }else{
              this.props.navigate('/Login');    
            }
      }
      
    
      handleUsernameChange = (event) => {
        this.setState({
          username: event.target.value,
        });
      };
    
      handlePasswordChange = (event) => {
        this.setState({
          password: event.target.value,
        });
      };
      
      
     handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username:this.state.username,
            password:this.state.password
        };
        //Auth.checklogin(data);
      //  Auth.login(data);
        this.checklogin(data);   
      };

  render() {
    return <Layout><div className={styles.loginpage}>
    <div className={styles.form}>
      <form className={styles.loginform} onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.handleUsernameChange} value={this.state.username}  placeholder="username"/>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="password"/>
        <button>login</button>
      </form>
    </div>
  </div></Layout>;
  }
}

export default withNavigate(Login);
