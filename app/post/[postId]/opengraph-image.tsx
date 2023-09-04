import axios from "axios";
import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface PageProps {
  params: {
    postId: string;
  };
}
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
// Image generation
export default async function Image({ params }: PageProps) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const res = data as Post;
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {res.title}
      </div>
    ),
    {
      ...size,
    }
  );
}
