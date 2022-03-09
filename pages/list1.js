import React from "react";
import Link from "next/link";
import Test from "../components/Test";

const list1 = ({ data }) => {
  console.log("list1 client");
  return (
    <>
      <h1>list1 페이지 입니다.</h1>
      <h2>getStaticProps로부터 받은 데이터 : {data}</h2>

      <Link href={"/"}>
        <button>돌아가기</button>
      </Link>
      <Test />
    </>
  );
};
export async function getStaticProps() {
  console.log("list1 server");
  const data = "데이터입니다";
  return { props: { data } };
}
export default list1;
