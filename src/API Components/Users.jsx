import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Users() {
  const params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    userData();
  }, [params.id]);

  let userData = async () => {
    try {
      let userInfo = await axios.get(`
        https://jsonplaceholder.typicode.com/users/${params.id}`);
      setUser(userInfo.data);
      console.log(userInfo.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mt-4">
          <div className="row g-4">
            <div class="d-md-flex justify-content-center">
              <span class="display-5 text-md-start text-center fst-italic">
                Hey Welcome,
                <br class="d-md-none" />
                <span className="display-3 fst-normal fw-bold">
                  {user.name}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
