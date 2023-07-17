import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DetailsPage() {
  const [data, setData] = useState([]);
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    viewPost();
  }, [params.id]);

  const viewPost = async () => {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  let postDelete = async (id) => {
    try {
      let ask = window.confirm("Are you sure want to delete this post?");
      if (ask) {
        let index = data.findIndex((obj) => {
          return obj.id === id;
        });
        data.splice(index, 1);
        setData([...data]);
        toast.success("Post deleted successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <p className="h1 fw-bold mt-4 mt-lg-5">Details of Post</p>
            {data.map((item) => {
              return (
                <div class="col-12 mb-2">
                  <div class="card">
                    <div class="card-body">
                      <div>
                        <span className="h1 ">Title: </span>
                        <span className="lead fw-bold fs-4">{item.title}</span>
                      </div>
                      <div>
                        <span className="h1  ">Body: </span>
                        <span className="lead fw-bold fs-4">{item.body}</span>
                      </div>
                      <div className="mt-3">
                        <button
                          onClick={() => postDelete(item.id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          <i className="fa-solid fa-trash me-1"></i>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
