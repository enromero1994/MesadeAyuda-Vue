<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card>
          <v-card-title>
            Solicitudes
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
            <template v-slot:item.actions="{ item }">
              <div v-if="item.assignee == ''">
                <v-icon class="" @click="setAssignee(item)"> mdi-eye </v-icon>
              </div>
              <div v-else>
                <v-icon class=""> mdi-eye-off </v-icon>
                <v-icon class="" @click="setState(item)">
                  mdi-state-machine
                </v-icon>
                <v-icon class=""> mdi-chat </v-icon>
              </div>
            </template>
             <template v-slot:item.status="{ item }">
      <v-chip
        :color="getColor(item.status)"
        dark
      >
        {{ item.status }}
      </v-chip>
    </template>
          </v-data-table>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >¿Esta seguro que desea tomar esta Solicitud?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDialog"
                  >Cerrar</v-btn
                >
                <v-btn color="blue darken-1" text @click="confirmDialog"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogState" max-width="500px">
            <v-card>
              <v-card-title> Estado de Solicitud </v-card-title>
              <v-card-text>
                <v-select
                  :items="select"
                  label="Seleccionar Estado de Solicitud"
                  item-value="text"
                  v-model="requestState"
                ></v-select>
              </v-card-text>
              <v-card-actions>
                <v-btn color="blue darken-1" text @click="closeDialogState"
                  >Cerrar</v-btn
                >
                <v-btn color="blue darken-1" text @click="confirmDialogState"
                  >OK</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      requestState: "",
      select: [
        { text: "En Espera" },
        { text: "En Progreso" },
        { text: "Cancelado" },
        { text: "Finalizado" },
      ],
      itemAssignee: "",
      dialog: false,
      dialogState: false,
      rules: {
        required: (value) => !!value || "Obligatorio.",
        emailMatch: () => "The email and password you entered don't match",
      },
      valid: true,
      userid: "",
      category: {
        name: "",
        description: "",
      },
      search: "",
      headers: [
        {
          text: "Asunto",
          align: "start",
          sortable: false,
          value: "summary",
        },
        { text: "Solicitante", value: "user.username" },
        { text: "Descripcion", value: "description" },
        
        { text: "Agente asigado", value: "assignee" },
        { text: "Categoria Solicitud", value: "categories.name" },
        { text: "Fecha Creacion", value: "createdAt" },
        { text: "Numero de Ticket", value: "id" },
        { text: "Estado", value: "status" },
        { text: "Acciones", value: "actions", sortable: false },
      ],

      solicitudes: [],
    };
  },
  mounted() {
    this.userid = user.id;

    RequestService.getAllRequests().then(
      (response) => {
        this.solicitudes = response.data;
        console.log(response.data);
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
    setAssignee(item) {
      //user.id
      //console.log('data solicitud', item.id)
      this.itemAssignee = item.id;
      this.dialog = true;
    },
    setState(item) {
      this.itemAssignee = item.id;  
      this.dialogState = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    closeDialogState() {
      this.dialogState = false;
    },
    confirmDialog() {
      RequestService.setAssigne(user.id, this.itemAssignee).then(
        (response) => {
          RequestService.putRequestAssignee(
            user.username,
            this.itemAssignee
          ).then(
            (response2) => {
              console.log(response2.data);
            },
            (error) => {
              console.log(response.data);
              console.log(error.message);
            }
          );
        },
        (error) => {
          console.log(error.message);
          // this.content =
          //   (error.response && error.response.data) ||
          //   error.message ||
          //   error.toString();
        }
      );
      this.closeDialog();
    },
    confirmDialogState() {
      RequestService.setState(this.requestState, this.itemAssignee).then(
        (response) => {
          console.log(response.data);
          this.closeDialogState();
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