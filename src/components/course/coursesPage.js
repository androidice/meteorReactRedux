import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseList from './courseList';

class CoursesPage
  extends React.Component {
  constructor(props, context){
    super(props,context);
  }



  render(){
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = { // add a validation on dispatch and courses properties, dispatch is automatically
                          // added by react-redux via connect
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){ // this function will fired when a state from reducer is returned
  debugger;
  return {
    courses: state.courses // determined from root reducer: reducers/index.js,
                            // this will add this.props.courses property in the component
  };
}

function mapDispatchToProps(dispatch) {
  return {
   actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
