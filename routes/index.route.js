const cropRouter = require('./crops.route'); // crops Router
const passwordRouter = require('./password.route'); // users Router

module.exports = (app) => {
    app.use(`/api/crops`, cropRouter);
    app.use(`/api/password`, passwordRouter);
}

  