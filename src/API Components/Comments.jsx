import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Comments() {
  const [comment, setComment] = useState([]);
  const params = useParams();

  useEffect(() => {
    commentData();
  }, [params.id]);

  let commentData = async () => {
    try {
      let commentInfo = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`
      );
      setComment(commentInfo.data);
      console.log(commentInfo.data);
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
                <strong className="fs-5">No.of.Comments</strong>
                <div className="mt-1">
                  <div className="progress" style={{ height: "40px" }}>
                    <div
                      className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Animated striped example"
                      style={{ width: `${comment.length}cm` }}
                    >
                      {" "}
                      <strong className="display-6 fw-bold">
                        {comment.length}
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

export default Comments;
