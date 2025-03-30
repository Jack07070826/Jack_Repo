import { useContext, useEffect, useState } from "react";
import User from "../models/User";
import axios from "axios";
import UserContext from "../context/UserContext";

interface ListGroupProps {
  heading: string;
  onSelected: (username: string) => void;
}

function ListGroup({ heading, onSelected }: ListGroupProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<Number>(0);
  const { name, job } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/api/user/")
      .then((result) => setUsers(result.data.users))
      .catch((e) => console.log(e))
      .finally(() => console.log("Call '/api/user/' successfully"));
  }, []);

  return (
    <>
      <h1>{heading}</h1>
      <h3>name is: {name}</h3>
      <h3>job is: {job}</h3>
      <div className="card" style={{ width: "50rem" }}>
        <ul className="list-group">
          {users.map((user, index) => {
            return (
              <li
                className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                key={user.name}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelected(user.name);
                }}
              >
                {user.name}, {user.job}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
