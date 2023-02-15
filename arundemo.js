// import axios from "axios";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import Fotter from "./Fotter";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import axios from "axios";
import Select from "react-select";
// import { useSelect } from "react-search-select";
import { createStructuredSelector } from "reselect";
import "./AddUser.css";
import { getRoleDataSelector } from "../Redux/FetchRole/Selector";
import { connect, useDispatch } from "react-redux";
import * as ACTION from "./../Redux/AddUser/Action";
import { useHistory } from "react-router-dom";
const AddUser = ({ ROLE_DATA }) => {
  // console.log(
  //   "djgwyugwqyutgwydddddddddddddddddddddddddd",
  //   JSON.stringify(ROLE_DATA)
  // );

  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const history = useHistory();
  const [passShow, setPassShow] = useState("false");
  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    createdBy: 94,
    accountId: 1,
    emailId: "",
    mobileNumber: "",
    roleId: "",
    password: "",
    userId: "",
    history: history,
  });
  const showPassword = () => {
    setPassShow(passShow ? false : true);
  };
  // console.log(JSON.stringify(userData));

  const handleAddUser = (e) => {
    const value = e.target.value;
    setuserData({
      ...userData,
      [e.target.name]: value,
    });
  };
  const cancleAddUser = () => {
    history.push("/user");
  };

  // const getRole = () => {
  //   axios
  //     .get(`http://10.0.90.43:3000/pixfixws/role`)
  //     .then((res) => {
  //       alert(JSON.stringify(res));
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };
  const handleAddSelector = (value) => {
    // alert(value);
    setuserData({
      ...userData,
      roleId: value,
    });
  };

  const handleSubmit = () => {
    if (userData.firstName?.trim().length !== 0) {
      if (userData.lastName?.trim().length !== 0) {
        if (userData.userId?.trim().length !== 0) {
          if (userData.emailId?.trim().length !== 0) {
            if (userData.mobileNumber?.trim().length !== 0) {
              if (userData.password?.trim().length !== 0) {
                if (userData.userId?.length > 6) {
                  if (userData.password?.length > 8) {
                    if (userData.roleId?.length !== 0) {
                      dispatch(ACTION.addUserStart(userData));
                    } else {
                      alert("Role cannot be Empty");
                    }
                  } else {
                    alert(" Password should not be less than 8 Characters");
                  }
                } else {
                  alert(" User ID should not be less than 6 Characters");
                }
              } else {
                alert(" User ID should not be empty");
              }
            } else {
              alert(" Contact number should not be empty");
            }
          } else {
            alert("Email should not be empty");
          }
        } else {
          alert("User id should not be empty");
        }
      } else {
        alert("Lastname should not be empty");
      }
    } else {
      alert("FirstName should not be empty");
    }
  };
  return (
    <div>
      <Header />

      <div className="main-container" id="container">
        <div className="overlay"></div>
        <div className="search-overlay"></div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  ROLE_DATA: getRoleDataSelector,
});

export default connect(mapStateToProps)(AddUser);
