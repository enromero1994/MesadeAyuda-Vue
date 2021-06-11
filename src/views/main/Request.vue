<template>
  <v-container>
    <v-row class="mt-3 text-center rounded">
      <v-col cols="12">
        {{ setCategoriaName($route.params.id) }}

        <!-- <h1 class="pb-5 hidden-sm-and-down">Bienvenido a la Mesa de Ayuda UnLaR</h1> -->
        <Buscador></Buscador>
      </v-col>
      <v-col cols="12">
        <Solicitudes_Categorias
          :arregloCategorias="getCategoriasByName"
          :idarregloCategorias="getCategoriasByName[0].nombre"
        >
        </Solicitudes_Categorias>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Solicitudes_Categorias from "../../components/Solicitudes_Categorias";
import Buscador from "../../components/Buscador";
import { mapGetters } from "vuex";

export default {
  components: {
    Solicitudes_Categorias,
    Buscador,
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      "getCategoriasByName",
      // ...
    ]),
  },
  // this.$store.commit("horarios/add_horario", result);
  methods: {
    setCategoriaName(nombreCategoria) {
      this.$store.commit("add_categoriaName", nombreCategoria);
    },
  },
  mounted() {
    
  },
};
</script>

<style>
.backgroundHome {
  background-color: #f5f6fa;
}
</style>
<style>
