<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="col-lg-3"></v-col>
      <v-col cols="12"  class="col-lg-6 col-sm-12 col-xs-12 col-md-12">
        <div class="pt-10">
        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
          method="post"
          @submit.prevent="register"
        >
          <v-row>
            <v-col class="pb-0 mb-0" cols="12" lg="6" md="6" sm="12">
              <v-text-field
                solo
                outlined
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nombre"
                required
              ></v-text-field>
            </v-col>
            <v-col class="pb-0 mb-0" cols="12" lg="6" md="6" sm="12">
              <v-text-field
                solo
                outlined
                v-model="lastname"
                :counter="10"
                :rules="lastnameRules"
                label="Apellido"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="pb-0 mb-0">
              <v-text-field
                solo
                outlined
                v-model="email"
                :rules="emailRules"
                label="Correo Electronico"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pb-0 mb-0">
              <v-text-field
                solo
                outlined
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña"
                hint="Al menos 10 caracteres"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pb-0 mb-0">
              <v-text-field
                solo
                outlined
                v-model="password_confirmation"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min, rules.match]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-1"
                label="Repetir Contraseña"
                hint="Al menos 10 caracteres"
                counter
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn  color="primary" large width="100%" @click="submit"
                >Registrarse</v-btn
              >
              <router-link  to="/signin" class="clean-router">
                <p>¿Ya tienes cuenta? Inicia sesion haciendo click aqui</p>
              </router-link>
            </v-col>
          </v-row>
        </v-form>
        </div>
      </v-col>
      <v-col cols="12" class="col-lg-3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      password: "",
      password_confirmation: "",
      rules: {
        required: (value) => !!value || "Obligatorio.",
        min: (v) => v.length >= 10 || "Min 10 caracteres",
        match: (v) =>
          (!!v && v) === this.password || "Las contraseñas no coinciden",
        match2: (v) =>
          (!!v && v) === this.password_confirmation ||
          "Las contraseñas no coinciden",
      },
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Nombre obligatorio",
        (v) => (v && v.length <= 10) || "Limite de caracteres superados",
      ],
      lastname: "",
      lastnameRules: [
        (v) => !!v || "Apellido Obligatorio",
        (v) => (v && v.length <= 10) || "Limite de caracteres superados",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "Correo electronico obligatorio",
        (v) => /.+@.+\..+/.test(v) || "El correo electronico debe ser valido",
      ],
      checkbox: false,
      lazy: false,
      error: null,
      success: null,
      type: "formNotify",
    };
  },
  methods: {
    async register() {
      try {
        const result = await this.$axios.post("/auth/signup", {
          name: this.name,
          lastname: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        });
        this.success = result.data.message;
        console.log(result);
      } catch (e) {
        this.error = e.response.data.errors;
        console.log(e);
      }
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.register();
        this.name = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
        this.password_confirmation = "";
        this.$refs.form.resetValidation();
      } else {
        console.log("Completar Campos");
      }
    },
  },
};
</script>

<style>
</style>