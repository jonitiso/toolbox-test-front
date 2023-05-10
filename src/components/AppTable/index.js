import {Table} from "react-bootstrap";
import './styles.css';

function AppTable(props) {
  const TableItem = (props) => {
    return (
        <tr>
          <td>{props.fileName}</td>
          <td>{props.text}</td>
          <td>{props.number}</td>
          <td>{props.hex}</td>
        </tr>
    );
  }

  return (
      <div>
        <Table bordered striped>
          <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
          </thead>
          <tbody>
          {props.items?.map((item, index) => {
            return (
                <TableItem
                    key={index}
                    fileName={item.fileName}
                    text={item.text}
                    number={item.number}
                    hex={item.hex}
                />
            )
          })}
          </tbody>
        </Table>
      </div>
  );
}

export default AppTable;
