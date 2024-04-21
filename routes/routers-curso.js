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

    app.get('/educa/curso/:curso', (req, res) => {
        const { curso } = req.params;
        let page = null;
        let data = {};

        if(curso === 'programacao-para-iniciantes' || curso === 'plataforma-de-cursos'){
            if(curso === 'programacao-para-iniciantes'){
                page = 'curso-details-single'
                data = {
                    title: 'Logn - Fundamentos de programação',
                    router: 'curso',
                    banner:{
                        page: 'Fundamentos de programação'
                    }
                }
            } else {
                page = 'curso-details-online';
                data = {
                    title: 'Logn - Fundamentos de programação',
                    router: 'curso',
                    banner:{
                        page: 'Fundamentos de programação'
                    }
                }
            }
            res.render(page,data);
        } else {
            res.redirect('/404');
        }
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