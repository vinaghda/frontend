import React, { Component } from 'react';
import ListNameComponent from './ListNameComponent'
import NameComponent from './NameComponent'
import { BrowserRouter, Switch, Route } from "react-router-dom";

class KaryawanApp extends Component {
    render() {
        return (
	    <BrowserRouter>	
	      <div>	
              <h1>Karyawan Application</h1>
		<Switch>
                        <Route path="/" exact component={ListNameComponent} />
                        <Route path="/employees" exact component={ListNameComponent} />
                        <Route path="/employees/:id" component={NameComponent} />
                </Switch>
	      </div>
	    </BrowserRouter>	
        )
    }
}

export default KaryawanApp
