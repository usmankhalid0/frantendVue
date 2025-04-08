<template>
    <div>
        <NavbarComponent />
        <div style="text-align: center; margin-top: 2rem;">
        <h1>Login Form</h1>
Email:<br><input type="email" v-model="email" placeholder="enter email"><br>
password:<br><input type="password" v-model="password" placeholder="enter password"><br>
<button v-on:click="login" name="save">Save</button>

    </div>
    </div>
    </template>
  <script>
  import NavbarComponent from "./NavbarComponent.vue";
  import axios from 'axios';  
    export default {
      name: "LoginComponent", 
      components: {
        NavbarComponent, 
      },
      data() {
        return {
          email:'',
          password: ''
        };
      },
      methods: {
        login() {
          console.log("Email:", this.email);
          console.log("Password:", this.password);
          axios.post("http://127.0.0.1:8000/api/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            // console.log(response);
            if (response.status == 200)
              {
                localStorage.setItem("user-info",JSON.stringify(response.data));
                this.$router.push({ name: "UserhomeComponent" });
              }
          })
          .catch(error => {
            alert("Login failed:");
            console.error("login failed:", error);
          });
        }
      }
    };
    </script>
    <style>
    input{
        width:350px;
        height:50px;
        padding:10px;
        margin: 10px;
        font-size: 25px;
    }
    button{
        width:250px;
        height:50px;
        color: brown;
    }
    </style>
    