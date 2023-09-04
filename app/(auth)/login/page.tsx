import axios from "axios";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Page = async () => {
  await wait(5000);
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return <p>{JSON.stringify(data)}</p>;
};

export default Page;
