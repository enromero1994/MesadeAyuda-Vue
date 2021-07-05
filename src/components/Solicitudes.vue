<template>
  <div>
    <!-- {{arregloCategorias}} -->
    <div v-for="(n, j) in arregloCategorias" :key="j">
      <v-hover v-slot="{ hover }">
        <!-- `/request/${arregloCategorias[j].nombre}` -->
        <RouterLink
          class="clean-router"
          :to="{
            name: 'Request',
            params: {
              id: arregloCategorias[j].id,
              objeto: arregloCategorias[j].name,
            },
          }"
        >
          <v-card
            class="mb-5"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-card-title>{{ n.name }}</v-card-title>
            <v-card-subtitle class="text-left">
              <v-row>
                <div
                  class="hidden-sm-and-down"
                  v-for="(m, i) in arregloCategorias[j].solicitudes"
                  :key="i"
                >
                  <v-col class="pl-1">
                    <RouterLink
                      class="clean-router"
                      :to="{
                        name: 'Form',
                        params: {
                          id: arregloCategorias[j].nombre,
                          consulta: m.name,
                        },
                      }"
                    >
                      <!-- /request/form/${m.id} -->
                      <v-chip
                        style="cursor: pointer"
                        color="primary"
                        outlined
                        >{{ m.name }}</v-chip
                      >
                    </RouterLink>
                  </v-col>
                </div>
              </v-row>
              <!-- arregloCategorias[j].solicitudes -->
            </v-card-subtitle>
            <v-card-actions> </v-card-actions>
            <div class="d-lg-none d-xl-flex">
              <RouterLink to="/">
                <v-btn
                  icon
                  @click="
                    arregloCategorias[j].show = !arregloCategorias[j].show
                  "
                >
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </RouterLink>
            </div>
            <v-expand-transition>
              <div v-show="arregloCategorias[j].show">
                <v-divider></v-divider>

                <v-card-text>
                  <div
                    class="pt-3"
                    v-for="(m, i) in arregloCategorias[j].solicitudes"
                    :key="i"
                  >
                    <RouterLink
                      class="clean-router"
                      :to="{
                        name: 'Form',
                        params: {
                          id: arregloCategorias[j].nombre,
                          consulta: m.name,
                        },
                      }"
                    >
                      <v-chip
                        class=""
                        style="cursor: pointer"
                        color="primary"
                        outlined
                        >{{ m.name }}</v-chip
                      >
                    </RouterLink>
                  </div>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </RouterLink>
      </v-hover>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    show:''
  }),
  name: "Solicitudes",
  props: ["arregloCategorias"],
};
</script>
