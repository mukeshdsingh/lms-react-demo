import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Lead = props => (
  <tr>
    <td>{props.lead.customername}</td>
    <td>
      <a href="#" onClick={() => { props.deleteLead(props.lead._id) }}>delete</a>
    </td>
  </tr>
)

export default class LeadList extends Component {
  constructor(props) {
    super(props);

    this.deleteLead = this.deleteLead.bind(this)
    this.state = { leads: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/lead/')
      .then(response => {
        this.setState({ leads: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteLead(id) {
    axios.delete('http://localhost:4000/lead/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      leads: this.state.leads.filter(el => el._id !== id)
    })
  }

  leadList() {
    return this.state.leads.map(currentlead => {
      return <Lead lead={currentlead} deleteLead={this.deleteLead} key={currentlead._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Leads</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>User Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.leadList()}
          </tbody>
        </table>
      </div>
    )
  }
}