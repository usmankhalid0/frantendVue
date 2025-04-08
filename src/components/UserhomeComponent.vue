<template>
    <div>
        <NavbarComponent />
      <div style="text-align: center; margin-top: 2rem;">
        <H1>HomeComponent</H1>
      </div>
    </div>
</template>
<script>
import NavbarComponent from "./NavbarComponent.vue";
export default {
  name: 'UserhomeComponent',
  components: {
      NavbarComponent,
    },
  mounted(){
    let x = localStorage.getItem('user-info');
    if (!x)
    {
      this.$router.push('LoginComponent');
    }
    }

}
</script>
