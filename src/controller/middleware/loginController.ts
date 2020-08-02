import controllerMiddelware from "../../app/controllerMiddleware";

export default class loginController extends controllerMiddelware{
    index(){
        if(this.session){
            if(this.session.logged == true || this.request.path == "/login" || this.request.path == "/register" || this.request.path == "/sitemap.xml" || this.request.path == "/robots.txt"){
                this.next();
            }else{
                this.response.redirect('/login')
            }
        }else{
            this.response.redirect('/login')
        }
    }
}