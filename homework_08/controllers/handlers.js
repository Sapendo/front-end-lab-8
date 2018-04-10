var fs = require('fs');
var musicians = './data/storage.json';

exports.create = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Note content can not be empty"
		});
	}
	const musician = {
		id: req.body.id,
		name: req.body.name,
		band: req.body.band,
		instrument: req.body.instrument
	};
	fs.readFile(musicians, (err, data) => {
		let write = true;
		if (err) {
			res.status(404).send({
				message: 'We cannot read the file.'
			});
		}
		data = JSON.parse(data);
		data.forEach(el => {
			if (el.name === musician.name) {
				write = false;
				res.status(409).send({
					message: 'The musisian alredy exist'
				});
			}
		});
		if (write) {
			data.push(musician);
			fs.writeFile(musicians, JSON.stringify(data), function (err) {
				if (err) throw err;
				res.status(201).send({
					message: 'The data was successfully added to the file.'
				});
			});
		}
	});
};

exports.findAll = (req, res) => {
	fs.readFile(musicians, (err, data) => {
		if (err) {
			res.status(404).send({
				message: 'We cannot read the file.'
			});
		}
		data = JSON.parse(data);
		res.status(200).send(data);
	});
};

exports.findOne = (req, res) => {
	fs.readFile(musicians, (err, data) => {
		if (err) {
			res.status(404).send({
				message: 'We cannot read the file.'
			});
		}
		data = JSON.parse(data);
		let musician = data.find(el => el.id === +req.params.id);
		if (musician) {
			res.status(200).send(musician);
		} else {
			res.status(404).send({
				message: `We could not find the musician`
			});
		}
	});
};

exports.update = (req, res) => {
	let upDate = false;
	const musician = {
		id: req.body.id,
		name: req.body.name,
		band: req.body.band,
		instrument: req.body.instrument
	};
	fs.readFile(musicians, (err, data) => {
		if (err) {
			res.status(404).send({
				message: 'We cannot read the file.'
			});
		}
		data = JSON.parse(data);
		data.map(el => {
			if (el.id === +req.params.id) {
				upDate = true;
				el.id = musician.id || el.id;
				el.name = musician.name || el.name;
				el.band = musician.band || el.band;
				el.instrument = musician.instrument || el.instrument;
			}
		});
		if (upDate) {
			fs.writeFile(musicians, JSON.stringify(data), function (err) {
				if (err) throw err;
				res.status(200).send({
					message: 'The data was successfully update.'
				});
			});
		} else {
			res.status(404).send({
				message: `We could not find the musician`
			});
		}
	});
};

exports.delete = (req, res) => {
	let upDate = false;
	fs.readFile(musicians, (err, data) => {
		if (err) {
			res.status(404).send({
				message: 'We cannot read the file.'
			});
		}
		data = JSON.parse(data);
		data.map((el, index) => {
			if (el.id === +req.params.id) {
				upDate = true;
				data.splice(index, 1);
			}
		});
		if (upDate) {
			fs.writeFile(musicians, JSON.stringify(data), function (err) {
				if (err) throw err;
				res.status(200).send({
					message: 'Musician has been successfully removed.'
				});
			});
		} else {
			res.status(404).send({
				message: `We could not find the musician`
			});
		}
	});
};
