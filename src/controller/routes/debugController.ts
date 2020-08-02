import controller from "../../app/controller";

export default class debugController extends controller{
    index(){
        this.session.logged = true;
        this.response.redirect('/');
    }
}