import React, { Component } from 'react';
import NameDataService from '../service/NameDataService';

class ListNameComponent extends Component {
    constructor(props) {
        super(props)
	this.state = {
            karyawans: [],
            message: null
        }    
        this.refreshCourses = this.refreshCourses.bind(this)
	this.updateNameClicked = this.updateNameClicked.bind(this)
	this.deleteNameClicked = this.deleteNameClicked.bind(this)
	//this.addNameClicked = this.addNameClicked.bind(this)
    }

    addNameClicked() {
        this.props.history.push(`/employees/-1`)
    }

    updateNameClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/employees/${id}`)
    }

    deleteNameClicked(id) {
       NameDataService.deleteName(id)
        .then(
            response => {
                this.setState({ message: `Delete of karyawan ${id} Successful` })
                this.refreshCourses()
            }
        )
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        NameDataService.retrieveAllCourses()//HARDCODED
            .then(
                response => {
                    console.log(response);
		    this.setState({ karyawans: response.data })
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>All Names</h3>
		{this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama Depan</th>
                                <th>Nama Belakang</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
			    {
                                this.state.karyawans.map(
                                    karyawan =>
                                        <tr key={karyawan.id}>
                                            <td>{karyawan.id}</td>
                                            <td>{karyawan.firstName}</td>
                                            <td>{karyawan.lastName}</td>
					    <td><button className="btn btn-success" onClick={() => this.updateNameClicked(karyawan.id)}>Update</button></td>
					    <td><button className="btn btn-warning" onClick={() => this.deleteNameClicked(karyawan.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
		    <div className="row">
			<button className="btn btn-success" onClick={this.addNameClicked}>Add</button>
		    </div>
                </div>
            </div>
        )
    }
}

export default ListNameComponent
