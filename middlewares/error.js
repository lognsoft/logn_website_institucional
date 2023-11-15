exports.notFound = (req, res, next) =>{
    res.status(404);
    res.render('not-found', {title: 'Error - Página não encontrada', message: 'Ops! A página que você procura pode ter sido movida, renomeada ou talvez nunca tenha existido', router: '', banner: {page: 'Error 404', img: '/images/others/breadcrumb_img02.png'}});
};
exports.serverError = (error, req, res, next) => {
    res.status(500);
    res.render('server-error', { error });
}