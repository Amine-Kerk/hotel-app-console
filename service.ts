  
//const request = require('request');
import request from 'request';

export class Service {

    listerClients(): any {
        return new Promise((resolve, reject) => {

   

   
        request('https://amine-hotel-web-api.herokuapp.com/clients?start=0&size=7', { json: true },(err, res, body) => {
            if (err) { reject(err); }
            else { resolve(body);}
        });
    });
}
    

  //  findByName(nomAChercher) {
  //      return this.request.get(`https://hotel-web-api-spring.herokuapp.com/clients/nom=${nomAChercher}`, { json: true });
 //   }
   // url: 'https://hotel-web-api-spring.herokuapp.com/clients',

    ajouterClient(saisieNom?: any, saisiePrenom?: any): any {

        return new Promise((resolve, reject) => {
          request.post({
            url: 'https://hotel-web-api-spring.herokuapp.com/clients',
              method: 'POST',
              json: {nom: `${saisieNom}`, prenoms: `${saisiePrenom}`}
            }, (err, res, body) => {
              if (err) { reject(err); }
              else { resolve(body);}
            });
          });
      }
      
      }

// exports.Service = Service;

//module.exports = { Service };
