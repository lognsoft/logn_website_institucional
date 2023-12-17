module.exports = (app) => {
    app.get('/servicos', (req, res) => {
        res.render('service-index',{title: 'Logn', router: 'home'});
    });

    app.get('/servicos/sobre', (req, res) => {
        res.render(
            'service-sobre',
            {
                title: 'Logn - Sobre',
                router: 'sobre',
                banner: {
                    page: 'sobre nós'
                }
            }
        );
    });

    app.get('/servicos/contato', (req, res) => {
        res.render(
            'service-contato',
            {
                title: 'Logn - Contato',
                router: 'contato'
            }
        );
    });
}