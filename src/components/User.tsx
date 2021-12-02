import { connect } from "react-redux";
import { deleteUsers, User as UserI } from "../actions";
import { StoreState } from "../reducers";

export interface UserProps {
  user: UserI;
  deleteUsers: typeof deleteUsers;
}

const User = ({ user, deleteUsers }: UserProps): JSX.Element => {
  return (
    <div>
      {user.id} {user.name}{" "}
      <button onClick={() => deleteUsers(user.id)}></button>
    </div>
  );
};

const mapStateToProps = (state: StoreState): { users: UserI[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { deleteUsers })(User);
