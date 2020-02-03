/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here
/* ALGORITMA
    - Simpan harga dasar dalam sebuah variabel HARGADASAR dengan nilai 25.000
    - Buat variabel NAMA
    - Buat variabel TAHUN KELAHIRAN
    - Buat variabel STATUS

    1.
    - Buat kondisi untuk menampilkan nilai booelan dari variabel STATUS
    2.
    - Kondisi 1 jika sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN kurang dari 2, tampilkan NAMA dan HARGA DASAR

    - Kondisi 2 jika sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN lebih besar dari sama dengan 2 dan sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN lebih kecil dari sama dengan 10 atau BUKAN PELAJAR, maka tampilkan NAMA dan HARGADASAR * 1.5;

    - Kondisi 3 jika sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN lebih besar dari sama dengan 11 dan sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN lebih kecil dari sama dengan 18 dan PELAJAR, maka tampilkan NAMA dan HARGADASAR * 1.25;

    - Kondisi 4 jika sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN lebih besar dari sama dengan 19 dan sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN lebih kecil dari 120 atau BUKAN PELAJAR, maka tampilkan NAMA dan HARGADASAR * 2;

    - Kondisi 5 jika sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN lebih besar dari 19 dan sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN lebih kecil dari sama dengan 120 dan PELAJAR, maka tampilkan NAMA dan HARGADASAR * 1.5;

    - Kondisi 6 jika sisa bagi TAHUN SEKARANG dengan TAHUN KELAHIRAN lebih besar dari 120 dan TAHUN KELAHIRAN lebih kecil dari 1900, maka tampilkan "Invalid Age"


    PSUEDOCODE
    SET hargaDasar VALUE 25000
    SET nama VALUE any
    SET tahunKelahiran VALUE any
    SET status VALUE pelajar or bukan pelajar

    IF status == Pelajar
        status = true;
    ELSE IF status == Bukan Pelajar
        status = false;

    IF 2020 % tahunKelahiran < 2
        PRINT Nama : nama, Harga : hargaDasar;
    ELSE IF 2020 % tahunKelahiran >= 2 AND 2020 % tahunKelahiran <= 10 OR bukan pelajar
        PRINT Nama : nama, Harga : hargaDasar * 1.5;
    ELSE IF 2020 % tahunKelahiran >= 11 && 2020 % tahunKelahiran <= 18 AND pelajar
        PRINT Nama : nama, Harga : hargaDasar * 1.25;
    ELSE IF 2020 % tahunKelahiran >= 19 && 2020 % tahunKelahiran <= 120 OR bukan pelajar
        PRINT Nama : nama, Harga : hargaDasar * 2;
    ELSE IF 2020 % tahunKelahiran >= 19 && 2020 % tahunKelahiran <= 120 AND pelajar
        PRINT Nama : nama, Harga : hargaDasar * 1.5;
    ELSE IF 2020 % tahunKelahiran > 120 && tahunKelahiran < 1900
        PRINT Invalid Age.
    END IF

*/