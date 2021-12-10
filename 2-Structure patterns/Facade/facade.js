/**
 * simplificar el llamado a una función
 */

// llamar a una url
const https = require('https');



const get = url => new Promise((resolve, reject) => {
    const urlComp = url.split('/');
    const host = urlComp.shift();

    const options = {
        hostname: host,
        path: `/${urlComp.join('/')}`,
        method: 'GET'
    };

    const req = https.request(options, res => {
        res.setEncoding('utf8');

        let body = '';

        res.on('data', d => { body += d });

        res.on('end', d => {
            const parsed = JSON.parse(body);
            console.log(parsed);
        });
    });

    req.on('error', e => {
        console.error("Error: " + e)
    });

    req.end();
});


get('jsonplaceholder.typicode.com/users');