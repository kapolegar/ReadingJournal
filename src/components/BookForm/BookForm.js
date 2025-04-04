import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import axios from "axios";
import { TextField, Button, Typography, Box } from "@mui/material";

dayjs.locale("pt-br");

function BookForm({ bookData = null }) {
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: bookData?.title || "",
        author: bookData?.author || "",
        genre: bookData?.genre || "",
        readAt: bookData?.readAt ? dayjs(bookData.readAt, "YYYY-MM-DD") : null,
    });

    useEffect(() => {
        if (bookData) {
            setBook({
                title: bookData.title,
                author: bookData.author,
                genre: bookData.genre,
                readAt: bookData.readAt ? dayjs(bookData.readAt) : null,
            });
        }
    }, [bookData]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedBook = {
            id: bookData?.id,
            title: book.title,
            author: book.author,
            genre: book.genre,
            readAt: book.readAt ? dayjs(book.readAt).format("YYYY-MM-DD") : ""
        };

        try {
            if (bookData) {
                await axios.put("http://localhost:5000/books/", formattedBook);
            } else {
                await axios.post("http://localhost:5000/books", formattedBook);
            }
            navigate("/books");
        } catch (error) {
            console.error("Erro ao salvar o livro:", error);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                bgcolor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                marginTop: "50px"
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "'Lora', serif",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "start",
                    px: 2,
                    marginBottom: "20px"
                }}
                gutterBottom
            >
                {bookData ? "Editar Leitura" : "Cadastrar Leitura"}
            </Typography>

            <TextField
                label="Título"
                name="title"
                value={book.title}
                required
                onChange={handleChange}
                sx={{ width: "500px", marginBottom: "16px" }}
                InputProps={{ sx: { fontFamily: "'Lora', serif", fontSize: "14px" } }}
                InputLabelProps={{ sx: { fontFamily: "'Lora', serif", fontSize: "14px" } }}
            />

            <TextField
                label="Autor"
                name="author"
                value={book.author}
                required
                onChange={handleChange}
                sx={{ width: "500px", marginBottom: "16px" }}
                InputProps={{ sx: { fontFamily: "'Lora', serif", fontSize: "14px" } }}
                InputLabelProps={{ sx: { fontFamily: "'Lora', serif", fontSize: "14px" } }}
            />

            <TextField
                label="Gênero"
                name="genre"
                value={book.genre}
                required
                onChange={handleChange}
                sx={{ width: "500px", marginBottom: "16px" }}
                InputProps={{ sx: { fontFamily: "'Lora', serif", fontSize: "14px" } }}
                InputLabelProps={{ sx: { fontFamily: "'Lora', serif", fontSize: "14px" } }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                <DatePicker
                    label="Data da Leitura"
                    value={book.readAt ? dayjs(book.readAt, "YYYY-MM-DD") : null}
                    onChange={(newValue) =>
                        setBook({ ...book, readAt: newValue ? dayjs(newValue).format("YYYY-MM-DD") : null })
                    }
                    format="DD/MM/YYYY"
                    slotProps={{
                        textField: {
                            sx: {
                                width: "500px",
                                marginBottom: "24px",
                                fontFamily: "'Lora', serif"
                            },
                            InputProps: {
                                sx: { fontFamily: "'Lora', serif", fontSize: "14px" }
                            },
                            InputLabelProps: {  // Estiliza o label
                                sx: { fontFamily: "'Lora', serif", fontSize: "14px" }
                            }
                        }
                    }}
                />
            </LocalizationProvider>
            <div style={{ display: "flex", justifyContent: "space-evenly", gap: "16px", marginTop: "20px" }}>
                <Button
                    sx={{
                        backgroundColor: "#282c34",
                        color: "white",
                        fontFamily: "'Lora', serif",
                        fontWeight: "bold",
                        fontSize: "14px",
                        paddingX: "25px",
                        paddingY: "15px",
                        "&:hover": { backgroundColor: "#4fa3d1" }
                    }}
                    type="button"
                    onClick={() => navigate("/books")}
                    variant="contained"
                >
                    Cancelar
                </Button>
                <Button
                    sx={{
                        backgroundColor: "#282c34",
                        color: "white",
                        fontFamily: "'Lora', serif",
                        fontWeight: "bold",
                        fontSize: "14px",
                        paddingX: "25px",
                        paddingY: "15px",
                        "&:hover": { backgroundColor: "#4fa3d1" }
                    }}
                    type="submit"
                    variant="contained"
                >
                    {bookData ? "Salvar Alterações" : "Adicionar"}
                </Button>
            </div>
        </Box>
    );
}

export default BookForm;
