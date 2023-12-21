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

    app.get('/servicos/parceiros', (req, res) => {
        res.render(
            'service-partner',
            {
                title: 'Logn - Contato',
                router: 'parceiros',
                banner: {
                    page: 'nossos parceiros'
                },
                partners: [
                    {
                        title: 'SOLO. <br>Wellness Ads Agency',
                        text: 'Com mais de 21 anos de atuação no segmento de Health, a Solo Propaganda é uma parceira dedicada aos principais players do mercado. Adaptada a esse ecossistema desde o início, absorvemos conhecimento e nos especializamos nas particularidades do setor. Essa expertise exclusiva acelera a curva de aprendizado, proporcionando a melhor relação entre o investimento do cliente e os resultados conquistados, sem depender de grandes verbas de mídia.',
                        img: 'solo-logo.webp'
                    },
                    {
                        title: 'Agência BUZY',
                        text: 'A Agência Buzy é mais do que uma empresa de publicidade; é um compromisso inabalável com a dedicação e profissionalismo. Nosso nome não é apenas um rótulo, é um reflexo do nosso empenho incansável em entregar soluções de excelência. Na Agência Buzy, cada projeto é uma oportunidade de demonstrar nossa paixão pela criatividade e pelo compromisso com o sucesso dos nossos clientes. Confie na Buzy para elevar sua marca ao próximo nível, onde dedicação e profissionalismo se unem para criar impacto duradouro.',
                        img: 'buzy-logo.png'
                    }
                ]
            }
        );
    });
}