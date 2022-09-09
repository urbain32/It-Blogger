import React from "react";
import { useParams } from "react-router";
const BlogDetail = () => {
    const {id} = useParams()
    return (
        <div className="blog-detail">
            Blog Detail - {id}
      </div>
  )
};

export default BlogDetail;
