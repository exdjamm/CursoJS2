class Negociacao{
    /*
    Programação defensiva:
    blindar a data para que não possa ser alterada
    */
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade; 
        this._valor = valor;
        //Congela superficialmente (shallow). A data, como é outro objeto, não será congelada
        //Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get valor(){
        return this._valor;
    }

    get quantidade(){
        return this._quantidade;
    }

}