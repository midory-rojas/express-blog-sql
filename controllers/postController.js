//imporoto l'array di cani della cartella data
import caniArray from "../data/cani.js";

// Lettura di tutti i post dei cani - INDEX
function index(req, res) {
    const risposta = {
        count: caniArray.length,
        results: caniArray,
    };
    res.json(risposta);
}

// Dettagli di un singolo post (cane) - SHOW
function show(req, res) {
    const id = parseInt(req.params.id);
    //uso find 
    const cane = caniArray.find((cane) => cane.id === id);
    //uso la condizione
    if (cane !== undefined) {
        res.json(cane);
    } else {
        res.status(404); //Status 404
        res.json({
            error: "Not found",
            message: "Cane non trovato",
        });
    }
}

// Creare un nuovo tipo di post (cane) - STORE
function store(req, res) {
    //Dati--body
    const dati = req.body;
    console.log(dati);

    //Faccio la condizione si il client non ha inserito corretamente il  titolo
    //status 400

    if (dati.titolo === undefined || dati.titolo.length === 0) {
        res.status(400);
        return res.json({  //risposta json
            error: "Error del client",
            message: "Il campo titolo è obbligatorio e non può essere vuoto",
        });
    }

    //Calcolo del succesivo id
    const newId = caniArray[caniArray.length - 1].id + 1
    console.log(newId);

    const newCane = {
        id: newId,
        titolo: dati.titolo,
        contenuto: dati.contenuto,
        imagine: dati.imagine,
        tags: dati.tags,
    };
    caniArray.push(newCane); //Aggiungo un nuovo tipo di cane con push

    res.status(201); //risposta della creazione con status 201
    res.json(newCane);
}


// Modificare un post di cane esistente - UPDATE
function update(req, res) {
    const id = parseInt(req.params.id);

    //prendo ID dei dati con find
    const cane = caniArray.find((cane) => cane.id === id);

    //Faccio la condizione per controllare si il parametro esiste nell'array
    // di post, se non esiste stampo status 404 con messagio di errore, not found

      if (cane === undefined) {
        res.status(404);
        return res.json({
            error: "Not found",
            message: "Cane, non trovato",
        });
    }

    //Dati--body

    const dati = req.body;
    console.log(dati);

// Controllare la correttezza di dati nell'update, 
// inviando nel caso errore 400
// Condizione quando il client non inserisce il titolo o il dato è vuoto
    if (dati.titolo === undefined || dati.titolo.length === 0) {
        res.status(400);
        return res.json ({
            error:"Error del client",
            message: "Il campo titolo è obbligatorio e non può essere vuoto",
        });
    }

    cane.titolo = dati.titolo;
    cane.contenuto = dati.contenuto;
    cane.immagine = dati.immagine;
    cane.tags = dati.tags;

    res.json(cane);
}

// Modificare solo alcuni dati di un post di cane esistente - MODIFY
function modify(req, res) {
    const id = parseInt(req.params.id);
    res.send(`modifica parzialmente il post di cane ${id}`);
}

// Cancellare un post di cane esistente - DESTROY
function destroy(req, res) {
    const id = parseInt(req.params.id);

    //Implemntazione della logica 
    //1. Trovare index del post di cani con findIndex
    const caneIndex = caniArray.findIndex((cane) => cane.id === id);
    //console.log(caneIndex);

    //Condizione
    if (caneIndex === -1) {
        res.status(404); //Status 404 not found
        res.json({
            error: "not found",
            message: "Cane non trovato",
        });
    } else {
        //2. Cancello il post di cane con lo splice
        //partendo dal indice 1, cancello un'elemento (1)
        //dopo faccio il test con index per vedere si è stato cancelato il post

        caniArray.splice(caneIndex, 1)
        res.sendStatus(204) //Status 204 non c'è nessun contenuto
    }
}



const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
};

//exporto controller
export default controller;