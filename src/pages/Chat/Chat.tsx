import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import {
  useDeleteFromQueueMutation,
  useGetMessagesQuery,
  useSendMessageMutation,
} from "../../services/RTKQuery/endpoints";
import { useEffect, useRef, useState } from "react";
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
  const [messages, setMessages] = useState<Message[]>([]);
  const timeoutRef = useRef<any>(null);
  const [sendMessage, { isLoading: isSending }] = useSendMessageMutation();
  const [deleteFromQueue] = useDeleteFromQueueMutation();
  const { data, refetch } = useGetMessagesQuery(
    {
      id: app.id,
      token: app.token,
    },
    { skip: !app.id || !app.token }
  );
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
    if (!app.id) return;
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
      // setTimeout(fetchNotifications, 1000);
      if (app.id) {
        timeoutRef.current = setTimeout(fetchNotifications, 1000);
      }
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (app.id) {
      fetchNotifications();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
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
