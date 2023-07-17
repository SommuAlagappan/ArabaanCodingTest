import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Dashboard() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    allUsers();
  }, []);

  let allUsers = async () => {
    try {
      let response = await axios.get(`
        https://jsonplaceholder.typicode.com/users`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <span className="navbar-brand">
            <span className="display-5">Hello Arbaan!</span>
          </span>
        </div>
      </nav>

      <div className="container ">
        <div className="row">
          <div className="col-lg-8  ">
            <p className="display-6 fw-bold container mt-4 text-dark">
              Product Users{" "}
            </p>

            {data.map((item) => {
              return (
                <>
                  <div className="list-group">
                    <Link
                      to={`/user/${item.id}`}
                      className="list-group-item list-group-item-action  "
                    >
                      <b className="lead fw-bold fst-italic   ">{item.id}. </b>
                      <b className="lead fw-bolder fst-italic ">{item.name}</b>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
