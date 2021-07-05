<template>
  <v-container>
    <v-row>
       
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card>
          <v-card-title>
            Mis Solicitudes
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar Solicitud"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="solicitudes"
            :search="search"
          >
                      <template v-slot:item.status="{ item }">
      <v-chip
        :color="getColor(item.status)"
        dark
      >
        {{ item.status }}
      </v-chip>
    </template>
          </v-data-table>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
//aca mas facil llamar al store que luego llamara al service en lugar de llamar directamente al service.
import RequestService from "../../../services/request.service";
const user = JSON.parse(localStorage.getItem("user"));
export default {

  data() {
    return {
      rules: {
        required: (value) => !!value || "Obligatorio.",
        emailMatch: () => "The email and password you entered don't match",
      },
      valid: true,
      userid: '',
      category:{
        name: '',
        description: ''
      },
      search: "",
      headers: [
        {
          text: "Asunto",
          align: "start",
          sortable: false,
          value: "summary",
        },
        
        { text: "Descripcion", value: "description" },
        
        { text: "Agente asigado", value: "assignee" },
        { text: "Categoria Solicitud", value: "categories.name" },
        { text: "Fecha Creacion", value: "createdAt" },
        { text: "Numero de Ticket", value: "id" },
        { text: "Estado", value: "status" },
      ],

      solicitudes: [],
    };
  },
  mounted() {
    this.userid = user.id
    
    RequestService.getRequestByIdUser(this.userid).then(
      (response) => {
        this.solicitudes = response.data
        console.log(response.data)
      },
      (error) => {
        console.log(error.message);
        // this.content =
        //   (error.response && error.response.data) ||
        //   error.message ||
        //   error.toString();
      }
    );
  },
  methods: {
    addCategory() {
          CategoryService.addCategory(this.category).then(
      (response) => {
        console.log(response.data)
        this.categorias.push(this.category)
      },
      (error) => {
        console.log(error.message);
        // this.content =
        //   (error.response && error.response.data) ||
        //   error.message ||
        //   error.toString();
      }
    );
    },
        getColor(status){
        if (status == 'En Espera') return 'grey'
        else if (status == 'En Progreso') return 'blue'
        else if (status == 'Cancelado') return 'red'
        else if (status == 'Finalizado') return 'green'
    }
  },
};
</script>