// connect to server
const router = require('express').Router();
// connect to api routes
const apiRoutes = require('./api');
// connect to homepage
const homeRoutes = require('./homeRoutes'); 
// connect to dashboard
const dashboardRoutes = require('./dashboardRoutes');
// path to api routes
router.use('./api', apiRoutes);
// path to homepage
router.use('./api', homeRoutes); 
// path to dashboard
router.use('/dashboard', dashboardRoutes);
// catch all for error paths
router.use((req,res) => {
    res.status(404).end();
});

module.exports = router; 