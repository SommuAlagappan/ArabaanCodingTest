import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Posts = () => {
  const [post, setPost] = useState([]);
  const params = useParams();

  useEffect(() => {
    postData();
  }, [params.id]);

  const postData = async () => {
    try {
      const postInfo = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${params.id}`
      );
      setPost(postInfo.data);
      console.log(postInfo.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container">
        <h3 className="h1 fw-bold mt-4 mt-lg-5 text-white">Activity Summary</h3>
        <div className="d-flex justify-content-start">
          <div className=" w-50">
            <div className="row">
              <div className="col-10 my-2">
                <strong className="fs-5 text-white">No.of.Posts</strong>
                <div className="mt-1">
                  <div className="progress" style={{ height: "40px" }}>
                    <div
                      className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Animated striped example"
                      style={{ width: `${post.length}cm` }}
                    >
                      <strong className="display-6 fw-bold">
                        {post.length}
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
};

export default Posts;
