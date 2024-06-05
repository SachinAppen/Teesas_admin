import React, { useEffect, useState } from "react";
import UserCard from "../../components/common/UserCard";
import Custombutton from "../../components/common/Custombutton";
import edit from "../../assets/images/edit.png";
import actions from "../../assets/images/actions.png";
import frame2 from "../../assets/images/Frame2.png";
import EditItemModal from "../../components/Core/Dashboard/Admin/EditItemModal";
import BarChart from "../../components/Core/Dashboard/Admin/Barcharts";
const SignInList = ({ isOpen }) => {
  const [items, setItems] = useState(null);
  const [todo, setTodo] = useState("");
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [showAllData, setShowAllData] = useState(false);

  const data = [
    {
      name: "Allyson Stairs",
      status: "active",
      label1: "Class",
      labeel2: "Primary 1",
    },
    {
      name: "Allyson Stairs",
      status: "active",
      label1: "Class",
      labeel2: "Primary 1",
    },
    {
      name: "Allyson Stairs",
      status: "active",
      label1: "Class",
      labeel2: "Primary 1",
    },
    {
      name: "Allyson Stairs",
      status: "active",
      label1: "Class",
      labeel2: "Primary 1",
    },
  ];
  const ListData = [
    {
      id: 1,
      label: "This is an example about my task",
    },
    {
      id: 2,
      label: "This is an example about my task",
    },
    {
      id: 3,
      label: "This is an example about my task",
    },
    {
      id: 4,
      label: "This is an example about my task",
    },
    {
      id: 5,
      label: "This is an example about my task",
    },
    {
      id: 6,
      label: "This is an example about my task",
    },
    {
      id: 7,
      label: "This is an example about my task",
    },
    {
      id: 8,
      label: "This is an example about my task",
    },
  ];

  useEffect(() => {
    setList([...ListData]);
    return () => {};
  }, []);


  const toggleModal=()=>{
    setOpen(!open);
  }

  const deleteItem = ({id}) => {
    const result = list.filter((t) => t.id !== id);
    setList(result);
  };

  const editItem = (id) => {
    const tempArr=list;
    let newEditItem = tempArr.filter((t)=> t.id === id)
     setItems(newEditItem[0])
     toggleModal();
  };
  const handleCheck=(id)=>{
    const tmp=list;
    const index=tmp.findIndex((l)=>l.id==id);
  }
  const handleUpdate=()=>{
    
  }
  return (
    <div
      className={` py-[8rem] lg:px-[10rem] px-[10px] ${isOpen ? "ml-[240px]" : ""}`}
    >
      <h2 className=" font-bold text-[22px] lg:pl-0 pl-[8px] leading-[24px] text-[#49454F]">
        Dashboard
      </h2>
      <div>
        <div className=" rounded-xl p-[16px] bg-[#FFFFFF] dash mt-5">
          <div>
            <h3 className="font-bold text-[22px] text-[#2C2E32] leading-[28px] ">
              Welcome, <span className="text-[#4AC384]">Allyson</span>{" "}
            </h3>
          </div>
          <div className="  grid grid-cols-1 mt-4  md:grid  md:grid-cols-2  lg:grid lg:grid-cols-4 gap-7">
            <div>
              <UserCard
                label="Total Active User"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="5,000"
              />
            </div>
            <div>
              <UserCard
                label="Total Users"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="20"
              />
            </div>
            <div>
              <UserCard
                label="Total Test"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="12"
              />
            </div>
            <div>
              <UserCard
                label="Total course"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="244"
              />
            </div>
            <div>
              <UserCard
                label="Total Ebooks"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="244"
              />
            </div>
            <div>
              <UserCard
                label="Total Practice"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="12"
              />
            </div>
          </div>
        </div>

        <div className=" rounded-xl p-[16px] bg-[#FFFFFF] dash mt-5">
          <div className=" flex justify-between Border  pb-[8px]">
            <div>
              <h3 className=" font-medium text-[18px] text-[#2C2E32] leading-[25px] ">
                Suport Tracker
              </h3>
            </div>
            <div>
              <Custombutton
                value="Filter"
                img={frame2}
                backgroundcolor="bg-[#F2F2F2]"
                textcolor="text-[#000000]"
                imagePosition="right"
              />{" "}
            </div>
          </div>
          <div className=" mt-4 lg:grid  md:grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            <div>
              <UserCard
                label="Total number of tickets"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="5,000"
              />
            </div>
            <div>
              <UserCard
                label="Total new tickets"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="20"
              />
            </div>
            <div>
              <UserCard
                label="Total opened tickets"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="12"
              />
            </div>
            <div>
              <UserCard
                label="Total Response Time"
                height="h-[105px]"
                backgroundcolor="bg-[#F2F2F2]"
                value="244 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" block md:grid  lg:grid grid-cols-2  gap-5">
        <div className="rounded-xl w-full p-[16px] bg-[#FFFFFF] dash mt-5">
          <div className=" flex justify-between Border  pb-[8px]">
            <div>
              <h3 className=" font-medium text-[18px] text-[#2C2E32] leading-[25px] ">
                Data or Stat
              </h3>
            </div>
            <div>
              <Custombutton
                value="Filter"
                img={frame2}
                backgroundcolor="bg-[#F2F2F2]"
                textcolor="text-[#000000]"
                imagePosition="right"
              />{" "}
            </div>
          </div>
          <div>
          <BarChart/>
          </div>
        </div>
        <div>
          <div className="rounded-xl w-full p-[12px] bg-[#FFFFFF] dash mt-5">
            <h3 className="font-meduim text-[18px] text-[#2C2E32] leading-[25px] Border pb-[15px] ">
              SignIn
            </h3>
            <div className=" block signIn lg:grid grid-cols-2  gap-5 mt-5">
              { showAllData ? data.map((item, key) => (
                <div
                  key={key}
                  className="rounded-lg border border-[#ECEDEE] box-shadow  "
                >
                  <div className="flex items-center gap-10 p-[14px]">
                    <div className="font-bold text-[14px] leading-[22px] text-[#2C2E32]">
                      {item.name}
                    </div>
                    <div className="">
                      <div className="flex items-center gap-4">
                        <div className=" font-medium text-[12px] leading-[15px] text-[#2C2E32]">
                          Status
                        </div>
                        <div className="bg-[#DBF3E6] rounded-2xl px-[5px] py-[2px]   font-normal text-[9px] leading-[8px] text-[#6ECF9D] ">
                          {item.status}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-[#FFF3D0] mt-[10px] px-[5px] py-[5px] rounded-2xl">
                        <div className=" font-medium text-[12px] leading-[15px] text-[#2C2E32]">
                          {item.label1}
                        </div>
                        <div className=" font-medium text-[12px] leading-[15px] text-[#2C2E32]">
                          {item.labeel2}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )): data.slice(0,2).map((item,key)=>(
                <div
                key={key}
                className="rounded-lg border border-[#ECEDEE] box-shadow  "
              >
                <div className="flex items-center gap-10 p-[14px]">
                  <div className="font-bold text-[14px] leading-[22px] text-[#2C2E32]">
                    {item.name}
                  </div>
                  <div className="">
                    <div className="flex items-center gap-4">
                      <div className=" font-medium text-[12px] leading-[15px] text-[#2C2E32]">
                        Status
                      </div>
                      <div className="bg-[#DBF3E6] rounded-2xl px-[5px] py-[2px]   font-normal text-[9px] leading-[8px] text-[#6ECF9D] ">
                        {item.status}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#FFF3D0] mt-[10px] px-[5px] py-[5px] rounded-2xl">
                      <div className=" font-medium text-[12px] leading-[15px] text-[#2C2E32]">
                        {item.label1}
                      </div>
                      <div className=" font-medium text-[12px] leading-[15px] text-[#2C2E32]">
                        {item.labeel2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
            </div>
            <div className="flex justify-center py-[20px]">
              <button className="bg-[#ECEDEE] text-[#000000] font-normal text-[14px] leading-[18px] mt-2 py-[6px] px-[19px] rounded-md" onClick={()=>setShowAllData(!showAllData)}>
                {showAllData ? "Show Less":"View All"}
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl w-full p-[12px] bg-[#FFFFFF] dash  lg:mt-0 mt-3">
          <h3 className="font-meduim text-[18px] text-[#2C2E32] leading-[25px] Border pb-[15px] ">
            Assigned tasks
          </h3>
          <div>
            <div className=" ">
               { showAllData? ListData.map((item) => (
                <div
                  className="flex items-center justify-between  gap-2 Border py-[10px] "
                  style={{
                    textDecoration: items === item.id ? "line-through" : "none",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className=" rounded-full text-[#4AC384]"
                    />
                    <p>{item.label}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={actions} onClick={() => deleteItem(item.id)} />
                    <img src={edit} onClick={() => setOpen(true)} />
                  </div>
                  {open && (
                <EditItemModal
                closeModal={()=> setOpen(false)}
                item={items}
                onEdit={handleUpdate}/>
              )}
                </div>
          
              )): ListData.slice(0,4).map((item,key)=>(
                <div
                className="flex items-center justify-between  gap-2 Border py-[10px] "
                style={{
                  textDecoration: items === item.id ? "line-through" : "none",
                }}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className=" rounded-full text-[#4AC384]"
                  />
                  <p>{item.label}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={actions} onClick={() => deleteItem(item.id)} />
                  <img src={edit} onClick={() => setOpen(true)} />
                </div>
                {open && (
              <EditItemModal
              closeModal={()=> setOpen(false)}
              item={items}
              onEdit={handleUpdate}/>
            )}
              </div>
        
              ))
              }
            </div>
            <div className="flex justify-center py-[20px]">
            <button className="bg-[#ECEDEE] text-[#000000] font-normal text-[14px] leading-[18px] mt-2 py-[6px] px-[19px] rounded-md" onClick={()=>setShowAllData(!showAllData)}>
                {showAllData ? "Show Less":"View All"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInList;
