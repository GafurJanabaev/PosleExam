import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Kunlik.scss";
import { api } from "../../api";

const Kunlik = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      task: "Gafur",
    },
  ]);

  useEffect(() => {
    api
      .post("/tasks")
      .then((res) => {
        setTodo(res.data.payload);
        console.log("akjfaeufsdvknj", res.data.payload);
      })
      .catch((err) => console.log(err, "Hello"));
  }, []);

  return (
    <div className="Kunlik">
      <h1>Kunlik categoriya</h1>
      <Link to="/create" className="btn btn-success">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Bugingi kun</th>
            <th> Update and Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.task}</td>
              <td className="td">
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="Kunlik-info"></div>
    </div>
  );
};

export default Kunlik;
