<template>
  <v-app>
    <v-app-bar app color="#c85c1c" dark>
      <v-app-bar-nav-icon v-if="currentUser" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" class="clean-router">
        <div class="d-flex align-center clean-router">
          <v-img
            alt="Mesa de Ayuda UnLaR"
            class="shrink mr-2"
            contain
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Escudo_de_la_UNLaR.svg/1680px-Escudo_de_la_UNLaR.svg.png"
            transition="scale-transition"
            width="40"
          />

          <span class="mr-2 title hidden-sm-and-down">Mesa de Ayuda UnLaR</span>
        </div>
      </router-link>

      <v-spacer></v-spacer>
      <div v-if="!currentUser" >
      <v-btn
        href="/signin"
        
        text
      >
        <span class="mr-2">Iniciar Sesion</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> 
    
        <!-- <router-link class="clean-router" to="/register"> Sign Up </router-link>

        <router-link class="clean-router" to="/login"> Login </router-link> -->
      </div>

    
     
    </v-app-bar>
    <div v-if="currentUser">
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <router-link class="clean-router" to="/profile">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/22.jpg"></v-img>
          </v-list-item-avatar>
        </router-link>
        <v-list-item-content>
          <v-list-item-title>{{ currentUser.username }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <div v-if="showAdminBoard">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link class="clean-router" to="/admin">
                <div class="">Menu Administracion</div>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        </div>
        <div v-if="showModeratorBoard"> 
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-message-bookmark-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link class="clean-router" to="/agent/solicitudes">
                <div class="">Solicitudes</div>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      
        </div>
        <div v-if="showUserBoard">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link class="clean-router" v-if="currentUser" to="/user/missolicitudes">
                <div class="">Mis Solicitudes</div>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </div>
             <div v-if="showAdminBoard">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bookmark-multiple</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link class="clean-router" to="/admin/categories">
                <div class="">Categorias</div>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        </div>
      </v-list>
         <template v-slot:append>
        <div class="pa-2">
            <v-btn text block class="black"  >
          <a href @click.prevent="logOut" class="clean-router">
            <span class="mr-2" >Cerrar Sesion</span>
            <v-icon>mdi-logout</v-icon>
          </a>
        </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    </div>
    <v-main class="backgroundHome">
      <!-- {{currentUser}} -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    drawer: null,
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }

      return false;
    },
    
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MODERATOR");
      }

    
    
      return false;
    },
        showUserBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_USER");
      }

    
    
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
};
</script>

