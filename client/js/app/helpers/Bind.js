class Bind{

    //... : Rest operator - tudo que vem depois dos três pontos, se torna um array
    constructor(model, view, ...props){
        let proxy = ProxyFactory.create(model, props, model => 
            view.update(model));

        view.update(model);

        return proxy;
    }
}