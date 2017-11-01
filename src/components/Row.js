import React, {Component} from 'react';

const Row = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>
          <input type="text" className="form-control" placeholder="Id" />
      </td>
      <td>
          <input type="text" className="form-control" placeholder="madhav@gmail.com" />
      </td>
      <td>
          <input type="text" className="form-control" placeholder="madhav" />
      </td>
      <td>
          <input type="text" className="form-control" placeholder="Jha" />
      </td>
      <td>
          <input type="text" className="form-control" placeholder="Software Eng" />
      </td>
      <td>
          <input type="text" className="form-control" placeholder="Java" />
      </td>
      <td className="btnGroup">
          <button type="button" className="btn btn-primary">Edit</button>
          <button type="button" className="btn btn-danger" onClick = {props.handleClick}>Delete</button>
      </td>
    </tr>
  );
}

export default Row;
