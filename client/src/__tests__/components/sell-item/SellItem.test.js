import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { SellItem } from "../../../components/sell-item/SellItem";

const Props = {
  errors: {}
};

const wrapper = shallow(<SellItem {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('sell item action', () => {
    
})



// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import InputGroup from "../common/InputGroup";
// import { addItem } from "../../actions/itemActions";
// import UploadFileGroup from "../common/UploadFileGroup";
// import SelectListGroup from "../common/SelectListGroup";
// import TextFieldGroup from "../common/TextFieldGroup";
// import handleInputErrors from "../common/hoc/handleInputErrors";
// import fetchCurrentUser from "../common/hoc/fetchCurrentUser";
// import { ShadowCard } from "../common/styles/ShadowCard";
// import { selectOptions } from "../../utils/browseItems";

// export class SellItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//       price: "",
//       name: "",
//       category: "",
//       selectedFile: null
//     };
//   }

//   fileSelectedHandler = e => {
//     this.setState({
//       selectedFile: e.target.files[0]
//     });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     const newItem = new FormData();
//     if (this.state.selectedFile) {
//       newItem.append(
//         "myImage",
//         this.state.selectedFile,
//         this.state.selectedFile.name
//       );
//     }
//     newItem.append("name", this.state.name);
//     newItem.append("text", this.state.text);
//     newItem.append("price", this.state.price);
//     newItem.append("category", this.state.category);

//     this.props.addItem(newItem, this.props.history);
//   };

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     const { errors } = this.props;

//     return (
//       <div className="mb-3 entry container">
//         <div className="row">
//           <div className="col-md-2" />
//           <div className="col-md-8">
//             <h1 className="text-center mt-5 mb-5">Sell an item</h1>
//             <ShadowCard>
//               <form onSubmit={this.onSubmit}>
//                 <div>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <InputGroup
//                         id="name"
//                         placeholder="Name"
//                         name="name"
//                         icon="fas fa-signature"
//                         value={this.state.name}
//                         onChange={this.onChange}
//                         error={errors.name}
//                       />
//                       <div className="mt-3">
//                         <InputGroup
//                           id="price"
//                           placeholder="Price (USD)"
//                           name="price"
//                           icon="fas fa-dollar-sign"
//                           value={this.state.price}
//                           onChange={this.onChange}
//                           error={errors.price}
//                         />
//                       </div>
//                       <div className="mt-3">
//                         <SelectListGroup
//                           id="category"
//                           placeholder="* Category"
//                           name="category"
//                           value={this.state.category}
//                           options={selectOptions}
//                           error={errors.category}
//                           onChange={this.onChange}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <UploadFileGroup
//                         id="file"
//                         error={errors.file}
//                         icon="fas fa-file-upload fa-8x"
//                         type="file"
//                         name="file"
//                         onChange={this.fileSelectedHandler}
//                       />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6" />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="p-3">
//                     <div className="form-group">
//                       <TextFieldGroup
//                         placeholder="Add description"
//                         name="text"
//                         value={this.state.text}
//                         onChange={this.onChange}
//                         error={errors.text}
//                       />
//                     </div>
//                     <button
//                       onClick={this.onSubmit}
//                       className="btn btn-danger float-right mr-5"
//                     >
//                       Upload
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </ShadowCard>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// SellItem.propTypes = {
//   addItem: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   currentUser: PropTypes.object.isRequired
// };

// export default connect(
//   null,
//   { addItem }
// )(fetchCurrentUser(handleInputErrors(SellItem)));
