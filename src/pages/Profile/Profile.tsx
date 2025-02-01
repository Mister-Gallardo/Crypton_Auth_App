import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthProfileWrapper from "../../shared/ui/AuthProfileWrapper";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyIcon from "@mui/icons-material/Key";
import { getUser } from "./model/getUser";

const Profile: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    (async function () {
      try {
        const resp = await getUser();
        setEmail(resp.email);
        setId(resp.id);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const theme = useTheme();
  const color = theme.palette.mode === "dark" ? "#f0f0f0" : "#333333";

  const handleLeave = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthProfileWrapper>
      <Typography sx={{ fontWeight: "700", marginBottom: 4 }} variant="h4">
        Профиль
      </Typography>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 50,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: {
                xs: "90%",
                sm: "75%",
              },
              padding: "8px 12px",
              border: "1px solid",
              borderColor: color,
              borderRadius: "10px",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <MailOutlineIcon sx={{ marginTop: "6px", fontSize: 20 }} />
              <Typography
                variant="h5"
                sx={{ alignSelf: "start", marginBottom: 0.5 }}
              >
                Ваш Email
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: "700", marginTop: 1 }}>
              {email}
            </Typography>
          </Box>

          <Box
            sx={{
              width: {
                xs: "90%",
                sm: "75%",
              },
              padding: "8px 12px",
              border: "1px solid",
              borderColor: color,
              borderRadius: "10px",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <KeyIcon sx={{ marginTop: "6px", fontSize: 20 }} />
              <Typography
                variant="h5"
                sx={{ alignSelf: "start", marginBottom: 0.5 }}
              >
                Ваш Id
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: "700", marginTop: 1 }}>
              {id}
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={handleLeave}
          variant="outlined"
          size="large"
          sx={{
            fontSize: 18,
            borderColor: color,
            color: color,
            width: { xs: "90%", sm: "75%" },
          }}
        >
          Выйти
        </Button>
      </Box>
    </AuthProfileWrapper>
  );
});

export default Profile;
