module.exports = app => {

    app.get('/', (req, res) => {
        res.render('index',{
            title: 'Logn',
            router: 'sobre',
            banner: {
                page: 'Bem vindo a Logn'
            }
        });
    })


    app.get('/educa', (req, res) => {
        res.render('curso-index',{title: 'Logn', router: 'home'});
    });

    app.get('/educa/sobre', (req, res) => {
        res.render(
            'curso-sobre',
            {
                title: 'Logn - Sobre',
                router: 'sobre',
                banner: {
                    page: 'sobre nós'
                }
            }
        );
    });

    app.get('/educa/contato', (req, res) => {
        res.render(
            'curso-contato',
            {
                title: 'Logn - Contato',
                router: 'contato'
            }
        );
    });

    app.get('/educa/curso/programacao', (req, res) => {
        res.render(
            'curso-details-single',
            {
                title: 'Logn - Curso de programação',
                router: 'curso',
                banner:{
                    page: 'programação para iniciantes'
                }
            }
        );
    })

    app.get('/educa/cursos', (req, res) => {
        res.render(
            'curso-cursos',
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
        res.render('curso-landing-page', { title: 'Curso de programação da Logn', router: 'landing-page'});
    });

}