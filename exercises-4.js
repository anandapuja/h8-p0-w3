// Menggunakan Built-in Function pada Array
// (Array Join, Split, Slice, Splice, Sort)

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data) {

    data.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung",);
    data.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(data);

    var tanggal = data[3];
    var arrWaktu = tanggal.split("/");

    var bulan;
    switch (arrWaktu[1]) {
        case '01':
            bulan = "Januari";
            break;
        case '02':
            bulan = "Februari";
            break;
        case '03':
            bulan = "Maret";
            break;
        case '04':
            bulan = "April";
            break;
        case '05':
            bulan = "Mei";
            break;
        case '06':
            bulan = "Juni";
            break;
        case '07':
            bulan = "Juli";
            break;
        case '08':
            bulan = "Agustus";
            break;
        case '09':
            bulan = "September";
            break;
        case '10':
            bulan = "Oktober";
            break;
        case '11':
            bulan = "November";
            break;
        case '12':
            bulan = "Desember";
            break;
        default:
            bulan = "Bulan Salah!"
            break;
    }
    console.log(bulan);

    var sortWaktuDesc = arrWaktu.sort(function(a, b){return b-a});
    console.log(sortWaktuDesc);

    var sortWaktu = tanggal.split("/");
    console.log(sortWaktu.join('-'));

    var nama = data[1];
    var namaSingkat = nama.slice(0, 15);
    // console.log(namaSingkat);

    return namaSingkat;

}

console.log(dataHandling2(input));

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */