//test nnti hapus maybe
import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border p-2 mb-2 rounded">
            <strong>{user.name}</strong> <br />
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
