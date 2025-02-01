import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useSendMessageMutation } from "../../services/RTKQuery/endpoints";
import { useState } from "react";
import { useApp } from "../../store/app";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const [text, setText] = useState<string>("");
  const [errorSending, setErrorSending] = useState<string>();

  const { app, removeApp } = useApp();
  const navigate = useNavigate();

  const handleSendMessage = async () => {
    if (text.length > 0) {
      try {
        const response = await sendMessage({
          id: app.id,
          token: app.token,
          phone: app.phone,
          message: text,
        }).unwrap();

        console.log("This is response: ", response);
      } catch (error: any) {
        console.error(error);
        console.log("Error: ", error);
        setErrorSending(error?.data?.message);
      }
    }
  };

  const handleLogout = () => {
    removeApp();
    navigate("/");
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        position: "relative",
        boxSizing: "border-box",
        paddingY: "5px",
      }}
    >
      <Box sx={{ position: "absolute", top: 0, right: 0 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleLogout()}
        >
          Log out{" "}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "auto",
          marginBottom: "5px",
        }}
      >
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isLoading}
          label="Message"
          variant="outlined"
          fullWidth
          sx={{ flexBasis: "90%" }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => handleSendMessage()}
          sx={{ flexBasis: "9%" }}
        >
          Send
        </Button>
      </Box>
      {errorSending && (
        <Typography variant="h3" color="error">
          Failed to send message
        </Typography>
      )}
    </Container>
  );
};

export default Chat;
