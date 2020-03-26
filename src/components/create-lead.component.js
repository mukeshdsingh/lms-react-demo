import React, { Component } from 'react';
import axios from 'axios';

export default class CreateLead extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      customername: ''
    }
  }

  handleChange(event) {
    console.log('calling');
    this.setState({ customername: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const lead = {
      customername: this.state.customername
    }

    axios.post('http://localhost:4000/lead/add', lead)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create Lead</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Customer Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.customername}
              onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <input type="submit" value="Create Lead" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}