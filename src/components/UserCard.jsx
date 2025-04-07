const getInitials = (name) => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};

const UserCard = ({ name, email, status, db }) => {
  return (
    <div className="flex flex-col justify-between rounded-xl p-4 shadow-md bg-white w-full max-w-[400px]">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-semibold text-lg">
          {getInitials(name)}
        </div>
        <div className="min-w-0 overflow-hidden">
          <p className="font-semibold text-lg truncate">{name}</p>
        </div>
      </div>
      <div className="mb-4 text-sm">
        <p className="text-sm text-gray-600 truncate">{email}</p>
        <p>Status: {status}</p>
        <p>Date of Birth: {db}</p>
      </div>
      <div className="flex justify-end gap-2">
        <button className="bg-blue-600 text-white w-[4rem] p-2 rounded-md hover:bg-blue-700 transition-colors">
          Edit
        </button>
        <button className="bg-red-500 text-white w-[4rem] p-2 rounded-md hover:bg-red-600 transition-colors">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;