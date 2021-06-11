import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        arregloCategorias: [{

                id: 1,
                show: false,
                nombre: "Inscripciones",
                solicitudes: [{
                        id: 1,
                        name: "Consulta inscripcion carreras",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                    {
                        id: 2,
                        name: "Consulta planes carreras",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                    {
                        id: 3,
                        name: "Consulta certificados",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                ],
            },
            {

                id: 2,
                show: false,
                nombre: "Horarios",
                solicitudes: [{
                        id: 1,
                        name: "Consulta horarios cursadas",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'

                    },
                    {
                        id: 2,
                        name: "Consulta horarios finales",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                    {
                        id: 3,
                        name: "Consulta certificados",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                ],
            },
            {

                id: 3,
                show: false,
                nombre: "Academicas",
                solicitudes: [{
                        id: 1,
                        name: "Inscribirse a una carrera",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                    {
                        id: 2,
                        name: "Consulta planes carreras",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                    {
                        id: 3,
                        name: "Consulta Certificados",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                ],
            },
            {

                id: 4,
                show: false,
                nombre: "Extension",
                solicitudes: [{
                        id: 1,
                        name: "Consulta proyectos de extension",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                    {
                        id: 2,
                        name: "Violencia de genero",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                    {
                        id: 3,
                        name: "Consultas Administrativas extension",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                ],
            },
            {

                id: 5,
                show: false,
                nombre: "Deportivas",
                solicitudes: [{
                        id: 1,
                        name: "Consultas horarios",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                    {
                        id: 2,
                        name: "Consultas generales",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                    {
                        id: 3,
                        name: "Verificar pago",
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nesciunt ipsam provident doloremque magni minus cumque eligendi dolorem ipsa?'
                    },
                ],
            },
        ],
        categoriaName: ''
    },
    mutations: {
        add_categoriaName(state, result) {
            state.categoriaName = result
        }
    },
    actions: {},
    modules: {},
    getters: {
        getCategorias: state => {

            return state.arregloCategorias
        },

        getCategoriasByName: (state) => {

            return state.arregloCategorias.filter(e => e.nombre == state.categoriaName);
        }
    }
})