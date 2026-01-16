//Importo express
import express from "express";
//Importo postRouter della cartella router
import postsRouter from "./routers/posts.js";
//Importo page notFound della cartella middlewares
import notFound from "./middlewares/notFound.js";
//Importo page errorHandler della cartella middlewares
import errorHandler from "./middlewares/errorHandler.js";



//Invoco express
const app = express();

//Creo la porta 3000
const port = 3000;

//Creo una cartella public per inserire le immagine e accedere facilmente dal browser
app.use(express.static("public"));

//attivo la decodifica (parser) del body delle richieste
app.use(express.json());

//Imposto la rotta
app.use("/posts", postsRouter);

//Faccio la prova con la prima risposta e la verifico in postman
app.get("/", (req, res) => {
    res.send("Benvenuti al blog dei cani più belli e amorevooli");
});

//Faccio il test /error
app.get("/error", (req, res) => {
    throw Error("Questo è un errore forzato.");
});

//Imposto errorHandler e notFound(sempre notFound all'ultimo perche il browser lo legge a cascada)
app.use(errorHandler);
app.use(notFound);


app.listen(port, (err) => {
    if(err
    ) {
        return console.error(`Error durante l'avvio del server:`, err);
    } else {
    console.log(`Íl server è partito sulla porta ${port}`);
    }
});