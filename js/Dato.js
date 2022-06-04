class Dato{
    static cantidadDatos;
    constructor(detalle,monto){
        this.detalle = detalle;
        this.monto = monto;
    }

    get detalle(){
        return this._detalle;
    }
    set detalle(descripcion){
        this._descripcion=descripcion;
    }

    get monto(){
        return this._monto;
    }
    set monto(monto){
        this._monto=monto;
    }
}
