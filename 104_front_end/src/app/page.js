// app/page.js
import React from "react";

const Home = async () => {
  const jobSalaryResponse = await fetch(
    "https://api.104.com.tw/Collego/getJobSalaryUsingGET"
  );
  const jobSalary = await jobSalaryResponse.json();

  const majorJobListResponse = await fetch(
    "https://api.104.com.tw/school-major-controller/getMajorJobList"
  );
  const majorJobList = await majorJobListResponse.json();

  return (
    <div>
      <h1>工作薪資</h1>
      <pre>{JSON.stringify(jobSalary, null, 2)}</pre>
      <h1>專業工作列表</h1>
      <pre>{JSON.stringify(majorJobList, null, 2)}</pre>
    </div>
  );
};

export default Home;
