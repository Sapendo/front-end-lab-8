function getTemplate(obj) {
    let template = {
        'IP Address': obj.ip,
        'City': obj.city,
        'Region': obj.region,
        'Country': `${obj.country}/${obj.country_name}`,
        'Postal Code': obj.postal,
        'Latitude / Longitude': `${obj.latitude}, ${obj.longitude}`,
        'Time Zone': `${obj.timezone}(${obj.utc_offset})`,
        'Currency': obj.currency,
        'Languages': obj.languages,
        'ASN': obj.asn,
        'Org': obj.org
    };
    let table = document.createElement('div');
    table.classList.add('tabel');
    for (key in template) {
        if (template[key]) {
            let div = document.createElement('div'),
                cellName = document.createElement('p'),
                cellInfo = document.createElement('p');
            div.classList.add('row');
            cellName.classList.add('cellName');
            cellInfo.classList.add('cellInfo');
            cellName.innerHTML = key;
            cellInfo.innerHTML = template[key];
            div.appendChild(cellName);
            div.appendChild(cellInfo);
            table.appendChild(div);
        }
    }
    return table;
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
    content = doc.getElementById('content'),
    map = doc.getElementById('map'),
    ip = doc.forms.checkIP.elements.ip,
    answer = doc.getElementById('answerfromValidation'),
    btnValidate = doc.getElementById('validate');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validationIP(ip.value)) {
        error.innerHTML = '';
        info.innerHTML = '';
        answer.innerHTML = '';
        info.style.display = 'none';
        loader.style.display = 'block';
        btnValidate.style.display = 'none';
        getRequest(ip.value);
    } else {
        error.innerHTML = 'The IP is not correct!';
        answer.innerHTML = '';
        info.innerHTML = '';
        btnValidate.style.display = 'none';
    }
});

function getRequest(ip) {
    http.get(`https://ipapi.co/${ip}/json/`).then((response) => {
        let json = JSON.parse(response);
        if (json.reserved) {
            loader.style.display = 'none';
            error.innerHTML = 'IP address is reserved';
            return;
        }
        loader.style.display = 'none';
        info.appendChild(getTemplate(json));
        info.style.display = 'block';
        map.style.transform = 'translateX(0)';
        content.style.right = '25%';
        initMap(json.latitude, json.longitude);
        btnValidate.style.display = 'block';
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