import React, { useEffect, useRef, useState } from "react";
import ConnectToPeople from "../../assets/ConnectToPeople.avif";
import DefaultProfileImg from "../../assets/DefaultProfileImg.avif";
import { useSelector } from "react-redux";
import { UserDetails } from "../../Service/Services";
import { userAxiosInstant } from "../../AxiosUtils/AxiosUtils";
import { wsApiUrl } from "../../constants/constants";
import { w3cwebsocket as W3CWebSocket } from "websocket";

function ChattingSide({ Reciever }) {
  const { UserInfo} = useSelector((state) => state.user);
  const [senderdetails, setsenderdetails] = useState(UserInfo);
  const [recipientdetails, setrecipientdetails] = useState();
  const [clientstate, setClientState] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = useRef();
  const onButtonClicked = () => {
    if (messageRef.current.value.trim() == "") {
      return;
    }
    clientstate.send(
      JSON.stringify({
        message: messageRef.current.value,
        senderUsername: senderdetails.email,
        receiverUsername: recipientdetails.email,
      })
    );
    messageRef.current.value = "";
  };

  const setUpChat = () => {
    userAxiosInstant
      .get(
        `chat/user-previous-chats/${senderdetails.id}/${recipientdetails.id}/`
      )
      .then((response) => {
        if (response.status == 200) {
          setMessages(response.data);
        }
      });
    const client = new W3CWebSocket(
      `${wsApiUrl}/ws/chat/${senderdetails.id}/?${recipientdetails.id}`
    );
    setClientState(client);
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log(dataFromServer,'daxooo');
      if (dataFromServer) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            message: dataFromServer.message,
            sender_email: dataFromServer.senderUsername,
          },
        ]);
      }
    };

    client.onclose = () => {
      console.log("Websocket disconnected", event.reason);
    };

    return () => {
      client.close();
    };
  };

  useEffect(() => {
    if (senderdetails.id != null && recipientdetails?.id != null) {
      setUpChat();
    }
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [senderdetails, recipientdetails?.id]);


  const recieverData = async () =>{
    try {
      const res = await UserDetails(Reciever.id)
      setrecipientdetails(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    recieverData()
  },[Reciever?.id])

  // Chating
  return (

    <>
      {!Reciever ? (
        <div className="h-screen grid grid-rows-[9rem,1fr]">
          <div className="flex justify-center items-end text-3xl text-gray-800 font-bold">
            <p>Connect To People</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={ConnectToPeople} alt="" />
          </div>
        </div>
      ) : (
        <div className="h-full grid grid-rows-[4rem,1fr,4rem]">
          <div className="grid grid-cols-[4rem,1fr,5rem] px-3 border-b">
            <div className="w-full flex justify-center items-center h-ful rounded-full">
              <img
                src={
                  Reciever?.profile_image === null
                    ? DefaultProfileImg
                    : Reciever?.profile_image
                }
                className="rounded-full h-11 w-11"
                alt={`Profile of ${Reciever?.first_name}`}
              />
            </div>
            <div className="flex items-center ps-2 font-bold text-gray-800 capitalize">
              <p>
                {Reciever.first_name} {Reciever.last_name}
              </p>
            </div>
            <div className="flex justify-between items-center">
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
            </div>
          </div>
          <div class="p-4 overflow-auto h-[44.4rem]">
          {messages.map((message, index) =>
                    senderdetails.email === message.sender_email? (
                      <>
                        <div class="flex justify-end mb-2" key={index}>
                          <div class="bg-purple-50 shadow border text-gray-800 py-1 px-4 rounded-md max-w-xs">
                            {message.message}
                          </div>
                          <div className="rounded-full flex justify-center items-center -me-3 ms-1 w-7 h-7 ">
                            <img
                              src={
                                senderdetails.profile_image
                                  ? senderdetails.profile_image
                                  : DefaultProfileImg
                              }
                              alt=""
                              className="rounded-full w-5 h-5"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div class="flex mb-2" key={index}>
                          <div className="rounded-full flex justify-center items-center -ms-4 me-1 w-7 h-7 ">
                            <img
                              src={
                                recipientdetails.profile_image
                                  ? recipientdetails.profile_image
                                  : DefaultProfileImg
                              }
                              alt=""
                              className="rounded-full w-5 h-5"
                            />
                          </div>
                          <div class="shadow py-1 px-4 rounded-md max-w-xs">
                            {message.message}
                          </div>
                        </div>
                      </>
                    )
                  )}
          </div>
          <div className="grid grid-cols-[3rem,1fr,3rem] border-t">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 opacity-70"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center rounded-xl">
              <input
              ref={messageRef}
                placeholder="Search"
                type="text"
                className="border bg-gray-200 p-2 rounded-2xl w-full text-gray-800 placeholder-gray-700 text-sm focus:outline-none"
              />
            </div>
            <div className="flex justify-center items-center">
              <svg
              onClick={onButtonClicked}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 opacity-70"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChattingSide;
