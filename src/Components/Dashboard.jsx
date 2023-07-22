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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">
            <span className="display-5">Hello React!</span>
          </span>
        </div>
      </nav>
      <div className="bg-black">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12  ">
              <div className="row mb-5">
                <p className="display-5 fw-bold text-center mt-4 text-white ">
                  Product Users{" "}
                </p>

                {data.map((item) => {
                  return (
                    <>
                      <div className="col-lg-3 d-flex justify-content-center g-5">
                        <div
                          className="card bg-black border-white d-flex justify-content-center align-items-center cards"
                          style={{ width: "17rem" }}
                        >
                          <img
                            src="https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg"
                            className="card-img rounded-circle mt-4"
                            alt="profile_id"
                            style={{ height: "150px", width: "150px" }}
                          />
                          <div className="card card-body  bg-black">
                            <h5 className="card-title text-white text-center">
                              {item.name}
                            </h5>

                            <Link
                              to={`/user/${item.id}`}
                              className="btn btn-success"
                            >
                              View Dashboard
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
