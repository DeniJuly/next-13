import axios from "axios";
import { Metadata } from "next";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
interface PageProps {
  params: {
    postId: string;
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await res.json()) as Post[];
  return posts.map((item) => {
    return {
      postId: item.id.toString(),
    };
  });
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + props.params.postId
  );
  const posts = (await res.json()) as Post;
  return {
    title: posts.title,
  };
}

export const revalidate = 10;

const page = async (props: PageProps) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${props.params.postId}`
  );
  const res = data as Post;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>userId</td>
            <td>{res.userId}</td>
          </tr>
          <tr>
            <td>id</td>
            <td>{res.id}</td>
          </tr>
          <tr>
            <td>title</td>
            <td>{res.title}</td>
          </tr>
          <tr>
            <td>body</td>
            <td>{res.body}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
