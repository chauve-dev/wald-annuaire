import controller from "../../app/controller";

export default class logoutController extends controller{
    index(){
        this.session.logged = false;
        this.response.redirect('/login');
    }
}