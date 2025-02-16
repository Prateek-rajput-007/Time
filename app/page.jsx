import React, { Suspense } from "react";
import Form from "./addTodoForm";
import Todos from "./todos";

const Page = async () => {
  return (
    <div className="container">
      <Suspense fallback={<div>loading...</div>}>
        <Form />
        <Todos />
      </Suspense>
    </div>
  );
};

export default Page;
