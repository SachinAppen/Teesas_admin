import React, { useState } from "react";
import countrycode from "../../components/data/Countrycode.json";
import Customadduser from "../../components/common/Customadduser";
import { addUserAsync } from "../../apis/slices/authSlice";
import { useDispatch } from "react-redux";
import Validation from "../login/Validation";

const AddUser = ({ isOpen, togglesidebar }) => {
  const [showCustomAddUser, setShowCustomAddUser] = useState(false);
  const[errors,setError]=useState({});
  const [formData, setformData] = useState({
    first_name: "",
    last_name:"",
    city:"",
    gender:"",
    DateofBirth:"",
    PhoneNumber:"",
    email:"",
    Address:"",
    LocalGovernment:"",
    AcademyCode:"",
    AcademyName:"",
    LGA:"",
    SenatorialDistrict:"",
    Grade:"",
    password:"",
    ConfirmPassword:""
  });
  const dispatch=useDispatch();
  const token = localStorage.getItem("authToken");
  const onchangeHandler = (event) => {
  
    const { name, value } = event.target;
    setformData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitContactForm=()=>{
    setError(Validation(formData));
  const finaldata={
    first_name:formData.first_name,
    last_name:formData.last_name,
    gender: formData.gender.toUpperCase(),
    city:formData.city,
    birthday:formData.birthday,
    mobile:formData.mobile,
    email:formData.email,
    country_id: formData.country_id,
    academy_id: formData.academy_id,
    class_id: formData.class_id,
    password: formData.password,
    Address:formData.Address,
    LocalGovernment:formData.LocalGovernment,
    AcademyCode:formData.AcademyCode,
    AcademyName:formData.AcademyName,
    LGA:formData.LGA,
    SenatorialDistrict:formData.SenatorialDistrict,
    Grade:formData.Gender,
    Password:formData.password,
    ConfirmPassword:formData.ConfirmPassword
  }
    addUserAsync({
      dispatch: dispatch,
      body:finaldata,
      token: token,
   
      callbackFn: (res) => {
        console.log("adduserdata",res) 
        if (res?.data?.status === 200) {
          setShowCustomAddUser(true);
          setLoading(false);
        } else {
          toast.error(res?.data?.message);
          setLoading(false);
        }
      },
    });
    
  }
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
  return (
    <div className={` block lg:flex justify-center gap-10 py-[8rem] lg:py-[8rem] lg:px-[9rem]  px-[10px] ${isOpen ? "ml-[240px]" : ""}`}>
      {
        showCustomAddUser ? (<Customadduser showCustomAddUser={showCustomAddUser} setShowCustomAddUser={setShowCustomAddUser} isOpen={isOpen}
          img=""
          text1="Drag and drop an image, or browse"
          text2="Upload .pdf, .doc or .doc, Max 6 MB "
          list1="Download Sample File"
          list2="Reupload List" />) : (
          <>
            <div className="users bg-[#FFFFFF] rounded-xl lg:w-[80%]">
              <h2 className="text-[18px]  leading-[20px] Border  pb-[10px] text-[#000000] font-medium">
                Add Single User
              </h2>
              <div>
                <p className=" font-medium text-[14px] leading-[18px] mt-5 text-[#3D3D3D] pb-[8px]">
                  Upload User Image
                </p>
                <div className="h-[48px] py-[10px] border border-dashed text-[#B9B9B9] bg-[#FFF9ED] rounded-lg">
                  <p className=" font-normal text-[16px] leading-[24px] text-center  translate-x-0 text-[#49454F]">
                    Click to upload Image
                  </p>
                </div>
              </div>

              <div className=" ">
                <form >
                  {/* fullName  */}
                  <div className=" block lg:grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <label for="first_name" className="font-medium text-[14px] mt-5 leading-[18px] text-[#3D3D3D]  block">First name</label>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      className=" mt-1 w-full  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                      placeholder="Enter Details"
                      onChange={onchangeHandler}
                    />
                    {errors.first_name && (
                      <span className=" text-red-500 block p-[8px]">Enter first_name *</span>
                    )}
                  </div>
                  <div>
                    <label for="last_name" className="font-medium text-[14px] mt-5 leading-[18px] text-[#3D3D3D]  block">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      className="mt-1  text-[14px] w-full  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                      placeholder="Enter Details"
                      onChange={onchangeHandler}
                    />
                    {errors.last_name && (
                      <span className=" text-red-500 block p-[8px]">Enter last_name *</span>
                    )}
                  </div>
                  </div>

                  <div className=" block lg:grid grid-cols-2 gap-5 mt-5">
                    {/* Gender  */}
                    <div>
                      <label for="gender" className=" font-medium text-[14px] mt-5 leading-[18px] text-[#3D3D3D]">Gender</label>
                      <select
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={onchangeHandler}
                        className="w-full mt-1 text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                      >
                        <option >Male</option>
                        <option >Female</option>
                        <option>Other</option>
                      </select>
                      {errors.gender && (
                      <span className=" text-red-500 block p-[8px]">Select Gender *</span>
                    )}
                    </div>
                    {/* DOB  */}

                    <div >
                      <label for="birthday" className=" font-medium text-[14px] mt-5 leading-[18px] text-[#3D3D3D] pb-[8px]">Date of Birth</label>
                      <select
                        name="birthday"
                        onChange={onchangeHandler}
                        value={formData.birthday}
                        className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                      >
                        <option value="">Day</option>
                        {days.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                        <option value="">Month</option>
                        {months.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.name}
                          </option>
                        ))}
                        <option value="">Year</option>
                        {years.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                      {errors.birthday && (
                      <span className=" text-red-500 block p-[8px]">Enter Date oF Birth *</span>
                    )}
                    </div>


                    {/* Phone Number  */}
                    <div>
                      <label for="PhoneNumber" className="font-medium text-[14px] mt-5 leading-[18px] text-[#3D3D3D] pb-[8px]">Phone Number</label>
                      <div className="flex gap-5">
                        <div className="flex w-[82px] flex-col gap-5 ">
                          <select
                            type="text"
                            name="countrycode"
                            className="w-full mt-1 text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                            id={formData.country_id}
                      
                          >
                            {countrycode.map((item, index) => {
                              return (
                                <option key={index} value={item.code}>
                                  {item.code} - {item.country}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="flex w-[calc(100%-90px)]  flex-col gap-2">
                          <input
                            type="number"
                            name="mobile"
                            id="phonenumber"
                           value={formData.mobile}
                            onChange={onchangeHandler}
                            className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                            placeholder="Enter Details"
                            // {...register("phoneNo", {
                            //   required: {
                            //     value: true,
                            //     message: "Please enter phone Number*",
                            //   },
                            //   maxLength: {
                            //     value: 10,
                            //     message: "Enter a valid Phone Number*",
                            //   },
                            //   minLength: {
                            //     value: 8,
                            //     message: "Enter a valid Phone Number*",
                            //   },
                            // })}
                          />
                          {errors.mobile && (
                            <span className=" text-red-500">
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* email   */}
                    <div className="">
                      <label for="email" className="font-medium text-[14px]  mt-5 leading-[18px] text-[#3D3D3D] ">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onchangeHandler}
                        placeholder="Enter Details"
                        className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                      />
                     {errors.email && (
                      <span className=" text-red-500 block p-[8px]">Enter Email *</span>
                    )}
                    </div>
                  </div>

                  <div className=" block lg:grid grid-cols-2 gap-5 mt-5">
                    {/* Address */}
                    <div className="">
                      <label for="Address" className="font-medium text-[14px] mt-5 leading-[18px] text-[#3D3D3D] " >Address</label>
                      <input
                        type="text"
                        name="Address"
                        value={formData.Address}
                        placeholder="Enter Details"
                        onChange={onchangeHandler}
                        className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
              
                      />
                      {errors.Address && (
                        <span className="text-red-500 block p-[8px]">Enter Address *</span>
                      )}
                    </div>
                    {/* local goverment  */}
                    <div>
                      <label for="LocalGovernment" className="font-medium mt-5 text-[14px] leading-[18px] text-[#3D3D3D] ">Local Government</label>
                      <select
                        type="text"
                        name="LocalGovernment"
                        value={formData.LocalGovernment}
                        onChange={onchangeHandler}
                        className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                 
                      >
                        <option value="0">1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                      </select>
                      {errors.LocalGovernment && (
                        <span className="text-red-500 block p-[8px]">Enter LocalGovernment *</span>
                      )}
                    </div>
                    {/* Academy Code */}
                    <div className="">
                      <label for="AcademyCode" className="font-medium mt-5 text-[14px] leading-[18px] text-[#3D3D3D] " >Academy Code</label>
                      <input
                        type="text"
                        name="AcademyCode"
                        placeholder="Enter Details"
                        value={formData.AcademyCode}
                        onChange={onchangeHandler}
                        className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                
                      />
                      {errors.AcademyCode && (
                        <span className="text-red-500 block p-[8px]">Enter Academy Code *</span>
                      )}
                    </div>

                    {/* Academy Name */}
                    <div className="">
                      <label for="AcademyName" className="font-medium mt-5 text-[14px] leading-[18px] text-[#3D3D3D] ">Academy Name</label>
                      <input
                        type="text"
                        name="AcademyName"
                        placeholder="Enter Details"
                        value={formData.AcademyName}
                        onChange={onchangeHandler}
                        className="w-full mt-1  text-[14px]   outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                    
                      />
                      {errors.AcademyName && (
                        <span className=" text-red-500 block p-[8px]"> Enter Academy Name *</span>
                      )}
                    </div>

                    {/* LGA  */}
                    <div>
                      <label for="LGA" className="font-medium text-[14px] mt-5 leading-[18px] text-[#3D3D3D] ">LGA</label>
                      <select
                        type="text"
                        name="LGA"
                        value={formData.LGA}
                        onChange={onchangeHandler}
                        className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                        
                      >
                        <option value="0">1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                      </select>
                      {errors.LGA && (
                        <span className="text-red-500 block p-[8px]"> Enter LGA *</span>
                      )}
                    </div>
                    {/* Senatorial District  */}
                    <div>
                      <label for="SenatorialDistrict" className="font-medium mt-5 text-[14px] leading-[18px] text-[#3D3D3D] ">Senatorial District</label>
                      <select
                        type="text"
                        name="SenatorialDistrict"
                        value={formData.SenatorialDistrict}
                        onChange={onchangeHandler}
                        className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                 
                      >
                        <option value="0">1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                      </select>
                      {errors.SenatorialDistrict && (
                        <span className="text-red-500 block p-[8px]">Enter Senatorial District *</span>
                      )}
                    </div>
                  </div>
                  {/* Grade */}
                  <div className="block lg:grid grid-cols-2 gap-5 mt-5 Border pb-[18px]">
                  <div className="">
                    <label for="Grade" className="font-medium  text-[14px] mt-5 block leading-[18px] text-[#3D3D3D] ">Grade</label>
                    <select
                      type="text"
                      name="Grade"
                      value={formData.Grade}
                      onChange={onchangeHandler}
                      className=" w-full mt-1 text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                
                    >
                      <option value="0">1</option>
                      <option value="1">2</option>
                      <option value="2">3</option>
                    </select>
                    {errors.Grade && (
                      <span className="text-red-500 block p-[8px]">Enter Grade *</span>
                    )}
                  </div>
                  <div className="">
                      <label for="city" className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] ">
                       City
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter Details"
                        value={formData.city}
                        onChange={onchangeHandler}
                        className="w-full   text-[14px] mt-5 outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                
                      />
                      {errors.city && (
                        <span className="text-red-500 block p-[8px]"></span>
                      )}
                    </div>
                    </div>

                  <div className="block lg:grid grid-cols-2 gap-5 mt-5">
                    <div className="">
                      <label for="Password" className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] ">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter Details"
                        value={formData.Password}
                        onChange={onchangeHandler}
                        className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                
                      />
                      {errors.password && (
                        <span className="text-red-500 block p-[8px]"></span>
                      )}
                    </div>
                    <div className="">
                      <label for="ConfirmPassword" className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] ">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="ConfirmPassword"
                        value={formData.ConfirmPassword}
                        placeholder="Enter Details"
                        onChange={onchangeHandler}
                        className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
            
                      />
                      {errors.Confirmpassword && (
                        <span className="text-red-500 block p-[8px]">Enter Confirm Password *</span>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="users bg-[#ffffff] lg:mt-0 mt-5 lg:w-[35%] rounded-lg h-[50%]">
              <h2 className="text-[18px]  leading-[20px]  pb-[10px] text-[#000000] font-medium">
                Summary
              </h2>
              {/* <div className=" rounded-2xl bg-[#FFF9ED] p-4 ">
                {
                  formData.map((item) => (
                    <div key={item.id} className=" flex justify-between mt-2 ">
                      <div className=" font-light text-[14px] leading-[16px] text-[#5A5B5C]">{item.label}</div>
                      <div className="text-[16px] leading-[24px] text-[#000000]">{item.value}</div>
                    </div>
                  ))
                }
              </div> */}

              <div className="bg-[FFF9FD] m-auto my-10">
                <button type="button" className=" h-[32px] rounded-lg text-center  w-[200px]  text-white bg-[#F2994A]" onClick={()=>{
                  submitContactForm()
                }}> Add User</button>
              </div>
            </div>
          </>
        )
      }

    </div>
  );
};

export default AddUser;