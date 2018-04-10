const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
	res.json({
		"message": "Welcome to our musician market."
	});
});
require('./routes.js')(app);
app.listen(process.env.PORT || 3000);