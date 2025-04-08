<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">RMS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" v-if="isLoggedIn">
          <li class="nav-item active">
          <router-link class="nav-link" to="/UserhomeComponent">Home</router-link>
          </li>
          <li class="nav-item">
          <router-link class="nav-link" to="/RmsUsersComponent">Users</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Roles</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Departments</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <template v-if="!isLoggedIn">
            <li class="nav-item">
              <router-link class="nav-link" to="/signupComponent">Signup</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/LoginComponent">Login</router-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      isLoggedIn: false, // default false 
    };
  },
  methods: {
    async logout() {
  const token = JSON.parse(localStorage.getItem('user-info'));
  const ApiToken = token['Api-Token'];
  const response = await axios.post('http://127.0.0.1:8000/api/logout', {}, {
      headers: {
          Authorization: `Bearer ${ApiToken}`
      }
  });
  console.log(response);
  localStorage.removeItem('user-info');
  this.$router.push({ name: 'LoginComponent' });
}

  },
  mounted() {
    let x = localStorage.getItem('user-info');
    if (x)
    {
    this.isLoggedIn = true ;
    }
  },
};
</script>
