import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="col-md-3 m-3 card">
      <div className="card-body">
        <img
          src={course.cover_photo}
          alt={course.cover_photo}
          className="img-fluid"
        />
        <h1 className="card-title">{course.course_name}</h1>
        <h1>Rating : {course.rating}</h1>
        <h1>Price : {course.course_fees}</h1>
      </div>
    </div>
  );
}
