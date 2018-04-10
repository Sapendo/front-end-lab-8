module.exports = (app) => {
	let rockstars = require('./controllers/handlers.js');
	app.post('/rockstar', rockstars.create);
	app.get('/rockstars', rockstars.findAll);
	app.get('/rockstar/:id', rockstars.findOne);
	app.put('/rockstar/:id', rockstars.update);
	app.delete('/rockstar/:id', rockstars.delete);
}