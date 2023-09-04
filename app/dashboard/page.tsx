import axios from "axios";

export const revalidate = 10;

const page = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return <div>dashboard</div>;
};

export default page;
