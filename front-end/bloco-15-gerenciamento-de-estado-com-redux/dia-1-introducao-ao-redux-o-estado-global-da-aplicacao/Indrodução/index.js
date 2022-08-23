// Importação do redux
const Redux = require('redux');

// Função de login [Deve retornar um type]
// Através do type que a gente processa a lógica
// no reducer.
const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

// Declaração do estado inicial
const INITIAL_STATE = {
  login: false,
  email: '',
};

// Declaração do reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
    };
};

// Criando store
const store = Redux.createStore(reducer);

// Envia a ação para processamento no reducer
store.dispatch(fazerLogin('atlas.ifpa@gmail.com'));

// Acessa a store
console.log(store.getState());
// { login: true, email: 'atlas.ifpa@gmail.com' }
