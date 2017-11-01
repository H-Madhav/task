import React, {Component} from 'react';

const Thead = (props) => {
  return (
    <tr>
      <th scope="col">SNO</th>
      <th scope="col">Emp#</th>
      <th scope="col">Email</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Desgination</th>
      <th scope="col">Project Name</th>
      <th scope="col">Actions</th>
    </tr>
  );
}

export default Thead;
