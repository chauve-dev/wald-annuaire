import controller from "../../app/controller";
import { user } from "../../models/user.model"

export default class loginController extends controller{
    index(){
        if(this.request.method == 'GET'){
            this.response.render('login');
        }else{
            user.query().where('email', '=', this.request.body.email).where('password', '=', this.request.body.password).then((data: any) => {
                if(data.length <= 0){
                    this.response.redirect('/login');
                }else{
                    this.session.logged = true;
                    this.session.userId = data[0]['id'];
                    this.response.redirect('/');
                }
            })
        }
    }
}