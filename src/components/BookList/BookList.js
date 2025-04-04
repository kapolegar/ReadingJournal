import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Grid, Card, CardContent, Typography, IconButton, CircularProgress, Paper } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import * as ReactRouterDOM from "react-router-dom";
const { Link } = ReactRouterDOM;

function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:5000/books")
            .then((response) => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar livros:", error);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/books/${id}`);
            setBooks(books.filter((book) => book.id !== id));
        } catch (error) {
            console.error("Erro ao excluir livro:", error);
        }
    };

    if (loading) return <CircularProgress sx={{ display: "block", margin: "20px auto" }} />;

    return (
        <Paper sx={{ padding: 3, backgroundColor: "#f9f9f9" }}>
            <Typography
                variant="h6"
                sx={{
                    fontFamily: "'Lora', serif",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: 2,
                }}>
                Lista de Livros
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                        <Card
                            sx={{
                                width: 400,
                                boxShadow: 0,
                                borderRadius: 2,
                                border: "1px solid black",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: "'Lora', serif",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        py: 2
                                    }}>
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    fontFamily: "'Lora', serif",
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    textAlign: "start",
                                    px: 2,
                                    py: 1
                                }}>
                                    <strong>Autor (a):</strong> {book.author}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    fontFamily: "'Lora', serif",
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    textAlign: "start",
                                    px: 2,
                                    py: 1
                                }}>
                                    <strong>Gênero:</strong> {book.genre}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    fontFamily: "'Lora', serif",
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    textAlign: "start",
                                    px: 2,
                                }}>
                                    <strong>Lido em:</strong> {book.readAt && dayjs(book.readAt, "YYYY/MM/DD").isValid()
                                        ? dayjs(book.readAt, "YYYY/MM/DD").format("DD/MM/YYYY")
                                        : "Data não informada"}

                                </Typography>
                                <Grid container justifyContent="flex-end" sx={{ marginTop: 1, py: 1, px: 2, alignItems: "center" }}>
                                    <Link to={`/edit/${book.id}`} style={{ textDecoration: "none" }}>
                                        <IconButton sx={{ color: "green" }}>
                                            <Edit fontSize="small" />
                                        </IconButton>
                                    </Link>
                                    <IconButton sx={{ color: "red" }} onClick={() => handleDelete(book.id)}>
                                        <Delete />
                                    </IconButton>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

export default BookList;
