<template>
  <Landing></Landing>
</template>

<script>
  import UserService from '../services/user.service';
  import Landing from '../components/Landing'

  export default {
    name: 'Home',
    
    components: {
    
      Landing
    },
     data() {
    return {
      content: ''
    };
  },
    mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
  }
</script>
