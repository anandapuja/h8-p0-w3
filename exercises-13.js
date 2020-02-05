// Logic Challenge - Target Terdekat

/**
 * 
 * Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
 */

function targetTerdekat(arr) {
    // you can only write your code here!

    // Cari posisi O
    var posisi;
    for( var i = 0; i < arr.length; i++ ) {
        if( arr[i] == 'o' ) {
            posisi = i;
            break;
        }   
    }
    // console.log(posisi);

    // Hitung jarak O ke kiri sampai ketemu X
    var jarakKiri = 0;
    for( j = posisi; j >= 0; j-- ) {
        if( arr[j] == 'x' ) {
            jarakKiri = posisi - j;
            break;
        }
    }
    // console.log(jarakKiri)

    // Hitung jarak O ke kanan sampai ketemu X
    var jarakKanan = 0;
    for( k = posisi; k < arr.length; k++ ) {
        if( arr[k] == 'x' ) {
            jarakKanan = k - posisi;
            break;
        }
    }
    // console.log(jarakKanan)

    // Buat kesimpulan kondisinya seperti output yang diinginkan
    if( jarakKiri < jarakKanan && jarakKiri !== 0 ) {
        return jarakKiri;
    }
    else if( jarakKiri < jarakKanan && jarakKiri === 0 ) {
        return jarakKanan;
    }
    else if( jarakKanan < jarakKiri && jarakKanan !== 0 ) {
        return jarakKanan;
    }
    else if( jarakKanan < jarakKiri && jarakKanan === 0 ) {
        return jarakKiri;
    }
    else if( jarakKiri == 0 && jarakKanan === 0 ) {
        return 0;
    }

  }
  
  // TEST CASES
    console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
    console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
    console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
    console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
    console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2