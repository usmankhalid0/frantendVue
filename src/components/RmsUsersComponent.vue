<template>
    <div>
      <NavbarComponent />
      <div style="text-align: center; margin-top: 2rem;">
        <h1>This is Users Component</h1>
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-success mrgin" @click="showModal = true">
          Create User
          </button>
        </div>
        <table v-if="userData.length" border="4" style="margin: 1rem auto; width: 80%;">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <!-- Add more headers based on your API structure -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in userData" :key="user.id">
              <td>{{ index + 1 }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <button class="btn btn-primary widthb mr-2" @click="updateModal = true">update</button>
                <!-- <a href="" class="btn btn-primary btn-sm mr-2" @click="updateModal = true">update</a> -->
                <a href="" class="btn btn-info btn-sm mr-2" @click="infoModal = true">Show</a>
                <a href="" class="btn btn-danger btn-sm mr-2">delete</a>
              </td>
              <!-- Add more fields based on your API response -->
            </tr>
          </tbody>
        </table>
  
        <p v-else>Loading users...</p>
      </div>
      <!--New User Model -->
      <div class="modal fade" tabindex="-1" :class="{ show: showModal }" :style="showModal ? 'display: block;' : 'display: none;'" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> New User</h5>
            <!-- <button type="button" class="btn-close btn-sm" @click="closeModal"></button> -->
          </div>
          <div class="modal-body">
            <p>This is a modal controlled by Vue.</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal backdrop -->
    <div v-if="showModal" class="modal-backdrop fade show" @click="closeModal" ></div>

    <!-- update Model -->
    <div class="modal fade" tabindex="-1" :class="{ show: updateModal }" :style="updateModal ? 'display: block;' : 'display: none;'" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> update User</h5>
            <!-- <button type="button" class="btn-close btn-sm" @click="closeModal"></button> -->
          </div>
          <div class="modal-body">
            <p>This is a modal controlled by Vue.</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeupdateModal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal backdrop -->
    <div v-if="updateModal" class="modal-backdrop fade show" @click="closeupdateModal" ></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NavbarComponent from './NavbarComponent.vue';
  
  export default {
    name: 'RmsUsersComponent',
    components: {
      NavbarComponent,
    },
    data() {
      return {
        userData: [],
        showModal: false,
        updateModal:false,
      };
    }, 
    methods: {
    closeModal() {
      this.showModal = false;
    },
    closeupdateModal() {
      this.upadateModal = false;
    },
  },
    async mounted() {
      const token = JSON.parse(localStorage.getItem('user-info'));
      const ApiToken = token['Api-Token'];
      const response = await axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
          Authorization: `Bearer ${ApiToken}`,
        },
      });
      this.userData = response.data.data; // Adjust based on actual structure
  
    },
  };
  </script>
  
  <style scoped>
  table {
    border-collapse: collapse;
  }
  th, td {
    padding: 0.5rem 1rem;
  }
  .mrgin{
    margin-right: 10%;
  }
  .modal {
  transition: opacity 0.15s linear;
}
.widthb{
    width:75px;
}
  </style>
  