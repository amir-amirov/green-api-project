import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useApp } from "../../store/app";
import { useNavigate } from "react-router-dom";

type FormData = {
  id: number;
  token: string;
  phone: number;
};

const schema = z.object({
  id: z.number(),
  token: z.string(),
  phone: z.number(),
});

const Login = () => {
  const { setApp } = useApp();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log(data);
    setApp(data);
    reset();
    navigate("/chat");
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            gap: "20px",
          }}
        >
          <Typography variant="h4">Вход в чат</Typography>
          <form
            onSubmit={handleSubmit(submitData)}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <TextField
              {...register("id", { valueAsNumber: true })}
              error={!!errors.id}
              helperText={errors.id?.message}
              fullWidth
              label="Ваш ID"
              type="text"
            />
            <TextField
              {...register("token")}
              error={!!errors.token}
              helperText={errors.token?.message}
              fullWidth
              label="Ваш токен"
              type="text"
            />
            <TextField
              {...register("phone", { valueAsNumber: true })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              fullWidth
              label="Номер телефона WhatsApp собеседника"
              type="number"
            />
            <Button fullWidth variant="contained" color="primary" type="submit">
              Войти
            </Button>
          </form>
        </Box>
      </Container>
    </Container>
  );
};

export default Login;
