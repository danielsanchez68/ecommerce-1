export default {
    PORT: 8080,
    TIPO_DE_PERSISTENCIA_PRODUCTOS : 'MONGODB',    // 'MEM', 'FILE', 'MONGODB'
    TIPO_DE_PERSISTENCIA_CARRITO : 'MONGODB',    // 'MEM', 'FILE', 'MONGODB'
    //STR_CNX : 'mongodb://localhost/ecommerce'   // base local
    STR_CNX : 'mongodb+srv://daniel:daniel123@misdatos.fs00f.mongodb.net/ecommerce1?retryWrites=true&w=majority'   // base local
}