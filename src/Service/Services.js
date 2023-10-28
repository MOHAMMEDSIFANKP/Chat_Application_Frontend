import { userAxiosInstant } from "../AxiosUtils/AxiosUtils";

// Chatting side List User
const UserList = (search) => {
    return userAxiosInstant.get(`chat/userlisting/?search=${search}`, {
      withCredentials: true,
    })
    .catch((error) => error.response);
  };
  // User Detil view
  const UserDetails = (id) => {
    return userAxiosInstant.get(`auth/userdetils/${id}/`, {
      withCredentials: true,
    })
    .catch((error) => error.response);
  };
export {UserList,UserDetails}