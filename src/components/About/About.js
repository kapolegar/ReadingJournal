import { Typography, Box } from "@mui/material";

function ReadingJournal() {
    return (
        <Box
            sx={{
                bgcolor: "white",
                height: "calc(100vh - 100px)",
                width: "95.5%",
                px: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Typography
                variant="h6"
                sx={{
                    fontFamily: "'Lora', serif",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: 2,
                }}>
                Sobre
            </Typography>
            <br></br>
            <Typography
                variant="body1"
                sx={{
                    fontFamily: "'Lora', serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    textAlign: "left",
                    width: "800px",
                    mt: 2,
                }}>
                O Reading Journal é um sistema simples e eficiente para gerenciar suas leituras. Com ele, você pode registrar livros que já leu, está lendo ou pretende ler no futuro.
            </Typography>
            <Typography
                component="div"
                sx={{
                    fontFamily: "'Lora', serif",
                    fontSize: "16px",
                    textAlign: "left",
                    width: "800px",
                    mt: 2,
                }}
            ><br></br>
                <strong>Funcionalidades:</strong>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
                    {[
                        "Adicionar livros com título, autor, gênero e data de cadastro",
                        "Listar os livros cadastrados",
                        "Excluir livros que não deseja mais manter no histórico",
                    ].map((text, index) => (
                        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <img src="/logo.png" alt="Ícone de livro" style={{ width: "30px", height: "auto" }} />
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: "'Lora', serif",
                                    fontSize: "16px",
                                    fontWeight: "normal",
                                }}
                            >
                                {text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Typography>
            <br></br>
            <Typography
                variant="body1"
                sx={{
                    fontFamily: "'Lora', serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    textAlign: "left",
                    width: "800px",
                    mt: 2,
                }}>
                <strong>Comece agora:</strong> cadastre um novo livro ou visualize sua lista na aba de navegação!
            </Typography>
        </Box>
    );
}

export default ReadingJournal;
