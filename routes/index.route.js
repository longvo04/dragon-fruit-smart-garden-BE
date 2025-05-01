// const cropRouter = require('./crops.route'); // crops Router
// const passwordRouter = require('./password.route'); // users Router

// module.exports = (app) => {
//     app.use(`/api/crops`, cropRouter);
//     app.use(`/api/password`, passwordRouter);
// }

const express = require('express');
const router = express.Router();

const createCRUD = require('../utils/crudFactory');

const models = {
    permission: require('../models/permission.model'),
    role: require('../models/role.model'),
    worker: require('../models/worker.model'),
    weather: require('../models/weather.models'),
    sensordata: require('../models/sensordata.model'),
    sensor: require('../models/sensor.models')
};

// Create CRUD routes for each model
Object.entries(models).forEach(([path, model]) => {
    router.use(`/${path}`, createCRUD(model));
});

// Import route files
const permissionRouter = require('./permission.route');
const roleRouter = require('./role.route');
const workerRouter = require('./worker.route');
const weatherRouter = require('./weather.route');
const sensorDataRouter = require('./sensordata.route');
const sensorRouter = require('./sensor.route');
const cropRouter = require('./crops.route');
const passwordRouter = require('./password.route');

module.exports = (app) => {
    // Apply CRUD routes
    app.use('/api', router);

    // Apply all routes with appropriate prefixes
    app.use('/api/permissions', permissionRouter);
    app.use('/api/roles', roleRouter);
    app.use('/api/workers', workerRouter);
    app.use('/api/weather', weatherRouter);
    app.use('/api/sensordata', sensorDataRouter);
    app.use('/api/sensors', sensorRouter);
    app.use('/api/crops', cropRouter);
    app.use('/api/password', passwordRouter);
};
