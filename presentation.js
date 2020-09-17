//couche IHM "" commuiquer avec UI ""
//recupérer la saisie 
//afficher le resultat dans la console (le menu le resultat...)
var service = require('./service');

function start(){
    //afficher le menu
    console.log('1.lister les clients \n2.Ajouter un nouveau Client\n3.Rechercher un client par Nom\n4.Vérifier la disponibilité dune chambre\n 99.Sortir');
   //le comportement après l’affichage du menu
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    rl.question('saisissez la commande à effectuer  : ', function(saisie) {


        if (saisie == '1'){
            console.log('>> Liste des clients');
            console.log(service.listerClients());
            rl.close();
        }
        if (saisie =='2'){
            console.log('>> Ajouter un nouveau Client')
            console.log(service.ajouterClients());
            rl.close();
        }

        if (saisie =='3'){
            console.log('>> Rechercher un client par Nom')
            rl.close();
        }

        if (saisie =='3'){
            console.log('>> Vérifier la disponibilité d\'une chambre')
            rl.close();
        }
        
        else if (saisie == '99') {
            console.log('Au revoir');
            rl.close();
        } else {
            console.log('la saisie est erronée veuillez recommencer');
            rl.close();
        }
    })

   
    
}


exports.demarrer=start;