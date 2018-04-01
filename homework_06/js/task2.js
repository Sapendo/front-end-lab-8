function getTemplate(obj){
	let template = `<table>
			<tr>
				<td>IP Address</td>
				<td>${obj.ip}</td>
			</tr>
			<tr>
				<td>City</td>
				<td>${obj.city}</td>
			</tr>
			<tr>
				<td>Region</td>
				<td>${obj.region}</td>
			</tr>
			<tr>
				<td>Country</td>
				<td>${obj.country}/${obj.country_name}</td>
			</tr>
			<tr>
				<td>Postal Code</td>
				<td>${obj.postal}</td>
			</tr>
			<tr>
				<td>Latitude / Longitude</td>
				<td>${obj.latitude}, ${obj.longitude}</td>
			</tr>
			<tr>
				<td>Time Zone</td>
				<td>${obj.timezone}(${obj.utc_offset})</td>
			</tr>
			<tr>
				<td>Calling Code</td>
				<td>${obj.country_calling_code}</td>
			</tr>
			<tr>
				<td>Currency</td>
				<td>${obj.currency}</td>
			</tr>
			<tr>
				<td>Languages</td>
				<td>${obj.languages}</td>
			</tr>
			<tr>
				<td>ASN</td>
				<td>${obj.asn}</td>
			</tr>
			<tr>
				<td>Org</td>
				<td>${obj.org}</td>
			</tr>
		</table>
		<button type="submit" id="validate" class="btn">Validate response</button>`;
	return template;
}
function validationIP(ip) {
    return ip.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/);
}
function initMap(lat, lng) {
	var centerLatLng = new google.maps.LatLng(lat, lng);
	var mapOptions = {
		center: centerLatLng, 
		zoom: 8    
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({
		position: centerLatLng,
		map: map
	});
}
let doc = document,
    btn = doc.getElementById('submit'),
    error = doc.getElementById('errorInfo'),
    loader = doc.getElementById('loader'),
    info = doc.getElementById('info'),
    ip = doc.forms.checkIP.elements.ip,
	answer = doc.getElementById('answerfromValidation');;
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validationIP(ip.value)) {
		error.innerHTML = '';
		info.style.display = 'none';
		answer.innerHTML = '';
        loader.style.display = 'block';
        getRequest(ip.value);
    } else {
        error.innerHTML = 'The IP is not correct!';
		answer.innerHTML = '';
    }
});

function getRequest(ip) {
    http.get(`https://ipapi.co/${ip}/json/`).then((response) => {
		let json = JSON.parse(response);
		if(json.reserved){
			loader.style.display = 'none';
			error.innerHTML = 'IP address is reserved';
			return;
		}
		loader.style.display = 'none';
		info.innerHTML = getTemplate(json);
		info.style.display = 'block';
		initMap(json.latitude, json.longitude);
		let btnValidate = doc.getElementById('validate');
		btnValidate.addEventListener('click', () => {
			loader.style.display = 'block';
			postRequest(response);
		});
    }).catch((error) => {
        console.log(error);
    });
}

function postRequest(body) {
    http.post('https://shrouded-garden-94580.herokuapp.com/', body).then((response) => {
		loader.style.display = 'none';
		answer.innerHTML = response;
    }).catch((error) => {
        console.log(error);
    })
}