import { createStore } from 'vuex';
import product from './store/modules/product';
import cart from './store/modules/cart';

const store = createStore({
  modules: {
    prods: product,
    crd: cart,
  },
});

export default store;
