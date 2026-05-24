class Auth{
    constructor()
    {
        
    }
    setLogin(login)
    {
        localStorage.setItem("shoutboxNick", login)
    }
    getLogin()
    {
        return localStorage.getItem("shoutboxNick");
    }
    isLoged()
    {
        if(this.getLogin())
        {
            return true;
        }
        return false;
    }
}
export default Auth;