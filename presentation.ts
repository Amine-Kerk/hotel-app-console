import readline from 'readline';
import { Service } from './service.js';

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export class Presentation {
private service;

    constructor() {
        this.service = new Service();
    }

    start() {

        console.log(
            `** Administration Hotel **
1. Lister les clients
2. Ajouter un client
3. Rechercher un client par nom
4. Vérifier la disponibilité d'une chambre
99. Sortir
`);

        // récupération de la saisie utilisateur
        rl.question("Choisissez un numéro : ", saisie => {

            switch (saisie) {
                case "1":

                    console.log('>> Liste des clients');
                    const listeClients$: any = this.service.listerClients();
                    listeClients$
                        .then((clients: any)  => {console.log(clients.map((client: any) => `${client.nom} ${client.prenoms}`).join('\n'));
                                console.log('\n');}
                        )
                        .catch((err: any) => console.log('La liste des clients n\'est pas accessible.'))
                        .finally(() => this.start());

                    break;

                case "2":
                    console.log('>> Ajout d\'un nouveau client')
                    const ajoutClient$ = this.service.ajouterClient();
                    rl.question('Saisissez le nom du nouveau client : ', saisieNom => {
                        rl.question('Saisissez le prénom du nouveau client : ', saisiePrenom => {
                            ajoutClient$
                                .then(console.log(`${saisieNom} ${saisiePrenom} a correctement été ajouté(e) à la base.`))
                                .catch((err: any) => console.log('Le client n\'a pas été ajouté à la base.'))
                                .finally(() => this.start());
                        })});
                    break;

                case "3":
            //     console.log("\n>> Rechercher un client par nom\n");

            //    rl.question("Entrez le Nom à chercher: ", saisieNom => {
            //       this.monService.findByName(saisieNom)
            //         .then(clients => console.log(clients))
            //         .catch(err => console.log(err))
            //        .finally(() => {
            //            console.log("\r");
            //          this.start();
            //      })
            //  })

           
                    console.log('Cette fonction n\'est pas encore disponible, merci de revenir ultérieurement')
                    this.start();
                    break;

                    
                   

                case "4":
                 //   console.log("\n>> Vérifier la disponibilité d'une chambre\n");
                  //  console.log("\nComing soon!\n");
                  console.log('Cette fonction n\'est pas encore disponible, merci de revenir ultérieurement')
                  this.start();
                    break;

                case "99":
                    console.log("\nAurevoir !");
                    process.exit();

                default:
                    console.log("La saisie n\'est pas bonne Retry =>")
                    this.start();
                    break;
            }
        });
    }

}


//module.exports = { Presentation };
