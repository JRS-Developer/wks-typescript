import { connect } from "react-redux";
import { fetchUsers, User as UserI } from "../actions";
import { StoreState } from "../reducers";
import User from "./User";

interface AppProps {
  users: UserI[];
  fetchUsers(): any;
}

const App = ({ fetchUsers, users }: AppProps): JSX.Element => {
  return (
    <div>
      <button onClick={fetchUsers}>FETCH USERS!</button>
      {users.map((user: UserI) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: StoreState): { users: UserI[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(App);
