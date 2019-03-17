import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";

describe("createCourseSuccess", () => {
  it("should crate a CREATE_COURSE_SUCCESS action", () => {
    //arrange test
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    };

    // act
    const action = courseActions.createCourseSuccess(course);

    // make assertion
    expect(action).toEqual(expectedAction);
  });
});
