import { userAxiosInstant } from "../AxiosUtils/AxiosUtils";

// Chatting side List User
const UserList = (search, id) => {
  return userAxiosInstant
    .get(`chat/userlisting/${id}/?search=${search}`, {
      withCredentials: true,
    })
    .catch((error) => {
      if (error.response.status === 401) {
        RefreshToken();
      } else {
        error.response;
      }
    });
};

const RefreshToken = async () => {
  let authToken = localStorage.getItem("token");
  const refreshtoken = JSON.parse(authToken);
  const res = await userAxiosInstant.post(
    "auth/token/refresh/",
    { refresh: refreshtoken.refresh },
    { withCredentials: true }
  );
  if (res.status === 200) {
    const token = JSON.stringify(res.data);
    localStorage.setItem("token", token);
  }
};
// User Detil view
const UserDetails = (id) => {
  return userAxiosInstant
    .get(`auth/userdetils/${id}/`, {
      withCredentials: true,
    })
    .catch((error) => {
      if (error.response.status === 401) {
        RefreshToken();
      } else {
        error.response;
      }
    });
};
// User Chat History
const ChatHistory = (senderdetails,recipientdetails) => {
  return userAxiosInstant
    .get( `chat/user-previous-chats/${senderdetails}/${recipientdetails}/`, {
      withCredentials: true,
    })
    .catch((error) => {
      if (error.response.status === 401) {
        RefreshToken();
      } else {
        error.response;
      }
    });
};

export { UserList, UserDetails ,ChatHistory};
