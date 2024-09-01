import React from "react";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <div>
      <MainLayout>
        <div className="flex justify-center items-center">
          <p className="w-[30rem] flex mt-[10rem] border-2 py-[5rem] px-[3rem] rounded-[0.25rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
            repellat distinctio repudiandae quidem maiores et optio hic atque
            sunt accusamus, quos a ea, ipsum ipsa voluptatem ad dolorum id
            dolorem.
          </p>
        </div>
      </MainLayout>
    </div>
  );
}
export default Home;
