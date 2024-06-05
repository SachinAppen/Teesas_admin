import { loginAsync, loginResponse } from '../../apis/slices/authSlice';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validation';

function Login() {

    // const router = useRouter();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const[error,setError]=useState({});
    const userLoginResponse = useSelector(loginResponse);
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      password: ''
  });
  
  const handlechange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    
   
};

    useEffect(()=>{

    },[]);

    const SubmitSigninAction = () => {
      console.log("formdata",formData)
         setError(Validation(formData))
      
        
          const FinalData = {
            email: formData.email,
            password: formData.password,
           
          };
          // validateUsername
          //   ? (FinalData.email = data?.userName)
          //   : (FinalData.phoneNumber = data?.userName);
          // FinalData.device = '1';
          loginAsync({
            dispatch: dispatch,
            body: FinalData,
            callbackFn: (res) => {
              if (res?.data?.status === 200) {
                const data = res?.data?.data?.user?.[0];
                const username = data?.firstName + ' ' + data?.lastName;
                localStorage.setItem('authToken', res?.data?.data?.user?.token);
                navigate('/home/users')
                console.log("dataa",res?.data?.data?.user?.token)

                setLoading(false);
              } else {
                toast.error(res?.data?.message);
                setLoading(false);
              }
            },
          });
        // }
      };

  return (
    <>
      <div className="p-8 flex justify-center items-center flex-col cursor-pointer ">
        <div className=" w-full h-full text-[20px] text-start font-[500]">
          Sign In
        </div>

        <div className="mt-5 flex justify-center items-center">
          <img
            src="src/assets/svg/edo-best.svg"
            className="w-[130px] h-[40px]"
            alt="Logo"
          />
        </div>

        <div className="mt-[100px] border-[#C3C3C3] border bg-[#FFFFFF] max-w-[500px] p-10 rounded-3xl">
          <div className="text-[30px] text-start font-bold ">Sign In</div>
          <div className="mt-2 text-[15px] pr-10 text-[#313957]">
            Today is a new day. It's your day. You shape it. Sign in to start
            managing your projects.
          </div>

          <div className="text-[12px] text-[#3D3D3D] mt-10">Email</div> <input type="text" name='email' value={formData.email} className="w-full mt-1 bg-[#F8F8F8] text-[14px] border p-2 border-[#D9D9D9] h-[40px] rounded-lg" placeholder="Enter Details" onChange={handlechange}/>
  
         
          {error.email && <div className=" text-red-500">{error.email}</div>}
       
          <div className="text-[12px] text-[#3D3D3D] mt-5">Password</div>
          <input type="text" name='password' value={formData.password}  className="w-full mt-1 bg-[#F8F8F8] text-[14px] border p-2 border-[#D9D9D9] h-[40px] rounded-lg" placeholder="Enter Details" onChange={handlechange}/>
          <Link to="/forgot-password">
          <div className="flex items-center justify-end text-[12px] mt-2 cursor-pointer text-[#3D3D3D]">Forgot Password?</div>
          </Link>
          {error.password && <div className=" text-red-500">{error.password}</div>}
       
          
          <button type="button" onClick={()=>{
            SubmitSigninAction()
          }}    className={`mt-[20px] bg-[#F2994A] text-[14px] flex items-center justify-center text-[#FFFFFF] w-full p-2 rounded-lg`}
           >
          Sign In
       
          </button>
          </div>
      </div>
    </>
  );
}

export default Login;
