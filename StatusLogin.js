var StatusLogin = (function() {
    var logado = false;
  
    var getStatus = function() {
        return logado;
    };
  
    var setStatus = function(status) {
        logado = status;     
      
    };
  
    return {
        getStatus: getStatus,
        setStatus: setStatus
    }
  
  })();
  
  export default StatusLogin;