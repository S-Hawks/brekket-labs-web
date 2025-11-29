import React from "react";
import { useLoaderData } from "react-router";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";
import { FaUsersSlash } from "react-icons/fa";

const Users = () => {
  const usersData = useLoaderData();
  //console.log(usersData);

  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">All Users</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <select
            // value={roleFilter}
            // onChange={(e) => setRoleFilter(e.target.value)}
            className="select select-bordered select-sm"
          >
            <option value="all">All</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
            <option value="User">User</option>
          </select>
        </div>
        <button className="btn btn-primary btn-sm">
          <LuPlus size={16} /> Add User
        </button>
      </div>
      <table className="table w-full border border-base-300 rounded-lg shadow-sm">
        <thead className="bg-base-300 text-gray-700">
          <tr className="text-center text-base">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData && usersData.length > 0 ? (
            usersData.map((user) => (
              <tr key={user.id} className={`hover:bg-base-200 text-center`}>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>{user.password}</td>
                <td className="text-center space-x-2">
                  <button className="btn btn-outline btn-warning">
                    <LiaUserEditSolid size={20} />
                  </button>
                  <button className="btn btn-outline btn-error">
                    <RiDeleteBinLine size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500">
                No users found <FaUsersSlash size={20} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
