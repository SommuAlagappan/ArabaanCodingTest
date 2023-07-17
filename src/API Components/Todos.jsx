import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);
  const params = useParams();

  useEffect(() => {
    todosData();
  }, [params.id]);

  let todosData = async () => {
    try {
      let todosInfo = await axios.get(`
        https://jsonplaceholder.typicode.com/todos?completed=false&userId=${params.id}`);
      setTodos(todosInfo.data);
      console.log(todosInfo.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-start">
          <div className=" w-50">
            <div className="row">
              <div className="col-10 my-2">
                <strong className="fs-5">No.of.To-dos</strong>
                <div className="mt-1">
                  <div className="progress" style={{ height: "40px" }}>
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Animated striped example"
                      style={{ width: `${todos.length}cm` }}
                    >
                      {" "}
                      <strong className="display-6 fw-bold">
                        {todos.length}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
