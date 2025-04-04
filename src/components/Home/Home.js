import { Typography, Box } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "calc(100vh - 132px)",
        px: 2,
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Lora', serif",
          fontSize: "18px",
          fontWeight: "normal",
          textAlign: "left",
          maxWidth: "600px",
        }}
      >
        <p>Olá! Seja bem-vindo(a) ao <strong>Reading Journal!</strong></p>
        <p>Navegue na aba acima para visualizar a sua lista de livros ou cadastrar uma nova leitura.</p>
      </Typography>

      <img src="/logo2.png" alt="Logo2" style={{ width: "500px", height: "auto" }} />
    </Box>
  );
}

export default Home;
