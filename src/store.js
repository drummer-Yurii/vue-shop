import { createStore } from 'vuex';
import product from './store/modules/product';

const store = createStore({
    modules: {
        prods: product
    }
});

export default store;