import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Acme";
// export const size = {
//   width: 500,
//   height: 500,
// };
export const contentType = "image/jpeg";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title") : "My Blog";
  // const res = await fetch(
  //   "https://destination.missionsummittreks.com/api/blog/" + "trekking-to-nepal"
  // );
  // const response = await res.json();
  //console.log("Blogresponse", response);

  //   const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
  //     res.json()
  //   )
  const fetchImage = await fetch(new URL("./Logo.png", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 25,
          background: "white",
          width: "30%",
          height: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <h2>{title}</h2> */}
        <img src={fetchImage}></img>
        <h2>{title}</h2>
      </div>
    )
  );
}

// import { ImageResponse } from "next/og";
// export const runtime = "edge";

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const hasTitle = searchParams.has("title");
//   const title = hasTitle ? searchParams.get("title") : "My Blog";

//   // const fetchImage = await fetch(
//   //   new URL("./Logos.png", import.meta.url)
//   // ).then((res) => res.arrayBuffer());

//   // const fetchImage = await fetch(
//   //   new URL("./Logos.png", import.meta.url)
//   // ).then((res) => res.arrayBuffer());
//   return new ImageResponse({ title });
// }
