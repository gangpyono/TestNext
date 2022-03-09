import React, { useState } from "react";
import Link from "next/link";
import Test from "../components/Test";

const index = ({ data = "aaa" }) => {
  console.log("index", "client");

  return (
    <>
      <h1>index페이지 입니다.</h1>
      <Test />
      <Link href={"/list1"}>
        <button>리스트1</button>
      </Link>
      <Link href={"/list2"}>
        <button
          onClick={() => {
            console.log(123);
          }}
        >
          리스트2
        </button>
      </Link>
    </>
  );
};

export default index;
