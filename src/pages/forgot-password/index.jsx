import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import success from "../../assets/images/success.png";
import OtpInput from 'react-otp-input';
import { Verifyresponse, verificationCodeAsync } from "../../apis/slices/authSlice";

function ForgetPassword() {
  const [emailsent, setemailsent] = useState();
  const [isLoading, setLoading] = useState(false);
  const [page, setpage] = useState(0);
  const [email, setemail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const response=useSelector(Verifyresponse)


  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    page == 0 || page == 1 ? setError(validateEmail(email)) : "";
    
    const FinalData = {
      email: email,
    };
    console.log("finall data", FinalData)
      
      verificationCodeAsync({
      dispatch: dispatch,
      body: FinalData,
      callbackFn: (res) => {
        console.log("response",res)
        if (res?.data?.status === 200) {
          setLoading(false);
          setemailsent(!emailsent);
          console.log("Current page value:", page);
          setpage(page + 1);
          console.log("setpage",page)
          // const data = res?.data?.data?.user?.[0];
          // const username = data?.firstName + ' ' + data?.lastName;
          // localStorage.setItem('authToken', res?.data?.data?.user?.token);
          // console.log("dataa",res?.data?.data?.user?.token)
          // setLoading(false);
        } else if (res?.data?.status === 400 && res?.data?.message === "User not found.") {
          // Handle case where user is not found
          setError({ email: "User not found. Please check your email address." });
          setLoading(false);
        }else {
          toast.error(res?.data?.message);
          setLoading(false);
        }
      },
    });
   

  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/login");
  };

  const handlemodal = (e) => {
    e.preventDefault();
    if (page === 2) {
      setShowModal(true);
    } else {
      setpage(page + 1);
    }
  };


  const validateEmail = (email) => {
    const errors = {};
    console.log("emaill", email);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      errors.email = "Email is not in a valid format";
    }
    return errors;
  };
  const Mymodal = () => {
    return (
      <div className="fixed left-0 top-[-90px] right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50  ">

        <div className="border-[#C3C3C3] border bg-white w-[435px] h-[493px] p-10 rounded-3xl">
          <img
            src={success}
            className="w-[100px] h-[150px] mx-auto"
            alt="Success"
          />
          <h3 className="text-center font-bold text-3xl mt-4 mb-2">
            Successful
          </h3>
          <p className="text-center text-gray-700 mb-6">
            Your password reset was successful.
          </p>
          <button
            onClick={handleModalClose}
            className="w-full bg-[#F2994A] mt-[50px] text-white rounded-lg py-2"
          >
            Login
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`p-8 flex justify-center items-center flex-col ${
        showModal ? "overflow-hidden" : ""
      }`}
    >
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <div className="mt-[150px] border-[#C3C3C3] border bg-[#FFFFFF] max-w-[500px] p-10 rounded-3xl">
          <div className=" px-[16px] py-[20px]">
            <h2 className=" text-center text-[40px] leading-[40px] text-[#0C1421] font-bold">
              {page === 0
                ? "We’ve Got You 👍🏽"
                : page === 1
                ? "You’ve Got Mail 👍🏽"
                : page === 2
                ? "New Password👍🏽"
                : ""}
            </h2>

            <p className=" font-normal text-[18px] text-center leading-7 mt-5">
              {page == 0 || page == 1
                ? "Don't worry It occurs enter the email address linked to your account."
                : "Enter the new password you would like to use below"}
            </p>
          </div>
          <form className="max-w-[448px]" onSubmit={handleOnSubmit}>
            {page == 0 || page == 2 ? (
              !emailsent && (
                <label for="email" className="block h-[175px]  mt-8">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value); 
                      setError(validateEmail(e.target.value)); 
                    }}
                    className="w-full mt-1 bg-[#F8F8F8] text-[14px] border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                    placeholder="Enter Details"
                  />
                  {error?.email && (
                    <div className=" text-red-500">{error?.email}</div>
                  )}
                </label>
              )
            ) : (
              <div className="flex w-[70%]  mx-auto my-[20px] justify-center items-center gap-3">
                <OtpInput 
                  value={otp}
                  onChange={setotp}
                  numInputs={4}
                  renderSeparator={<span style={{
                    fontSize: "10px",
                    marginLeft: "20px",
                    marginRight: "5px",
                  }}> {" "}</span>}
                  renderInput={(props) => <input required  value={otp || ''} {...props}  />}
                  inputStyle={{
                    width: "72px",
                    marginBottom: "40px",
                    height: "72px",
                   border:"1px solid #D9D9D9",
                    backgroundColor: "transparent",
                    borderRadius:"8px",
                    padding:"10px 24px 10px 24px",
                    outline: "none",
                  }}
                />
              </div>
            )}
            <button
              type="submit"
              onClick={page == 2 ? handlemodal : ""}
              className={` ${
                page == 1 ? "mt-[50px]" : "mt-[20px]"
              } bg-[#F2994A] text-[14px] flex items-center justify-center text-[#FFFFFF] w-full p-2 rounded-lg ${
                isLoading || !email
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={isLoading || !email}
            >
              {page == 1 ? "Continue" : "Reset Password"}
            </button>
          </form>
          <div className="flex justify-center items-center mt-2 text-center text-[14px] leading-[22px] font-normal px-3">
            Remember Password ?
            <Link to="/login" className="text-[16px] leading-6  text-[#F2994A]">
              Sign In
            </Link>
          </div>
        </div>
      )}
      {showModal && <Mymodal />}
    </div>
  );
}

export default ForgetPassword;
