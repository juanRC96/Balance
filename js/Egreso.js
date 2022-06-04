class Egreso extends Dato{
    static contadorEgresos = 0;
    constructor(detalle,monto){
        super(detalle,monto);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}
