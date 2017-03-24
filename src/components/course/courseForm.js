import React from 'react';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors})=> {
  return (
    <form>
      <h1>Manage Course</h1>
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

export default CourseForm;
