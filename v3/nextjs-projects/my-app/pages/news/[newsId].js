import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  console.log(router.query.newsId);
  return <div>The id</div>;
};

export default DetailPage;
