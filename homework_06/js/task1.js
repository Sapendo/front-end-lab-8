const http = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = () => {
                if (req.status === 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = () => {
                reject(Error("Network Error"));
            };
            req.send();
        });
    },
    post: (url, body) => {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.open('POST', url);
            req.onload = () => {
                if (req.status === 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = () => {
                reject(Error("Network Error"));
            };
            req.send(body);
        });
    }
}