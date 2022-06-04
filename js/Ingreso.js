class Ingreso extends Dato{
    static contadorIngresos = 0;
    constructor(detalle,monto){
        super(detalle,monto);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}
