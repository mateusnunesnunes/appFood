export default class SessaoSingleton {

    static myInstance = null;

    _userID = "";
    _isLogado = false


    static getInstance() {
        if (SessaoSingleton.myInstance == null) {
            SessaoSingleton.myInstance = new SessaoSingleton();
        }

        return this.myInstance;
    }

    getUserID() {
        return this._userID;
    }

    setUserID(id) {
        this._userID = id;
    }

    getIsLogado(){
        return this._isLogado;
    }

    setIsLogado(isLogado){
        this._isLogado = isLogado;
    }
}