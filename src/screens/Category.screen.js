import React from "react";
import courses from "../temporary_data_files/courses";
import CourseCard from "../components/Course.card";

export default function CategoryScreen() {
  return (
    <div className="row justify-content-center">
      <h1> CATEGORY SCREEN </h1>
      {courses.map((course) => {
        return <CourseCard course={course} />;
      })}
    </div>
  );
}
