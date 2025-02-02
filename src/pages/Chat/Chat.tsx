// // import { Box, Button, Container, TextField, Typography } from "@mui/material";
// // import {
// //   useDeleteFromQueueMutation,
// //   useGetMessagesQuery,
// //   useSendMessageMutation,
// // } from "../../services/RTKQuery/endpoints";
// // import { useEffect, useState } from "react";
// // import { useApp } from "../../store/app";
// // import { useNavigate } from "react-router-dom";

// // interface Message {
// //   message: string;
// //   fromMe: boolean;
// // }

// // const Chat = () => {
// //   const { app, removeApp } = useApp();
// //   const [messages, setMessages] = useState<Message[]>([]);
// //   const [sendMessage, { isLoading }] = useSendMessageMutation();
// //   const [deleteFromQueue, { isLoading: isDeleting }] =
// //     useDeleteFromQueueMutation();
// //   const {
// //     data,
// //     isFetching,
// //     error: fetchError,
// //     refetch,
// //   } = useGetMessagesQuery({
// //     id: app.id,
// //     token: app.token,
// //   });
// //   const [text, setText] = useState<string>("");
// //   const [errorSending, setErrorSending] = useState<string>();

// //   const navigate = useNavigate();

// //   const handleSendMessage = async () => {
// //     if (text.length > 0) {
// //       setMessages([...messages, { message: text, fromMe: true }]);
// //       try {
// //         const response = await sendMessage({
// //           id: app.id,
// //           token: app.token,
// //           phone: app.phone,
// //           message: text,
// //         }).unwrap();

// //         console.log("This is response: ", response);
// //       } catch (error: any) {
// //         console.error(error);
// //         console.log("Error: ", error);
// //         setErrorSending(error?.data?.message);
// //         setMessages(messages.slice(0, -1));
// //       }
// //     }
// //   };

// //   const handleLogout = () => {
// //     removeApp();
// //     navigate("/");
// //   };

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       refetch();
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, [app.id, app.token, refetch]);

// //   useEffect(() => {
// //     if (
// //       data &&
// //       data.body &&
// //       data.body.typeWebhook === "incomingMessageReceived"
// //     ) {
// //       const newMessage = {
// //         message: data.body.messageData.textMessageData.textMessage,
// //         fromMe: false,
// //       };
// //       setMessages((prevMessages) => [...prevMessages, newMessage]);
// //       deleteFromQueue({
// //         id: app.id,
// //         token: app.token,
// //         receiptId: data.receiptId,
// //       });
// //     }
// //   }, [data, app.id, app.token, deleteFromQueue]);

// //   return (
// //     <Container
// //       maxWidth="sm"
// //       sx={{
// //         minHeight: "100dvh",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         flexDirection: "column",
// //         gap: "20px",
// //         position: "relative",
// //         boxSizing: "border-box",
// //         paddingY: "5px",
// //       }}
// //     >
// //       <Box sx={{ position: "absolute", top: 0, right: 0 }}>
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={() => handleLogout()}
// //         >
// //           Log out
// //         </Button>
// //       </Box>
// //       <Box
// //         sx={{
// //           display: "flex",
// //           gap: "5px",
// //           width: "100%",
// //           justifyContent: "space-between",
// //           marginTop: "auto",
// //           marginBottom: "5px",
// //         }}
// //       >
// //         <Box
// //           sx={{ display: "flex", flexDirection: "column-reverse", gap: "5px" }}
// //         >
// //           {messages &&
// //             messages.map((message, index) => (
// //               <Typography key={index}>{message.message}</Typography>
// //             ))}
// //         </Box>
// //         <TextField
// //           value={text}
// //           onChange={(e) => setText(e.target.value)}
// //           disabled={isLoading}
// //           label="Message"
// //           variant="outlined"
// //           fullWidth
// //           sx={{ flexBasis: "90%" }}
// //         />
// //         <Button
// //           fullWidth
// //           variant="contained"
// //           color="primary"
// //           onClick={() => handleSendMessage()}
// //           sx={{ flexBasis: "9%" }}
// //         >
// //           Send
// //         </Button>
// //       </Box>
// //       {errorSending && (
// //         <Typography variant="h3" color="error">
// //           Failed to send message
// //         </Typography>
// //       )}
// //       {isFetching && <Typography variant="h3">Fetching...</Typography>}
// //     </Container>
// //   );
// // };

// // export default Chat;
// import {
//   Box,
//   Button,
//   Container,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import {
//   useDeleteFromQueueMutation,
//   useGetMessagesQuery,
//   useSendMessageMutation,
// } from "../../services/RTKQuery/endpoints";
// import { useEffect, useState } from "react";
// import { useApp } from "../../store/app";
// import { useNavigate } from "react-router-dom";
// import background from "../../assets/images/background.png";
// import { palette } from "../../theme/palette";
// import MicrophoneIcon from "../../assets/icons/MicrophoneIcon";
// import { formattedTime } from "../../utils/formatTime";

// interface Message {
//   message: string;
//   fromMe: boolean;
//   time: any;
// }

// const Chat = () => {
//   const { app, removeApp } = useApp();
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       message: "Hello World!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Hi maaan!",
//       fromMe: true,
//       time: 1738504129,
//     },
//     {
//       message: "Howdy!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Cooool man!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Hate fucking coding!",
//       fromMe: true,
//       time: 1738504129,
//     },
//     {
//       message: "Hello World!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Hi maaan!",
//       fromMe: true,
//       time: 1738504129,
//     },
//     {
//       message: "Howdy!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Cooool man!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Hate fucking coding!",
//       fromMe: true,
//       time: 1738504129,
//     },
//     {
//       message: "Hello World!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Hi maaan!",
//       fromMe: true,
//       time: 1738504129,
//     },
//     {
//       message: "Howdy!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Cooool man!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Hate fucking coding!",
//       fromMe: true,
//       time: 1738504129,
//     },
//     {
//       message: "Hello World!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Hi maaan!",
//       fromMe: true,
//       time: 1738504129,
//     },
//     {
//       message: "Howdy!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Cooool man!",
//       fromMe: false,
//       time: 1738504129,
//     },
//     {
//       message: "Hate fucking coding!",
//       fromMe: true,
//       time: 1738504129,
//     },
//   ]);
//   const [sendMessage, { isLoading: isSending, error: sendingError }] =
//     useSendMessageMutation();
//   const [deleteFromQueue] = useDeleteFromQueueMutation();
//   const {
//     data,
//     isFetching,
//     error: fetchError,
//     refetch,
//   } = useGetMessagesQuery({
//     id: app.id,
//     token: app.token,
//   });
//   const [text, setText] = useState<string>("");
//   const [isPolling, setPolling] = useState<boolean>(true);

//   const navigate = useNavigate();

//   const handleSendMessage = async () => {
//     if (text.length > 0) {
//       setMessages([
//         { message: text, fromMe: true, time: Date.now() },
//         ...messages,
//       ]);
//       try {
//         const response = await sendMessage({
//           id: app.id,
//           token: app.token,
//           phone: app.phone,
//           message: text,
//         }).unwrap();

//         console.log("This is response: ", response);
//       } catch (error: any) {
//         console.error(error);
//         console.log("Error: ", error);
//         setMessages(messages.slice(0, -1));
//       }
//     }
//   };

//   const handleLogout = () => {
//     setPolling(false);
//     removeApp();
//     navigate("/");
//   };

//   // const fetchNotifications = async () => {
//   //   try {
//   //     console.log("Fetching...");
//   //     await refetch();
//   //     if (data) {
//   //       console.log("data: ", data);
//   //       const newMessage = {
//   //         message: data.body.messageData.textMessageData.textMessage,
//   //         fromMe: false,
//   //       };
//   //       setMessages((prev) => [...prev, newMessage]);

//   //       await deleteFromQueue({
//   //         id: app.id,
//   //         token: app.token,
//   //         receiptId: data.receiptId,
//   //       });
//   //     }
//   //     if (data === null) {
//   //       console.log("data: null");
//   //     }
//   //   } catch (err) {
//   //     console.error("Error fetching / deleting notifications:", err);
//   //     fetchError && console.log("Fetching error: ", fetchError);
//   //     deleteError && console.log("Deleting error: ", deleteError);
//   //   } finally {
//   //     fetchNotifications();
//   //   }
//   // };

//   const fetchNotifications = async () => {
//     try {
//       console.log("Fetching...");
//       const { data: newData } = await refetch(); // Wait for refetch to complete and get the updated data
//       if (newData) {
//         console.log("data: ", newData);
//         if (
//           newData.body &&
//           newData.body.typeWebhook === "incomingMessageReceived"
//         ) {
//           const newMessage = {
//             message: newData.body.messageData.textMessageData.textMessage,
//             fromMe: false,
//             time: newData.body.timestamp,
//           };
//           setMessages((prev) => [newMessage, ...prev]);
//         }
//         await deleteFromQueue({
//           id: app.id,
//           token: app.token,
//           receiptId: newData.receiptId,
//         });
//       } else {
//         console.log("data: null");
//       }
//     } catch (err) {
//       console.error("Error fetching / deleting notifications:", err);
//     } finally {
//       setTimeout(fetchNotifications, 1000);
//     }
//   };

//   const handleKeyPress = (event: any) => {
//     if (event.key === "Enter") {
//       handleSendMessage();
//     }
//   };

//   useEffect(() => {
//     // fetchNotifications();
//   }, []);

//   return (
//     <Container
//       maxWidth="md"
//       disableGutters
//       sx={{
//         marginY: 0,
//         paddingY: 0,
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         boxSizing: "border-box",
//       }}
//     >
//       <Box
//         sx={{
//           padding: 0,
//           margin: 0,
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           backgroundImage: `url(${background})`,
//           backgroundColor: "black", // fallback color
//           backgroundSize: "cover",
//         }}
//       >
//         <Box sx={{ marginBottom: "auto", marginLeft: "auto" }}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleLogout()}
//           >
//             Log out
//           </Button>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             width: "100%",
//             height: "100%",
//             justifyContent: "center",
//           }}
//         >
//           <Container
//             sx={{
//               // backgroundColor: "blue",
//               // display: "flex",
//               // flexDirection: "column-reverse",
//               // gap: "12px",
//               // paddingY: 2,
//               // overflowY: "hidden",
//               display: "flex",
//               flexDirection: "column-reverse", // This keeps the messages in reverse order
//               width: "100%",
//               flexGrow: 1, // Makes the container take up remaining space
//               overflowY: "auto", // Allows scrolling when the content exceeds the container height
//               paddingY: 2,
//             }}
//           >
//             {messages &&
//               messages.map((message, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     display: "inline-flex",
//                     justifyContent: message.fromMe ? "flex-end" : "flex-start",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       maxWidth: "70%",
//                       minWidth: "80px",
//                       display: "inline-flex",
//                       backgroundColor: message.fromMe
//                         ? palette.green
//                         : palette.darkGray,
//                       // gap: "5px",
//                       padding: 1,
//                       borderRadius: 1,
//                       flexDirection: "column",
//                     }}
//                   >
//                     <Typography
//                       key={index}
//                       color={palette.offWhite}
//                       textAlign={"start"}
//                       sx={{
//                         fontSize: "14.2px",
//                         lineHeight: "19px",
//                       }}
//                     >
//                       {message.message}
//                     </Typography>
//                     <Typography
//                       key={index}
//                       color={palette.lightGray}
//                       textAlign={"end"}
//                       sx={{
//                         fontSize: "11px",
//                         lineHeight: "15px",
//                       }}
//                     >
//                       {formattedTime(message.time)}
//                     </Typography>
//                   </Box>
//                 </Box>
//               ))}
//           </Container>
//           {/* <TextField
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             disabled={isSending}
//             label="Message"
//             variant="outlined"
//             fullWidth
//             sx={{ flexBasis: "90%" }}
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={() => handleSendMessage()}
//             sx={{ flexBasis: "9%" }}
//           >
//             Send
//           </Button> */}
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             paddingY: 1,
//             paddingX: 2,
//             backgroundColor: palette.darkGray,
//             gap: 1,
//             justifyContent: "space-around",
//             alignItems: "center",
//             boxSizing: "border-box",
//           }}
//         >
//           <TextField
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             disabled={isSending}
//             fullWidth
//             onKeyDown={handleKeyPress}
//             placeholder="Type a message"
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 backgroundColor: palette.mediumGray,
//                 borderRadius: "8px",
//                 borderColor: "none",
//                 borderWidth: 0,
//                 "& fieldset": {
//                   borderWidth: 0,
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderWidth: 0,
//                 },
//                 "& input": {
//                   color: palette.placeholderText,
//                   // fontFamily: "SFProRegular",
//                   fontSize: "15px",
//                   lineHeight: "22px",
//                   caretColor: palette.offWhite,

//                   "&::placeholder": {
//                     color: palette.placeholderText,
//                     // fontFamily: "SFProRegular",
//                     fontSize: "15px",
//                     lineHeight: "22px",
//                   },
//                 },
//               },
//             }}
//           />
//           <IconButton>
//             <MicrophoneIcon />
//           </IconButton>
//         </Box>
//       </Box>
//       {/* {isFetching && <Typography variant="h3">Fetching...</Typography>} */}
//     </Container>
//   );
// };

// export default Chat;

import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {
  useDeleteFromQueueMutation,
  useGetMessagesQuery,
  useSendMessageMutation,
} from "../../services/RTKQuery/endpoints";
import { useEffect, useState } from "react";
import { useApp } from "../../store/app";
import { useNavigate } from "react-router-dom";
import background from "../../assets/images/background.png";
import { palette } from "../../theme/palette";
import MicrophoneIcon from "../../assets/icons/MicrophoneIcon";
import { formattedTime } from "../../utils/formatTime";
import WhatsappIcons from "../../assets/icons/WhatsappIcons";
import SendSharpIcon from "@mui/icons-material/SendSharp";

interface Message {
  message: string;
  fromMe: boolean;
  time: any;
}

const Chat = () => {
  const { app, removeApp } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    // {
    //   message: "Hello World!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hi maaan!",
    //   fromMe: true,
    //   time: 1738504129,
    // },
    // {
    //   message: "Howdy!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Cooool man!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hate fucking coding!",
    //   fromMe: true,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hello World!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hi maaan!",
    //   fromMe: true,
    //   time: 1738504129,
    // },
    // {
    //   message: "Howdy!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Cooool man!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hate fucking coding!",
    //   fromMe: true,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hello World!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hi maaan!",
    //   fromMe: true,
    //   time: 1738504129,
    // },
    // {
    //   message: "Howdy!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Cooool man!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hate fucking coding!",
    //   fromMe: true,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hello World!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hi maaan!",
    //   fromMe: true,
    //   time: 1738504129,
    // },
    // {
    //   message: "Howdy!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Cooool man!",
    //   fromMe: false,
    //   time: 1738504129,
    // },
    // {
    //   message: "Hate fucking coding!",
    //   fromMe: true,
    //   time: 1738504129,
    // },
  ]);
  const [sendMessage, { isLoading: isSending }] = useSendMessageMutation();
  const [deleteFromQueue] = useDeleteFromQueueMutation();
  const { data, refetch } = useGetMessagesQuery({
    id: app.id,
    token: app.token,
  });
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const handleSendMessage = async () => {
    if (text.length > 0) {
      setMessages([
        { message: text, fromMe: true, time: Date.now() },
        ...messages,
      ]);
      try {
        await sendMessage({
          id: app.id,
          token: app.token,
          phone: app.phone,
          message: text,
        }).unwrap();
      } catch (error: any) {
        console.error(error);
        setMessages(messages.slice(0, -1)); // remove last message if failed
      }
      setText("");
    }
  };

  const handleLogout = () => {
    removeApp();
    navigate("/");
  };

  const fetchNotifications = async () => {
    try {
      console.log("Fetching...");
      const { data: newData } = await refetch(); // Wait for refetch to complete and get the updated data
      if (newData) {
        console.log("data: ", newData);
        if (
          newData.body &&
          newData.body.typeWebhook === "incomingMessageReceived"
        ) {
          const newMessage = {
            message: newData.body.messageData.textMessageData.textMessage,
            fromMe: false,
            time: newData.body.timestamp,
          };
          setMessages((prev) => [newMessage, ...prev]);
        }
        await deleteFromQueue({
          id: app.id,
          token: app.token,
          receiptId: newData.receiptId,
        });
      } else {
        console.log("data: null");
      }
    } catch (err) {
      console.error("Error fetching / deleting notifications:", err);
    } finally {
      setTimeout(fetchNotifications, 1000);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${background})`,
        // optional fallback color:
        backgroundColor: "#000",
        backgroundSize: "cover",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", bgcolor: palette.darkGray, p: 2 }}>
        <WhatsappIcons />

        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            sx={{ background: palette.green }}
            onClick={handleLogout}
          >
            Log out
          </Button>
        </Box>
      </Box>

      {/* Message list container */}
      <Box
        sx={{
          flex: 1, // allow this to fill remaining space
          display: "flex",
          flexDirection: "column-reverse", // messages from bottom to top
          overflowY: "auto", // scroll when messages overflow
          p: 2,
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: message.fromMe ? "flex-end" : "flex-start",
              mb: 1,
            }}
          >
            <Box
              sx={{
                maxWidth: "70%",
                minWidth: "80px",
                backgroundColor: message.fromMe
                  ? palette.green
                  : palette.darkGray,
                p: 1,
                borderRadius: 1,
              }}
            >
              <Typography
                color={palette.offWhite}
                sx={{ fontSize: "14.2px", lineHeight: "19px" }}
              >
                {message.message}
              </Typography>
              <Typography
                color={palette.lightGray}
                textAlign="end"
                sx={{ fontSize: "11px", lineHeight: "15px" }}
              >
                {formattedTime(message.time)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Footer / Input */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 1,
          backgroundColor: palette.darkGray,
        }}
      >
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isSending}
          fullWidth
          onKeyDown={handleKeyPress}
          placeholder="Type a message"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: palette.mediumGray,
              borderRadius: "8px",
              "& fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
              "& input": {
                color: palette.placeholderText,
                fontSize: "15px",
                lineHeight: "22px",
                caretColor: palette.offWhite,
                "&::placeholder": {
                  color: palette.placeholderText,
                },
              },
            },
          }}
        />
        <IconButton
          onClick={() => {
            text.length > 0 && handleSendMessage();
          }}
        >
          {text.length > 0 ? (
            <SendSharpIcon sx={{ color: palette.offWhite }} />
          ) : (
            <MicrophoneIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chat;
