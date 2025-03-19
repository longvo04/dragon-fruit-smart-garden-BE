const treeRouter = require('./crops.route'); // Trees Router

module.exports = (app) => {
    app.use(`/crops`, treeRouter);
}

  