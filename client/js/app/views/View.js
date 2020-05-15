class View{

    /*
    Não existem classes abstratas em js
    */
    constructor(elemento){

        this._elemento = elemento;
    }

    /*
    . como as classes que estendem View irão acessar o médoto template, ele
      deve perder o _ (underline)
    . lançando a exceção de erro caso o método não seja sobrescrito nas classes 
      filhas
    */
    template(model){
        
        throw new Error('O método template deve ser implementado');
    }

    update(model){
        //O innerHTML converte a string em elemento do DOM
        this._elemento.innerHTML = this.template(model);
    }
}