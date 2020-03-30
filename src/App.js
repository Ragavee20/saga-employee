import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApiData } from './action/action';
import * as _ from 'lodash';

class App extends Component {

  componentDidMount() {
    this.props.fetchApiData();
  }

  render() {
    console.log("info: ", this.props)
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
              </tr>
            </thead>
            {!_.isEmpty(this.props.employee_detail.data) && this.props.employee_detail.data.map(detail =>
              <tbody key={detail.id}>
                <tr>
                  <td>{detail.id}</td>
                  <td>{detail.employee_name}</td>
                  <td>{detail.employee_salary}</td>
                  <td>{detail.employee_age}</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  employee_detail: _.get(state, 'data', [])
});

const mapDispatchToProps = (dispatch) => ({
  fetchApiData: () => {
    dispatch(fetchApiData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
