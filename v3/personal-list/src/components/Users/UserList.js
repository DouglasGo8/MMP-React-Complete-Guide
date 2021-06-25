import "./UserList.css";
import Card from "../UI/Card";
/**
 *
 * @param {*} props
 * @returns
 */
const userList = (props) => (
  <Card className="users">
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  </Card>
);

export default userList;
