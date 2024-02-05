import React from "react";
import BlogDetails from "@/components/Blog/BlogDetails";

const fetchBlogDetailList = async (slug) => {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/blog/" + slug
  );
  const response = await res.json();
  //console.log("Blogresponse", response);
  return response;
};

export async function generateMetadata({ params }, parent) {
  const blogMeta = await fetchBlogDetailList(params.slug);
  const previousImages = (await parent).openGraph?.images || [];
  //const title = blogMeta?.meta_title;
  //console.log("----------------------------------------------------", blogMeta);
  //const imageURL = "https://destination.missionsummittreks.com/" + blogMeta
  const imageURL =
    "https://destination.missionsummittreks.com/" + blogMeta?.image;
  //console.log(image, "iamgeeee");
  return {
    title: blogMeta?.meta_title,
    description: blogMeta?.meta_description,
    keyword: blogMeta?.meta_keyword,
    openGraph: {
      images: [imageURL, ...previousImages],
    },
  };
}
export default async function slug({ params, searchParams }) {
  const slug = params.slug;
  const blogDetailList = await fetchBlogDetailList(slug);
  // console.log("++++++++++++++", searchParams);

  return (
    <>
      <BlogDetails blogDetailList={blogDetailList} />
    </>
  );
}
