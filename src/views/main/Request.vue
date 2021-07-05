<template>
  <v-container>
    <v-row class="mt-3 text-center rounded">
      <v-col cols="12" class="col-lg-3"></v-col>
      <v-col cols="12" class="col-lg-6 col-sm-12 col-xs-12 col-md-12">
        <div class="d-flex justify-start mb-5">
          <h2 class="font-weight-light">
            Solicitud Mesa de Ayuda {{ $route.params.objeto }}
          </h2>
        </div>
        <template>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            method="post"
            @submit.prevent="addRequest"
          >
            <v-text-field
              solo
              outlined
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Asunto"
              required
            ></v-text-field>
            <v-textarea v-model="description" solo outlined label="Descripcion">
            </v-textarea>
            <!-- <v-file-input
              solo
              outlined
              show-size
              label="File input"
            ></v-file-input> -->

            <v-btn type="submit" block color="primary" class="mr-4 block">
              Enviar Solicitud
            </v-btn>
          </v-form>
        </template>
      </v-col>
      <v-col cols="12" class="col-lg-3"></v-col> </v-row
  ></v-container>
</template>
  
<script>
//importar del store. Improtamos ahora directamente del service a efectos de prueba de funcionamiento
import RequestService from "../../services/request.service";
const user = JSON.parse(localStorage.getItem("user"));

export default {
  data: () => ({
    request: {
      summary: "",
      description: "",
      userId: "",
    },
    id: "",
    valid: true,
    description: "",
    name: "",
    nameRules: [
      (v) => !!v || "Asunto obligatorio",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
  mounted() {
   
    this.id = user.id;
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    addRequest() {
      this.request.summary = this.name;
      this.request.description = this.description;
      this.request.userId = this.id;
      this.request.categoryId = this.$route.params.id
      RequestService.addRequest(this.request).then(
        (response) => {
          console.log(response.data);
          this.name = "";
          this.description = "";
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
};
</script>



<style>
.backgroundHome {
  background-color: #f5f6fa;
}
</style>
<style>
