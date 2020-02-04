// Logic Challenge - Mengelompokkan Angka

function mengelompokkanAngka(arr) {
    
    // Tampung Output
    var angkaGenap = [];
    var angkaGanjil = [];
    var angkaBagiTiga = [];

    // Buat kondisi output ke masing2 variabel output
    for( i = 0; i <= arr.length -1; i++ ) {
        if( arr[i] % 2 == 0 && arr[i] % 3 != 0 ) {
            angkaGenap.push(arr[i]);
        }
        else if( arr[i] % 2 == 1 && arr[i] % 3 != 0 ) {
            angkaGanjil.push(arr[i]);
        }
        else {
            angkaBagiTiga.push(arr[i]);
        }
    }
    
    var kelompokAngka = [];
    // Masukkan array di masing2 output ke output terakhir
    kelompokAngka.push(angkaGenap)
    kelompokAngka.push(angkaGanjil)
    kelompokAngka.push(angkaBagiTiga)
    // console.log(kelompokAngka);

    // Return
    return kelompokAngka;

  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
