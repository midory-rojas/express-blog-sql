export default function notFound(req, res, next) {
    res
    .status(404)
    .json({
        error: "Not found",
        message: "Pagina non trovato dal server.",
    });
    next();
};