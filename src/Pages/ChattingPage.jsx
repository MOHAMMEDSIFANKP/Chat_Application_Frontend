import React, { useEffect, useState } from "react";
import ChattingSide from "../Components/Chat/ChattingSide";
import { Logout, UserList } from "../Service/Services";
import DefaultProfileImg from "../assets/DefaultProfileImg.avif";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutDetails } from "../Redux/UserSlice";

function ChattingPage() {
  const location = useLocation();
  const user_id = location.state && location.state.user_id;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { UserInfo} = useSelector((state) => state.user);
  const [Search, setSearch] = useState("");
  const [Reciever, setReciever] = useState();
  const [SearchList, setSearchList] = useState();

  // Logout
  const LogOutBtn = async () =>{
    try {
      const res = await Logout()
    //  console.log(res);
      // if (res.status)
    } catch (error) {
      console.log(error,'daxooo');
    }
    // localStorage.removeItem('token')
    // dispatch(LogoutDetails())
    // navigate('/login')
  }
  // For searching
  const HandleSearch = async (e) => {
    const search = e.target.value;
    setSearch(search);
    const res = await UserList(search,UserInfo.id);
    if (res.status === 200) {
      setSearchList(res.data);
    }
  };
  const UsersLists = async () => {
    try {
      const res = await UserList("",user_id?user_id:UserInfo.id);
      if (res.status === 200) {
        setSearchList(res.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    document.title = "Chat page";
    UsersLists();
  }, []);
  return (
    <div className="grid w-full h-screen xl:grid-cols-[22rem,1fr] md:grid-cols-[18rem,1fr]">
      <div className="border my-2 rounded-xl ms-2 grid grid-rows-[5rem,4rem,1fr] px-6">
        <div className="flex items-center justify-between">
          <p className="font-bold text-3xl">Chats</p>
          <div className="cursor-pointer">
            <Menu placement="bottom-end">
              <MenuHandler>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </MenuHandler>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={LogOutBtn}>Log out</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-gray-100 w-full grid grid-cols-[2rem,1fr,2rem] rounded-2xl py-2">
            <div className="flex justify-center items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div>
              {" "}
              <input
                placeholder="Search"
                type="text"
                value={Search}
                onChange={HandleSearch}
                className="bg-transparent  w-full text-gray-800 placeholder-gray-700 text-sm focus:outline-none"
              />
            </div>
            <div>
              {Search ? (
                <svg
                  onClick={() => {
                    UsersLists(), setSearch("");
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div>
          {SearchList ? (
            SearchList.map((list, index) => (
              <div
                key={index}
                className="cursor-pointer grid grid-cols-[3rem,1fr,2rem] hover:bg-gray-200 hover:rounded-2xl px-2 py-1"
                onClick={() =>
                  setReciever({
                    email: list.email,
                    id: list.id,
                    profile_image: list.profile_image,
                    first_name: list.first_name,
                    last_name: list.last_name,
                  })
                }
              >
                <div className="w-full h-ful rounded-full">
                  <img
                    src={
                      list?.profile_image === null
                        ? DefaultProfileImg
                        : list?.profile_image
                    }
                    className="rounded-full h-11 w-11"
                    alt={`Profile of ${list?.first_name}`}
                  />
                </div>
                <div className="ms-2 text-sm flex items-center">
                  <div>
                    <p className="font-bold text-gray-900 capitalize">
                      {list?.first_name} {list?.last_name}
                    </p>
                    <p>{list?.lastMessage}</p>
                  </div>
                </div>
                <div>fd</div>
              </div>
            ))
          ) : (
            <p>No search results found.</p>
          )}
        </div>
      </div>
      <div className="border my-2 me-2 rounded-xl">
        <ChattingSide Reciever={Reciever} />
      </div>
    </div>
  );
}

export default ChattingPage;
