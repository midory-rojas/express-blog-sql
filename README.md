# Progetto Express Blog - Integrazione Database MySQL

## 🛠️ Attività Svolte

### 1. Configurazione e Connessione DB
* **Database Design**: Progettazione dello schema del database tramite diagramma ER, definendo le tabelle `posts`, `tags` e la tabella pivot `post_tag` per gestire la relazione Many-to-Many.
* **Setup Ambiente**: Installazione del client `mysql2` tramite npm.
* **Connessione**: Creazione del file di configurazione `data/db.js` per stabilire il collegamento tra l'app Express e il server MySQL, con controllo degli errori e conferma in console a connessione avvenuta.

### 2. Gestione dei Post (Logica API)
Tutta la logica di gestione dei dati è stata spostata all'interno del controller `postController.js`, implementando le seguenti funzionalità:

* **Lettura Completa (Index)**: L'API recupera ora l'elenco completo dei post direttamente dal database tramite query SQL `SELECT`. I dati vengono restituiti in formato JSON.
* **Dettaglio Singolo Post (Show)**: Implementata la ricerca di un post specifico tramite il suo ID. Il sistema gestisce la risposta restituendo l'oggetto trovato o un errore nel caso l'ID non esista.
* **Eliminazione (Destroy)**: Implementata la funzione di cancellazione record. L'API esegue una query `DELETE` sul database e risponde con uno stato HTTP 204 in caso di successo.

### 3. Testing e Validazione
* Utilizzo di **Postman** per verificare la corretta risposta delle rotte (Index, Show, Destroy).
* Utilizzo di **MySQL Workbench** per verificare l'effettiva persistenza e rimozione dei dati sul database fisico.

---

## 💻 Tecnologie Utilizzate
* **Node.js & Express.js**
* **MySQL** (Client `mysql2`)
* **DrawSQL** (Progettazione schema)
* **Postman** (API Testing)
