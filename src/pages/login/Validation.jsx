import React from "react";

const Validation = (formData) => {
  const errors = {};
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  if (formData.email === "" && formData.password === "") {
    errors.email = "Email is required";
    errors.email = "Password is required";
  }

  if (formData.email === "") {
    errors.email = "Email is required";
  } else if (!emailPattern.test(formData.email)) {
    errors.email = "Email is not in correct format";
  }

  if (formData.password === "") {
    errors.password = "Password is required is required";
  } else if (formData.password.length <= 6) {
    errors.password = "Password must be at least 6 characters";
  }
  if (formData.ConfirmPassword !==  formData.password) {
    errors.ConfirmPassword= "Password and confirm password do not match";
  } else if (formData.ConfirmPassword==='') {
    errors.ConfirmPassword = "Confirm Password is required";
  }

  if (formData.verification === "") {
    errors.verification = "enter the otp";
  }

  if (formData.FullName === "") {
    errors.FullName = "Enter FullName";
  }
  if (formData.Gender === "") {
    errors.Gender = "Select Gender";
  }
  if (formData.Address === "") {
    errors.Address = "Enter Address";
  }

  if (formData.LocalGovernment === "") {
    errors.LocalGovernment = "Select LocalGovernment ";
  }

  if (formData.AcademyCode === "") {
    errors.AcademyCode  = "Enter Academy Code";
  }
  if (formData.AcademyCode === "") {
    errors.AcademyName  = "Enter AcademyName";
  }
  if (formData.LGA === "") {
    errors.LGA  = "Select LGA";
  }
  if (formData.SenatorialDistrict=== "") {
    errors.SenatorialDistrict = "Select Senatorial District";
  }
  if (formData.Grade=== "") {
    errors.Grade= "Select Grade";
  }
  if(formData.PhoneNumber===""){
    errors.PhoneNumber=='Please enter phone Number'
  }else if(formData.PhoneNumber>10 && formData.PhoneNumber<10)
    {
      errors.PhoneNumber=='Enter a valid Phone Number'
    }

  return errors;
};

export default Validation;
