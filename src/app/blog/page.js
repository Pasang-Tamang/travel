import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/blogs/list"
  );
  const repo = await res.json();

  return (
    <>
      HI BLOG
      {/* {console.log(repo)} */}
      {repo.map((d) => {
        return (
          <>
            <h1>{d.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: d.description }} />
            <div dangerouslySetInnerHTML={{ __html: d.meta_title }} />
            <Link href={"/" + d.slug}>
              <img
                src={"https://destination.missionsummittreks.com/" + d.image}
                width="200px"
                height="100px"
                alt="Picture of the author"
              />
            </Link>
          </>
        );
      })}
    </>
  );
};

// export const getServerSideProps = async () => {
//   // Fetch data from external API
//   const res = await fetch(
//     "https://destination.missionsummittreks.com/api/blogs/list"
//   );
//   const repo = await res.json();
//   // Pass data to the page via props
//   //console.log(repo);
//   return {
//     props: { repo },
//   };
// };

export default Page;
