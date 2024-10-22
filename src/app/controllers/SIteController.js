class SiteController {
    // [GET] news
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /form
    form(req, res) {
        res.render('form');
    }
}

module.exports = new SiteController();
