<template>
  
    <v-row class="">
      <v-col>
      <!-- {{arregloCategorias}} -->
        <div v-for="(n, j) in arregloCategorias[0].solicitudes" :key="j">
          <v-hover v-slot="{ hover }">
            <RouterLink class="clean-router" :to="{name:'Form',params:{id: idarregloCategorias,consulta:n.name}}">
              <v-card
                class="mb-5"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-card-title>{{ n.name }}</v-card-title>
                <v-card-subtitle class="text-left">
                  {{ n.descripcion }}
                </v-card-subtitle>
                <v-card-actions> </v-card-actions>
              </v-card>
            </RouterLink>
          </v-hover>
        </div>
      </v-col>
    </v-row>
 
</template>

<script>
export default {
  props: ["arregloCategorias", "idarregloCategorias"],
};
</script>

<style>
</style>