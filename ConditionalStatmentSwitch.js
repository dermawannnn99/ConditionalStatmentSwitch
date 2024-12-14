let nama = 'Menrey'
const umur = 19
let MakanApa = 3 //(INPUT DISINI)
/**
 * Jika 1 saya makan ayam
 * Jika 2 saya makan telur
 * jika 3 saya makan buah
 * Jika bukan 1-3, saya tidak makan
*/

switch(MakanApa) {
    case 1:
        MakanApa = 'Saya makan ayam'
        break
    case 2:
        MakanApa = 'Saya makan telur'
        break
    case 3:
        MakanApa = 'Saya makan buah'
        break
    default:
        MakanApa = 'Saya sudah kenyang'
        break
}

console.log(
    `Nama saya ${nama}, umur saya ${umur}, dan tadi pagi ${MakanApa}`
)