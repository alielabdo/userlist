import {users} from '../constants'
import UserCard from './UserCard'

const Users = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map((user, index) => (
        <div key={index} className="flex justify-center">
          <UserCard
            name={user.name}
            email={user.email}
            status={user.status}
            db={user.dob}
          />
        </div>
      ))}
    </div>
  );
};

export default Users;