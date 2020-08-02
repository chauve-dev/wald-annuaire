import controller from "../../app/controller";
import { contact } from "../../models/contact.model"

export default class addContactController extends controller{
    async index(){
        var data: any = this.request.body
        if(data.nom && data.prenom){
            await contact.query().insert({
                nom: data.nom,
                prenom:data.prenom,
                email: data.email,
                telephone: data.telephone,
                userid: this.session.userId
            });
            this.response.redirect('/');
        }else{
            this.response.redirect('/');
        }
    }
}