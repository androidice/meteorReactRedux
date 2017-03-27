import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseAction';
import { CourseForm } from './courseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      authors: Object.assign([], this.props.authors),
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onSave(event){
    debugger;
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
  }

  onChange(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  render() {
    return (
     <CourseForm
       allAuthors={this.state.authors}
       onSave={this.onSave}
       onChange={this.onChange}
       course={this.state.course}
       errors={this.state.errors}
     />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let course = {
    id: '',
    title: '',
    watchHref: '',
    authorId: '',
    length: '',
    category: ''
  };

  const authorFormat = state.authors.map((author)=>{// reformating of data
    return {
      value: author.id,
      text: author.firstName+ ' '+ author.lastName
    };
  });

  return {
    course: course,
    authors: authorFormat
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
