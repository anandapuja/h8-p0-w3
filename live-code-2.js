/**
 * Seseorang akan mendaftar paket Indiehome terbaru. Buatlah program untuk menghitung harganya. Untuk mendaftar, dia perlu menyertakan nama, nomor ktp, alamat, serta jenis rumah.
 * Jika nama tidak diisi, program akan mengoutput 'NAMA HARUS DIISI!'.
 * - Jika panjang nomor KTP dibawah 4 angka atau nomor KTP tidak diisi, maka keluarkanlah output
 * 'NOMOR KTP TIDAK VALID'.
 * - Untuk soal ini, terdapat 4 lokasi alamat: 'Jakarta', 'Surabaya', 'Yogyakarta', dan 'Bandung'. Selain keempat alamat tersebut, maka program akan mengeluarkan
 * 'Alamat tidak diketahui'. Saat kalian membuat program, jangan lupa untuk menangani kasus-kasus input kota yang tidak ada dalam daftar.
 * Masing-masing lokasi memiliki harga dasar paket yang berbeda:
 *     - Jakarta   100000
 *     - Surabaya   50000
 *     - Yogyakarta 45000
 *     - Bandung    90000
 * -Jenis rumah ada 3 macam: 'normal', 'large', 'kosan'. Jika jenis rumah tidak ada di dalam ketiga rumah tersebut, program akan mengeluarkan output 'Jenis rumah salah'
 * Masing-masing jenis rumah akan mendapatkan biaya yang berbeda-beda. Namun, jika jenis rumah adalah 'kosan' maka tidak boleh mendaftar ke program ini.
 *     - Biaya 'normal': 30000
 *     - Biaya 'large' : 50000
 * Buatlah program yang akan menghitung biaya total dari paket Indiehome tersebut. Program tersebut akan mengoutput:
 * 'NAMA_PENDAFTAR NO_KTP TOTAL_BIAYA'
 * contoh: 'Rani 10049581293 500000'
 *
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN FUNCTION / METHODS
 * - HANYA diperbolehkan untuk mengambil properties .length dari String
 *
 */

var name = 'Ananda Puja' // silakan berikan nilai bebas
var nomor_ktp = '234234' //silahkan berikan nilai bebas
var alamat = 'Jakarta' // bisa diisi dengan alamat Jakarta atau Surabaya atau Yogyakarta atau Bandung selain alamat tersebut silahkan keluarkan output seperti yang diminta
var jenis_rumah = 'Normal' //bisa diisi dengan 3 jenis rumah normal atau large atau kosan selain jenis rumah tersebut silahkan keluarkan output seperti yang diminta
var hargaDasar;
var hargaJenisRumah;
var hargaIndihome;

// KONDISI 1
if( name == "" ) {
    console.log('NAMA HARUS DIISI!');
} else {
    // console.log(`Nama : ${name}`)
}

// KONDISI II
if( nomor_ktp.length < 4 || nomor_ktp === '' ) {
    console.log('NOMOR KTP TIDAK VALID');
} else {
    // console.log(`Nomor KTP : ${nomor_ktp}`)
}

// KONDISI ALAMAT
if ( alamat == 'Jakarta' || alamat == 'Surabaya' || alamat == 'Yogyakarta' || alamat == 'Bandung') {
    // console.log(`Alamat Rumah : ${alamat}`)
} else {
    console.log('ALAMAT TIDAK DIKETAHUI');
}

// HARGA ALAMAT
if( alamat == 'Jakarta' ) {
    hargaDasar = 100000;
    // console.log(`Harga Dasar : ${hargaDasar}`)
} else if( alamat == 'Surabaya' ) {
    hargaDasar = 50000;
    // console.log(`Harga Dasar : ${hargaDasar}`)
} else if( alamat == 'Yogyakarta' ) {
    hargaDasar = 45000;
    // console.log(`Harga Dasar : ${hargaDasar}`)
} else if( alamat == 'Bandung') {
    hargaDasar = 90000;
    // console.log(`Harga Dasar : ${hargaDasar}`)
} else {
    hargaDasar = false;
    console.log('Alamat tidak diketahui');
}

// if( alamat == 'Jakarta' || alamat == 'Surabaya' || alamat == 'Yogyakarta' || alamat == 'Bandung' ) {
// console.log(`Harga Dasar : ${hargaDasar}`)
// } else {
// }

// HARGA TIPE RUMAH
if( jenis_rumah == 'Normal' ) {
    hargaJenisRumah = 30000;
    // console.log(`Jenis Rumah: ${jenis_rumah}, Harga: ${hargaJenisRumah}`);
} else if( jenis_rumah == 'Large' ) {
    hargaJenisRumah = 50000;
    // console.log(`Jenis Rumah: ${jenis_rumah}, Harga: ${hargaJenisRumah}`);
} else {
    hargaJenisRumah = false;
    console.log('Tidak boleh mendaftar ke program ini');
}

//HARGA INDIHOME
if( hargaJenisRumah != false && hargaDasar != false) { 
    hargaIndihome = hargaDasar + hargaJenisRumah;
    // console.log(hargaIndihome);
} else {
    hargaIndihome = "Invalid";
}
console.log(`${name} ${nomor_ktp} ${hargaIndihome}`);