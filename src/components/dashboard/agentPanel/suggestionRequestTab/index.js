import React from "react";
import { Table} from "reactstrap";

const SuggestionsTab = () => {
  return (
    <div className='dashboard-content'>
      <div className='tab-listing' id='notifcation'>
        <div className='common-card'>
          <div className='common-header notification-h'>
            <h5>Suggestion Request</h5>
          </div>
          <div className='row'>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsTab;
