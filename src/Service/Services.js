import { userAxiosInstant } from "../AxiosUtils/AxiosUtils";

// ----------------------------------------POST--------------------------------------//
// Logout
const Logout = () => {
  let authToken = localStorage.getItem("token");
  const refreshtoken = JSON.parse(authToken);
  return userAxiosInstant
    .post('auth/logout/', { refresh: refreshtoken.refresh }, {
      withCredentials: true,
    })
    .catch((error) => {
      error.response;
    });
};

const CreateRequst = (values) => {
  return userAxiosInstant
    .post('chat/connect/',values, {
      withCredentials: true,
    })
    .catch((error) => {
      error.response;
    });
};
const AcceptRequest = (values) => {
  return userAxiosInstant
    .post('chat/accepted/',values, {
      withCredentials: true,
    })
    .catch((error) => {
      error.response;
    });
};
const RemoveRequest = (values) => {
  return userAxiosInstant
    .post('chat/remove/',values, {
      withCredentials: true,
    })
    .catch((error) => {
      error.response;
    });
};
// ----------------------------------------GET--------------------------------------//
// Chatting side List User
const UserList = (search, id) => {
  return userAxiosInstant
    .get(`chat/userlisting/${id}/?search=${search}`, {
      withCredentials: true,
    })
    .catch((error) => {
      error.response;
    });
};

const AllUserList = (id,selectedOption) => {
  return userAxiosInstant
    .get(`chat/all-user-list/${id}/?selectoption=${selectedOption}`, {
      withCredentials: true,
    })
    .catch((error) => {
      error.response;
    });
};


// User Detil view
const UserDetails = (id) => {
  return userAxiosInstant
    .get(`auth/userdetils/${id}/`, {
      withCredentials: true,
    })
    .catch((error) => {
      error.response;
    });
};

// User Details For Frinds Lising
const UserDetailsAndFriends = (id,view_id) => {
  return userAxiosInstant
    .get(`chat/user-details/${id}/${view_id}`, {
      withCredentials: true,
    })
    .catch((error) => {
      error.response;
    });
};
// User Chat History
const ChatHistory = (senderdetails, recipientdetails) => {
  return userAxiosInstant
    .get(`chat/user-previous-chats/${senderdetails}/${recipientdetails}/`, {
      withCredentials: true,
    })
    .catch((error) => {
      error.response;
    });
};

// ----------------------------------------PUT/PATCH--------------------------------------//


export { Logout, UserList, UserDetails, ChatHistory ,AllUserList,UserDetailsAndFriends,CreateRequst,AcceptRequest,RemoveRequest};
