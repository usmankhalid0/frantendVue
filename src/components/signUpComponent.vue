<template>
    <div>
      <NavbarComponent />
      <div style="text-align: center; margin-top: 2rem;">
        <h1>Sign Up Form</h1>
        Name:<br />
        <input type="text" v-model="name" placeholder="Enter name" /><br />
        Email:<br />
        <input type="email" v-model="email" placeholder="Enter email" /><br />
        Password:<br />
        <input type="password" v-model="password" placeholder="Enter password" /><br />
        <button @click="signup" name="save">Save</button>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarComponent from "./NavbarComponent.vue";
  import axios from "axios";
  
  export default {
    name: "IndexComponent",
    components: {
      NavbarComponent,
    },
    data() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async signup() {
        if (!this.name || !this.email || !this.password) {
          alert("Please fill in all fields.");
          return;
        }
  
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/register", {
            name: this.name,
            email: this.email,
            password: this.password,
          });
  
          console.log("Signup successful:", response.data);
          this.$router.push({ name: "LoginComponent" }); // Redirect after successful registration
        } catch (error) {
          alert("Signup failed. Please check your input or try again later.");
        }
      },
    },
  };
  </script>
  
  <style>
  input {
    width: 350px;
    height: 50px;
    padding: 10px;
    margin: 10px;
    font-size: 25px;
  }
  button {
    width: 250px;
    height: 50px;
    color: brown;
    font-size: 20px;
  }
  </style>
  