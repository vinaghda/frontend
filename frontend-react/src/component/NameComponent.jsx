import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import NameDataService from '../service/NameDataService';

class NameComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: ''
        }

	this.onSubmit = this.onSubmit.bind(this)
	this.validate = this.validate.bind(this)
    }

    onSubmit(values) {
        let karyawan = {
            id: this.state.id,
            firstName: values.firstName,
            lastName: values.lastName
        }

        if (this.state.id === -1) {
            NameDataService.createName(karyawan)
                .then(() => this.props.history.push('/employees'))
        } else {
            NameDataService.updateName(this.state.id, karyawan)
                .then(() => this.props.history.push('/employees'))
        }

        console.log(values);
    }

    validate(values) {
        let errors = {}
        if (!values.firstName) {
            errors.firstName = 'Enter first name'
        } else if (values.firstName.length < 5) {
            errors.firstName = 'Enter atleast 5 Characters in first name'
        }

        return errors
    }
	
    componentDidMount() {
        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        NameDataService.retrieveName(this.state.id)
            .then(response => this.setState({
                firstName: response.data.firstName,
                lastName: response.data.lastName
            }))
    }

    render() {
        let { lastName, firstName, id } = this.state

        return (
            <div>
                <h3>Karyawan</h3>
		<div className="container">
                <Formik
                    initialValues=""
		    onSubmit={this.onSubmit}
		    validateOnChange={false}
		    validateOnBlur={false}
		    validate={this.validate}
		    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Nama Depan</label>
                                    <Field className="form-control" type="text" name="firstName" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Nama Belakang</label>
                                    <Field className="form-control" type="text" name="lastName" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>

                </div>
            </div>
        )
    }
}

export default NameComponent
