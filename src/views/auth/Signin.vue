<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="col-lg-3" ></v-col>
      <v-col cols="12"  class="col-lg-6 col-sm-12 col-xs-12 col-md-12">
        <div class="pt-10">
        <v-form
         
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
          method="post"
          @submit.prevent="login"
        >
          <v-row>
            <v-col class="mb-0 pb-0">
              <v-text-field
                solo
                filled
                outlined
                v-model="email"
                :rules="emailRules"
                label="Correo Electronico"
                required
                prepend-inner-icon="mdi-account"
              ></v-text-field>

              <v-text-field
                solo
                filled
                outlined
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña"
                @click:append="show1 = !show1"
                prepend-inner-icon="mdi-lock"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn type="submit" large block depressed color="primary">
                <div v-if="loaderlogin">Entrar</div>
                <div v-else>
                  <v-progress-circular
                    indeterminate
                    color="purple"
                  ></v-progress-circular>
                </div>
              </v-btn>
              <router-link  to="/signup" class="clean-router">
                <p>Aun no tengo cuenta</p>
              </router-link>
             
            </v-col>
          </v-row>
        </v-form>
        </div>
      </v-col>
      <v-col cols="12" class="col-lg-3" ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loaderlogin: true,
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Obligatorio.",
        emailMatch: () => "The email and password you entered don't match",
      },
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "Correo electronico obligatorio",
        (v) => /.+@.+\..+/.test(v) || "El correo electronico debe ser valido",
      ],
      checkbox: false,
      lazy: false,
    };
  },
  methods: {
    async login() {
      // console.log('Entra aca');
      this.loaderlogin = false;
      try {
        const result = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        console.log(result);
        this.$router.push("/app");
      } catch (e) {
        console.log(e);
        // this.error = e.response.data.message
      }
    },
  },
};
</script>

<style>
</style>