module.exports = app => {
    app.get('/', (req, res) => {
        res.render('index',{title: 'Logn', router: 'home'});
    });

    app.get('/sobre', (req, res) => {
        res.render(
            'sobre',
            {
                title: 'Logn - Sobre',
                router: 'sobre',
                banner: {
                    page: 'sobre nós'
                }
            }
        );
    });

    app.get('/contato', (req, res) => {
        res.render(
            'contato',
            {
                title: 'Logn - Contato',
                router: 'contato'
            }
        );
    });

    app.get('/curso/programacao', (req, res) => {
        res.render(
            'details-single',
            {
                title: 'Logn - Curso de programação',
                router: 'curso',
                banner:{
                    page: 'programação para iniciantes'
                }
            }
        );
    })

    app.get('/cursos', (req, res) => {
        res.render(
            'cursos',
            {
                title: 'Logn - Cursos',
                router: 'cursos',
                banner: {
                    page: 'Conheça nossos cursos'
                }
            }
        );
    });
    app.get('/LP', (req, res) => {
        res.render('landing-page');
    });

}