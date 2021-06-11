<template>
  <v-container>
    <v-row class="mt-3 text-center rounded">
      <v-col cols="12">
        
        <h1 class="pb-5 hidden-sm-and-down">
          Bienvenido a la Mesa de Ayuda UnLaR
        </h1>
        <Buscador></Buscador>
      </v-col>
      <v-col cols="12">
        <Solicitudes :arregloCategorias="getCategorias"></Solicitudes>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Solicitudes from "../components/Solicitudes";
import Buscador from "../components/Buscador";

import { mapGetters } from 'vuex'
export default {
  components: {
    Solicitudes,
    Buscador,
  },
  data: () => ({}),
   computed: {
      ...mapGetters([
      'getCategorias'
      // ...
    ])
   }
};
</script>

<style>
.backgroundHome {
  background-color: #f5f6fa;
}
</style>
<style>
