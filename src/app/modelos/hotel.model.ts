export class Hotel{
  constructor(
    public _id: String,
    public nombreHotel: String,
    public direccion: String,
    public descripcionHotel: String,
    public puntuacion: String,
    public precioPorNoche: Number,
    public administrador: String
  ){}
}
