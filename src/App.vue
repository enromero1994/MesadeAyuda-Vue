<template>
  <v-app>
    <v-app-bar
      app
      color="#c85c1c"
      dark
    > 
      <router-link  to="/" class="clean-router">
      <div  class="d-flex align-center clean-router">
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

      <v-btn
        href="/signin"
        
        text
      >
        <span class="mr-2">Iniciar Sesion</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="backgroundHome">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

