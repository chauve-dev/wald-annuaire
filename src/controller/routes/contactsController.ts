import controller from "../../app/controller";
import { contact } from "../../models/contact.model"

export default class contactsController extends controller{
    index(){
        contact.query().where('userid', '=', this.session.userId).then(contacts => {
            this.response.send(contacts)
        });
    }
}