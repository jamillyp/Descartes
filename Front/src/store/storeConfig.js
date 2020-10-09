import { configureStore } from '@reduxjs/toolkit';

import empresaReducer from './reducers/empresaReducer';
import pessoafReducer from './reducers/pessoafReducer'
import login from './reducers/loginReducer';
import materialReducer from './reducers/materialReducer';
import EmpLogadaReducer from './reducers/EmpLogadaReducer';

export default configureStore({
    reducer: {
        empresaReducer,
        pessoafReducer,
        login,
        materialReducer,
        EmpLogadaReducer,
    }
})


