const controller = { // variable objeto que almacena las funciones que van a devolver las direcciones
    index: (req, res) => {
        return res.render('home.ejs');
        // return res.send('vamos al home');
    }
}

module.exports = controller; // siempre se debe exportar la variable definida en la linea 1