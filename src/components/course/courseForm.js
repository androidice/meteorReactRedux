import React from 'react';

export const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors})=> {
  debugger;
  console.log('authors', allAuthors);
  console.log('course', course);
  return (
    <form>
      <h1>Manage Course</h1>
      <h2>Course From</h2>
    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading:  React.PropTypes.bool,
  errors: React.PropTypes.object
};
