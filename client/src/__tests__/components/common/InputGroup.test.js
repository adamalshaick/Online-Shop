// import React from "react";
// import { shallow } from "enzyme";
// import InputGroup from "../../../components/common/InputGroup";
// import renderer from "react-test-renderer";
// import { mount } from "enzyme";

// // const Props = {
// //   value: "",
// //   name: "new name",
// //   onChange: e => {
// //     e.target.name = e.target.value;
// //   }
// // };

// // describe("Render InputGroup", () => {
// //   it("render input group component", () => {
// //     const InputGroupComponent = renderer.create(<InputGroup />).toJSON();
// //     expect(InputGroupComponent).toMatchSnapshot();
// //   });
// // });

// // describe("InputGroup logic", () => {
// //   InputGroupComponent = mount(<InputGroup {...Props} />);
// // });

// // it("renders", () => {
// //   const wrapper = shallow(<InputGroup></InputGroup>)
// // })

// // let wrapped;

// it("changes the state on input value change", () => {
//   const newValue = "new value";
//   const wrapper = mount(<InputGroup />);
//   const input = wrapper.find("input");

//   input.simulate("change", { target: { value: newValue } });

//   expect(wrapper.props().basicValue).toEqual(newValue);
// });

// // beforeEach(() => {
// //   wrapped = shallow(<InputGroup />);
// // });

// // it("can type", () => {
// //   wrapped.find("input").simulate("change", {
// //     target: { name: "new name", value: "new input" }
// //   });
// //   wrapped.update();
// //   expect(wrapped.find("input").prop("value")).toEqual("new value");
// // });
