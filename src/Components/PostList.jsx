import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PostList = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    postSummaryData();
  }, [params.id]);

  const postSummaryData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${params.id}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <p className="h1 fw-bold mt-4 mt-lg-5 ">List of Posts </p>

            {data.map((item) => {
              return (
                <div class="col-12 mb-2">
                  <div class="card">
                    <div class="card-body ">
                      <p className="h5">{item.title}</p>
                      <Link
                        to={`/post/${item.id}`}
                        className="btn btn-outline-success btn-sm "
                      >
                        <i className="fa-solid fa-eye me-1"></i>View
                      </Link>
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
};

export default PostList;
