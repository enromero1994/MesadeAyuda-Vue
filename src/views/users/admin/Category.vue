<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="categorias"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Categorias</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Nueva Categoria
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Nombre Categoria"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.description"
                        label="Descripcion Categoria"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancelar
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Desea eliminar esta categoria?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reniciar datos </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import CategoryService from "../../../services/categories.service";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Categoria",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Descripcion", value: "description" },

      { text: "Acciones", value: "actions", sortable: false },
    ],

    categorias: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      description: "",
    },
    defaultItem: {
      name: "",
      description: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva Categoria" : "Editar Categoria";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },
  //     mounted() {

  // },

  methods: {
    initialize() {
      CategoryService.getAllCategories().then(
        (response) => {
          this.categorias = response.data;
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
    addCategory() {
      CategoryService.addCategory(this.editedItem).then(
        (response) => {
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
     editCategory() {
      CategoryService.putCategory(this.editedItem).then(
        (response) => {
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
    delCategory() {
      CategoryService.delCategory(this.editedItem.id).then(
        (response) => {
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

    editItem(item) {
      this.editedIndex = this.categorias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.categorias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log("item", item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      console.log("Se elimino este item", this.editedItem);
      this.delCategory()
      this.categorias.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
          if (this.editedIndex > -1) {
            this.editCategory();
            Object.assign(this.categorias[this.editedIndex], this.editedItem);
          } else {
            this.addCategory();
            this.categorias.push(this.editedItem);
          }
      
      this.close();
    },
  },
};
</script>



