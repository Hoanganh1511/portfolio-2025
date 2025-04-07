import { getAllProjects } from "@/services/service-project";
import React, { Suspense } from "react";
import ListProject from "./_sections/list-project";
const projectData = [
  {
    title: "",
    image: "",
    shortDesc: "",
  },
];
const ProjectsPage = async () => {
  const data = await getAllProjects();
  console.log(data);
  return (
    <div className="max-w-md mx-auto px-[30px] pb-[50px]">
      <div className="pt-[40px]">
        <h1 className="mx-auto w-fit text-[32px] font-semibold">Works</h1>
        <div className="mt-[30px]">
          <Suspense fallback={<div>Loading..</div>}>
            <ListProject data={data.projects} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
