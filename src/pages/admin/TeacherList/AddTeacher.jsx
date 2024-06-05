 import React, { useState } from 'react'
 import countrycode from "../../../components/data/Countrycode.json";
 const AddTeacher = ({isOpen}) => {
    const[errors,setError]= useState({});
    const [formData, setformData] = useState({
      first_name: "",
      last_name:"",
      middle_name:"",
      gender:"",
      PhoneNumber:"",
      email:"",
      AcademyCode:"",
      AcademyName:"",
      LGA:"",
      SenatorialDistrict:"",
      Grade:"",
      id:""
    });
    const onchangeHandler = (event) => {
  
        const { name, value } = event.target;
        setformData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
   return (
    <div className={` block lg:flex justify-center gap-10 py-[8rem] lg:py-[8rem] lg:px-[9rem]  px-[10px] ${isOpen ? "ml-[240px]" : ""}`}>
          <div className="users bg-[#FFFFFF] rounded-xl lg:w-[80%]">
          <div className="Border ">
            <h2 className=" font-medium text-[18px]  leading-[20px] text-[#000000] pb-[20px]">
            Add Teacher
            </h2>
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
                  <label for="middle_name" className="font-medium text-[14px] mt-5 leading-[18px] text-[#3D3D3D]  block">Last Name</label>
                  <input
                    type="text"
                    name="middle_name"
                    value={formData.middle_name}
                    className="mt-1  text-[14px] w-full  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                    placeholder="Enter Details"
                    onChange={onchangeHandler}
                  />
                  {errors.middle_name && (
                    <span className=" text-red-500 block p-[8px]">Enter middle_name *</span>
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
                </div>

                <div className="mt-4 Border ">
                  <label className=" font-medium text-[14px] leading-[18px] text-[#3D3D3D]">
                    Description
                  </label>
                  <textarea
                    placeholder="Enter Message Here"
                    className=" outline-none w-full border border-[#D9D9D9] py-[10px] px-[16px] rounded-lg h-[149px]"
                  ></textarea>
                </div>

          <div className=" block lg:grid grid-cols-2 gap-5 mt-5">
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
                {/* Grade */}
                <div className="">
                  <label for="Grade" className="font-medium  text-[14px] mt-5 block leading-[18px] text-[#3D3D3D] ">Grade Teacher</label>
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
                    <label for="id" className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] ">
                     Teacher's ID
                    </label>
                    <input
                      type="text"
                      name="id"
                      placeholder="Enter Details"
                      value={formData.id}
                      onChange={onchangeHandler}
                      className="w-full   text-[14px] mt-5 outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
              
                    />
                    {errors.id && (
                      <span className="text-red-500 block p-[8px]"></span>
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
              <button type="button" className=" h-[32px] rounded-lg text-center  w-[200px]  text-white bg-[#F2994A]" > Add Teacher</button>
            </div>
          </div>
  </div>
   )
 }
 
 export default AddTeacher
 