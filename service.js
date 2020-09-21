class Service {

    constructor() {
        this.request = require('request-promise-native');
    }

    listerClient() {
        return this.request.get('https://amine-hotel-web-api.herokuapp.com/clients?start=0&size=7', { json: true });
    }

    findByName(nomAChercher) {
        return this.request.get(`https://hotel-web-api-spring.herokuapp.com/clients/nom=${nomAChercher}`, { json: true });
    }

    posterClient(saisieNom, saisiePrenom) {
        return this.request.post({
            url: 'https://hotel-web-api-spring.herokuapp.com/clients',
            method: 'POST',
            json: {
                nom: saisieNom,
                prenoms: saisiePrenom
            }
        });
    }
}

// exports.Service = Service;

module.exports = { Service };
