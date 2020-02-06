// Logic Challenge - Mengelompokkan Hewan

/**
 1. Urutkan hewan sesuai abjad.
 2. Buat kondisi pembanding, isi dengan hewan pertama.
 3. Bandingkan masing2 hewan dengan pembanding, jika sama masukkan hewan ke var penampung
 4. Jika beda, push dulu penampung ke hasil.
    - Kosongkan lagi penampung
    - Isi penampung dengan data terkini
    - Ubah pembanding dengan data terkini.
 5. Push data yang masih ada di penampung terakhir ke hasil.
 */

function groupAnimals(animals) {

    // Sorting Manual
    var sorting = [];
    for( i = 0; i < animals.length; i++ ) {
        for( j = 0; j <animals.length; j++ ) {
            if( animals[i] < animals[j] ) {
                sorting = animals[i];
                animals[i] = animals[j];
                animals[j] = sorting;
            }
        }
    }

    // console.log(animals)

    var hasil = [];
    var kelompokHewan = [];
    var cek = animals[0][0];
    for( i = 0; i < animals.length; i++ ) {
        if( animals[i][0] == cek[0][0] ) {
            kelompokHewan.push(animals[i]);
        }
        else {
            hasil.push(kelompokHewan);
            kelompokHewan = [];
            kelompokHewan.push(animals[i]);
            cek = animals[i][0];
        }
    }
    hasil.push(kelompokHewan);

    return hasil;

}

  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'anoa', 'kuda', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]