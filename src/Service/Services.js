import { userAxiosInstant } from "../AxiosUtils/AxiosUtils";

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

export { Logout, UserList, UserDetails, ChatHistory };
