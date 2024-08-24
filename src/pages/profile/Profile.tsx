import { Grid, Stack, Typography } from "@mui/material";
import { ProtectedProvider } from "@contexts/ProtectedProvider";

const Profile = () => {
  return (
    <ProtectedProvider>
      <Stack direction="row">
        <Stack
          sx={{
            gap: "16px",
            overflow: "auto",
            background: "#F6F5FB",
            paddingY: "36px",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              lineHeight: "1.2em",
              fontWeight: "semibold",
              color: "black",
              marginX: "auto",
              width: "100%",
              maxWidth: "818px",
            }}
          >
            Perfil
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography
                sx={{
                  fontSize: "32px",
                  lineHeight: "1.2em",
                  fontWeight: "semibold",
                  color: "black",
                  marginX: "auto",
                  width: "100%",
                  maxWidth: "818px",
                }}
              >
                Nome
              </Typography>
            </Grid>

            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "1.2em",
                fontWeight: "semibold",
                color: "black",
                marginX: "auto",
                width: "100%",
                maxWidth: "818px",
              }}
            >
              Data de nascimento
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "1.2em",
                fontWeight: "semibold",
                color: "black",
                marginX: "auto",
                width: "100%",
                maxWidth: "818px",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "1.2em",
                fontWeight: "semibold",
                color: "black",
                marginX: "auto",
                width: "100%",
                maxWidth: "818px",
              }}
            >
              Cidade
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "1.2em",
                fontWeight: "semibold",
                color: "black",
                marginX: "auto",
                width: "100%",
                maxWidth: "818px",
              }}
            >
              Instituição
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "1.2em",
                fontWeight: "semibold",
                color: "black",
                marginX: "auto",
                width: "100%",
                maxWidth: "818px",
              }}
            >
              Cargo
            </Typography>
          </Grid>
        </Stack>
      </Stack>
    </ProtectedProvider>
  );
};

export default Profile;
