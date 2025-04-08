<template>
    <div>
      <NavbarComponent />
      <div style="text-align: center; margin-top: 2rem;">
      <h1>This is index component</h1>
    </div>
    </div>
  </template>
  
  <script>
  import NavbarComponent from "./NavbarComponent.vue";
  
  export default {
    name: "IndexComponent", 
    components: {
      NavbarComponent, 
    },
  };
  </script>
  