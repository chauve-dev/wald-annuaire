import controller from "../../app/controller";
import { user } from "../../models/user.model"

export default class addUserController extends controller{
    async index(){
        var data: any = this.request.body
        if(data.username && data.email && data.password){
            await user.query().insert({
                username: data.username,
                email:data.email,
                password: data.password
            });
            this.response.redirect('/login');
        }else{
            this.response.redirect('/login');
        }
    }
}