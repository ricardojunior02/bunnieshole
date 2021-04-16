import { createStore } from 'redux';

const initialState = {
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {products: action.products};
    case 'GET_FILTER':
      return {products: action.productsFind};
    default:
      return state;
  }
}

const store = createStore(reducer);


export default store;