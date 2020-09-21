"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
//const request = require('request');
var request_1 = __importDefault(require("request"));
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.listerClients = function () {
        return new Promise(function (resolve, reject) {
            request_1.default('https://amine-hotel-web-api.herokuapp.com/clients?start=0&size=7', { json: true }, function (err, res, body) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            });
        });
    };
    //  findByName(nomAChercher) {
    //      return this.request.get(`https://hotel-web-api-spring.herokuapp.com/clients/nom=${nomAChercher}`, { json: true });
    //   }
    // url: 'https://hotel-web-api-spring.herokuapp.com/clients',
    Service.prototype.ajouterClient = function (saisieNom, saisiePrenom) {
        return new Promise(function (resolve, reject) {
            request_1.default.post({
                url: 'https://hotel-web-api-spring.herokuapp.com/clients',
                method: 'POST',
                json: { nom: "" + saisieNom, prenoms: "" + saisiePrenom }
            }, function (err, res, body) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            });
        });
    };
    return Service;
}());
exports.Service = Service;
// exports.Service = Service;
//module.exports = { Service };
