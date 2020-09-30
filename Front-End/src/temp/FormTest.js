import React from 'react';
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';

const userFormFunc = props => {
    return(
        <form>
            <label>
                Name:
            </label>
            <input 
            type="text" 
            name="name" 
            component="input">
            </input>
            <label>
                E-mail:
            </label>
            <input 
            type="text" 
            name="name" 
            component="input">
            </input>
        </form>
    );
}

const FormTest = (reduxForm({
    form: 'formulario'
}))(userFormFunc)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(FormTest)
