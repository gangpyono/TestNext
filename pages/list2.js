import React from "react";
import Link from "next/link";
import axios from "axios";

const list2 = ({ data }) => {
  console.log("list2 client");
  console.log(data);

  return (
    <>
      <h1>list2 페이지 입니다.</h1>
      <div>
        <h2>getServerSideProps로부터 받은 데이터</h2>

        {data.map((item, idx) => {
          return <div key={idx}>{item.text}</div>;
        })}
      </div>
      <Link href={"/"}>
        <button>돌아가기</button>
      </Link>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/userlist");
  console.log("list2 server");
  const data = res.data;

  return { props: { data } };
}

export default list2;
