import { configureStore } from '@reduxjs/toolkit';

import empresaReducer from './reducers/empresaReducer';
import pessoafReducer from './reducers/pessoafReducer'
import login from './reducers/loginReducer';

export default configureStore({
    reducer: {
        empresaReducer,
        pessoafReducer,
        login
    }
})


