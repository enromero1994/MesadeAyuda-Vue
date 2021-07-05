import CategoryService from '../services/categories.service';

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        getAllCategories({ commit }) {
        return CategoryService.getAllCategories().then(
          () => {
            commit('Categorias');
            return Promise.resolve(user);
          },
          error => {
            commit('Fallo');
            return Promise.reject(error);
          }
        );
      },


    },

  };