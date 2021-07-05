<template>
<v-container>
  <v-card>
     
      <v-card-title>
       Usuario: {{currentUser.username}}
      </v-card-title>
      <v-card-text>
       Clave Token: {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
       <br>
       ID: {{currentUser.id}}
       <br>
       Correo electronico: {{currentUser.email}}
       <br>
       Roles: <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
      </v-card-text>

   
    
 
  </v-card>
</v-container>
 
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/');
    }
  }
};
</script>