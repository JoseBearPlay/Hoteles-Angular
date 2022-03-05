export class Factura{
  constructor(
  public _id: String,
  public  nombreHotel: String,
  public  direccionHotel: String,
  public  nombreUsuario: String,
  public  fecha: String,
  public  numeroFactura: Number,
  public  serie: String,
  public  serviciosHospedado: String,
  public  precioServicios: Number,
  public  precioHospedaje: Number,
  public  diasHospedado: Number,
  public  total: Number
  ){}
}
