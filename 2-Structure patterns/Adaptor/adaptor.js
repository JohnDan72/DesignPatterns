/**
 * se basa cuando tenemos una clase y
 * nos damos cuenta que la api o metodos tnemos problemas y 
 * debemos actualizarla
*/

class Api {
    constructor() {
        this.operations = function (url, opt, verb) {
            switch (verb) {
                case 'get':
                    // return fetch
                    break;
                case 'post':
                    // return fetch
                    break;

                default:
                    break;
            }
        }
    }
}

class Api2 {
    constructor() {
        this.get = function (url, opts) {
            // return axios.get
        };
        this.post = function (url, opts) {
            // return axios.post
        };
    }
}

// Adapter
class ApiAdapter {
    constructor() {
        const api2 = new Api2();

        this.operations = function (url, opts, verb) {
            switch (verb) {
                case 'get':
                    return api2.get(url,opts)

                case 'post':
                    return api2.post(url,opts)

                default:
                    break;
            }
        }

    }
}

// implementación original
const api = new Api();
api.operations('www.google.mx' , { q: 1 } , 'get' );
// implementación nueva
const api2 = new Api2();
api2.get('www.google.mx' , { q: 1 });

// implementación adapter para no destruir el resto de código
const adapter = new ApiAdapter();
adapter.operations( 'www.google.mx' , { q: 1 } , 'post' );