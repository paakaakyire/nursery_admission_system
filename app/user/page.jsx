"use client";

import { useEffect, useState } from "react";
import connection from "../api/db/mysql";

const MySQLPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rows] = await connection.query("SELECT * FROM users");
        setUsers(rows);
      } catch (error) {
        console.log("Error selecting users!", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to MYSQL USERS PAGE</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default MySQLPage;
