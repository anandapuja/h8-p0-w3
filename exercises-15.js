// Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {

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

    var hasil = []
    for( i = 0; i < animals.length; i++ ) {
        for( j = 0; j < animals.length; j++ ) {
            if( animals[i][0] == animals[j][0] && i != j ) {
                hasil.push(animals[[j]]);
            }
        }
    }

    console.log(hasil)

}

  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'anoa', 'kuda', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]





// // function groupAnimals(animals) {

// //     animals.sort(); // Urutkan sesuai abjad sehingga mudah pengecekan
// //     var kelAnimalsSama = [[]]; // Buat variabel hasil
// //     kelAnimalsSama[0].push(animals[0]); // Masukkan indeks pertama sebagai pembanding
// //     // console.log(kelAnimalsSama);

// //     var cek = 0;
// //     // Buat variabel pengecek yang akan di increment
    
// //     for( i = 1; i < animals.length; i++ ) {
// //         // console.log(animals[i][0])
// //         if( animals[i][0] == kelAnimalsSama[cek][0][0] ) { // Jika huruf pertama hewan kedua == huruf pertama hewan pertama
// //             kelAnimalsSama[cek].push(animals[i]); // Jika huruf sama, masukkan hewan kedua ke var hasil
// //         }
// //         else {
// //             cek += 1; // Tambah + 1 indeks array hasil
// //             kelAnimalsSama[cek] = [animals[i]]; // Masukkan ke var hasil
// //         }
// //     }

// //     // Kembalikan nilai
// //     return kelAnimalsSama;

// // }
  
// //   // TEST CASES
// //   console.log(groupAnimals(['cacing', 'ayam', 'anoa', 'kuda', 'kancil']));
// //   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// //   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // //   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



// let string = 'aacab'


/**
 * [
 *  [a, 2],
 *  [b, 2],
 *  [c, 1]
 * ]
 */

 