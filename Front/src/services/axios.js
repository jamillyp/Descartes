import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:4000',
})

// // REACT ROUTER
// <Route path="localhost:3000/empresas" component={Empresas} />

// // FRONT
// axios.post('localhost:4000/empresas') == envia requisicao

// // BACK
// app.post('/empresas') == recebe requisicao

// instalar no codigo..
// npx json-server .\database\data.json --port=4000