  
<template>
 <v-container>
    <v-card height="250">
      <v-container>
        <h2>{{content}}</h2>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import UserService from '../../services/user.service';
export default {
  name: 'Admin',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>