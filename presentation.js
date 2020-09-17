//couche IHM "" commuiquer avec UI ""
//recupérer la saisie 
//afficher le resultat dans la console (le menu le resultat...)
var service = require('./service');
var readline = require('readline');

// création d'un objet `rep` permettant de récupérer la saisie utilisateur
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function start() {

    console.log("Menu");
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("3. Recherche un client par nom");
    console.log("4. Vérifier la disponibilité d'une chambre");
    console.log("99. Sortir");


    r1.question('Votre choix :', function (saisie) {

        switch (saisie) {
            case "1":
                service.listerClients(
                    function (listerClients) {
                        console.log(
                            listerClients
                                .map(function (client) {
                                    return client.nom + ' ' + client.prenoms
                                })
                                .join('\n')
                        );
                        start();
                    }, function (err) {
                        console.log('oops');
                        start();
                    });
                break;

            case "2":
                service.ajouterClients(
                    function (ajouterClients) {
                        console.log(
                            ajouterClients
                                .map(function (client) {
                                    return client.nom + ' ' + client.prenoms
                                })
                                .join('\n')
                        );
                        start();
                    }, function (err) {
                        console.log('oops');
                        start();
                        r1.close
                    });
                break;
            case "99":
                console.log("Aurevoir.")
                r1.close();
                this.process.exit(); // Met fin au programme
                break;
        }


    }
    );

}

exports.start = start;

        
        
