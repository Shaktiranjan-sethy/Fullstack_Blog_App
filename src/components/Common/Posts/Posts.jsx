import React from 'react'
import { Blog } from "../../../Context/Context";
import Loading from "../../Loading/Loading"
import PostsCard from "./PostsCard"

const Posts = () => {
  const { postData, postLoading } = Blog();
  //console.log(data);
  return (
    <section className="flex flex-col gap-[2.5rem]">
      {postLoading ? (
        <Loading />
      ) : (
        postData &&
        postData?.map((post, i) => <PostsCard post={post} key={i} />)
      )}
    </section>
  )
}

export default Posts