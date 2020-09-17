var request = require('request');
var backendUrl = 'https://amine-hotel-web-api.herokuapp.com'


function listerClients(callbackOK, callbackKO) {
request(backendUrl + '/clients?start=0&size=5', { json: true }, 
function(err,r1, listerClients) {
    if (err) {
        callbackKO(err);
    } else {
        callbackOK(listerClients);
    }
});

}

exports.listerClients = listerClients;





function ajouterClients() {
request({url:backendUrl+'/clients',json:{nom:'san',prenoms :'lou'},method:'POST'},
function (err,httpResponse,body){
    if (err) {
        return console.error('upload failed:',err);
    }
    console.log('upload successful',body);
});
}
exports.ajouterClients=ajouterClients;
