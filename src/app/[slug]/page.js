import React from "react";
import BlogDetails from "@/components/Blog/BlogDetails";
import { fetchPopular } from "../page";
import { fetchBlogs } from "../blog/page";
import AboutDetails from "@/components/About/AboutDetails";
import OurTeam from "@/components/OurTeam/page";

const fetchBlogDetailList = async (slug) => {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/blog/" + slug
  );
  const response = await res.json();
  //console.log("Blogresponse", response);
  return response;
};

const fetchAbout = async (slug) => {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/menudetail/" + slug
  );
  const response = await res.json();
  console.log("about", response);
  return response;
};

// export async function generateMetadata({ params }, parent) {
//   const blogMeta = await fetchBlogDetailList(params.slug);
//   const previousImages = (await parent).openGraph?.images || [];
//   //const title = blogMeta?.meta_title;
//   //console.log("----------------------------------------------------", blogMeta);
//   //const imageURL = "https://destination.missionsummittreks.com/" + blogMeta
//   const imageURL =
//     "https://destination.missionsummittreks.com/" + blogMeta?.image;
//   //console.log(image, "iamgeeee");
//   return {
//     title: blogMeta?.meta_title,
//     description: blogMeta?.meta_description,
//     keyword: blogMeta?.meta_keyword,
//     openGraph: {
//       images: [imageURL, ...previousImages],
//     },
//   };
// }
export default async function slug({ params, searchParams }) {
  const slug = params.slug;
  console.log(slug);

  //console.log("++++++++++++++", params);
  if (slug === "about" || slug === "our-team") {
    const aboutDetails = await fetchAbout(slug);
    const popularTour = await fetchPopular();
    const blog = await fetchBlogs();
    return (
      <AboutDetails
        aboutDetails={aboutDetails}
        popularTour={popularTour}
        blog={blog}
      />
    );
    // } else if (slug === "our-team") {
    //   const aboutDetails = await fetchAbout(slug);
    //   return (
    //     <AboutDetails
    //       aboutDetails={aboutDetails}
    //       popularTour={popularTour}
    //       blog={blog}
    //     />
    //   );
  } else {
    const blogDetailList = await fetchBlogDetailList(slug);
    console.log(slug, "************************************");
    return <BlogDetails blogDetailList={blogDetailList} />;
  }

  // return (
  //   <>

  //   {
  //     if(slug === "about")
  //       return "hi"

  //   }
  //     {/* {slug === "about"
  //       ? // <AboutDetails
  //         //   aboutDetails={aboutDetails}
  //         //   popularTour={popularTour}
  //         //   blog={blog}
  //         // />
  //         "about"
  //       : "hello"} */}

  //     {/* {slug === "about" && "hi"} */}
  //     {/* {slug === "about" ? (
  //       <AboutDetails
  //         aboutDetails={aboutDetails}

  //       />
  //     ) : slug === "our Team" ? (
  //       <OurTeam />
  //     ) : (
  //       <BlogDetails blogDetailList={blogDetailList} />
  //     )} */}
  //     {/* {slug === "about" ? "working" : "not working"} */}
  //     {/* <BlogDetails blogDetailList={blogDetailList} />

  //     {slug} */}
  //   </>
  // );
}
