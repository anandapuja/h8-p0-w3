/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf etc
 */

 //////////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////

 // ALGORITMA
/**
 * GABUNGKAN SEMUA ARRAY DIMENSIONAL KE 1 ARRAY
 * JALANKAN LANGKAH PENAMBANG, SIMPAN DATA SEMUA HURUF C,S,G,D
 * HASIL AKHIR : KALKULASI JUMLAH HURUF YANG SAMA
 * BUAT TAMBANG BARU HASIL PENAMBANGAN SEBELUMNYA
 * PISAHKAN ARRAY KE DIMENSI ARRAY SEPERTI SEMULA
*/

function mineTycoon(mine, steps) {
	//implementasi function disini!

	//PSUEDOCODE
	/**
	 * SET gabungan TO array 0
	 * FOR 1 TO mine.length
	 * 		FOR 0 TO mine[1]length, increment
	 * 			PUSH TO gabungan
	 * 		ENDFOR
	 * ENDFOR
	*/

	/**
	 * SET hasil TO empty array
	 * FOR 0 TO steps
	 * 		IF find c OR s OR g OR d
	 * 			SAVE c OR s OR g OR d TO hasil
	 * 		ENDIF
	 * ENDFOR
	*/

	/**
	 * SET result TO empty array
	 * SET hasilC TO array 0, copper
	 * FOR 0 TO hasil.length
	 * 		IF hasil EQUAL TO c
	 * 			hasilC 0+1
	 * 		ENDIF
	 * ENDFOR
	 * IF hasilC NOT EQUAL TO 0
	 * 		PUSH to result
	 * ENDIF
	 * //do same code for next mine
	 * 
	 * RETURN RESULT
	 * 
    */

    /**
     * SET mineAkhir TO empty array
     * SET cek1 TO 0
     * SET cek2 TO lmine[]length
     * FOR 0 TO mine[]length
     *      SET mineSebelumAkhir TO empty array
     *      FOR cek1 TO cek2
     *          PUSH mineBaru to mineSebelumAkhir
     *      ENDFOR
     *      PUSH mineSebelumAkhir TO mineAkhir
     *      SET back mineSebelumAkhir TO empty array
     *      ADD cek1 TO mine[]length
     *      ADD cek2 TO mine[]length
     * ENDFOR
    */

	// GABUNGKAN SEMUA ARRAY KE SATU ARRAY
	var gabungan = mine[0];
	for( i = 1; i < mine.length; i++ ) {
		for( j = 0; j < mine[i].length; j++ ) {
			gabungan.push(mine[i][j]);
		}
	}

	// SIMPAN DATA C, S, G, D SELAMA STEP KE SATU VAR
	var hasil = [];
	for( j = 0; j < steps; j++ ) {
		if( gabungan[j] === 'c' || gabungan[j] === 's' || gabungan[j] === 'g' || gabungan[j] === 'd' ) {
			hasil.push(1, gabungan[j]);
		}
	}

	// MASUKKAN HASIL AKHIR KE 1 ARRAY DIMENSIONAL DENGAN KONDISI
	var result = [];
	var hasilC = [0, 'copper'];
	for( m = 0; m < hasil.length; m++ ) {
		if( hasil[m] === 'c' ) {
			hasilC[0]++
		}
	}
	if( hasilC[0] != 0 ) {
		result.push(hasilC);
	}

	var hasilS = [0, 'silver'];
	for( m = 0; m < hasil.length; m++ ) {
		if( hasil[m] === 's' ) {
			hasilS[0]++
		}
	}
	if( hasilS[0] != 0 ) {
		result.push(hasilS);
	}

	var hasilG = [0, 'gold'];
	for( m = 0; m < hasil.length; m++ ) {
		if( hasil[m] === 'g' ) {
			hasilG[0]++
		}
	}
	if( hasilG[0] != 0 ) {
		result.push(hasilG);
	}

	var hasilD = [0, 'diamond'];
	for( m = 0; m < hasil.length; m++ ) {
		if( hasil[m] === 'd' ) {
			hasilD[0]++
		}
	}
	if( hasilD[0] != 0 ) {
		result.push(hasilD);
	}

	// BUAT ARRAY TAMBANG BARU
	var mineBaru = [];
	if( steps < gabungan.length ) {
		for( i = 0; i < steps; i++ ) {
			mineBaru.push(' ');
		}
		for( k = gabungan.length - steps - 1; k < gabungan.length; k++ ) {
			mineBaru.push(gabungan[k]);
		}
	} else {
		for( i = 0; i < gabungan.length; i++ ) {
			mineBaru.push(' ');
		}
	}
	// console.log(mineBaru);

    // PISAHKAN ARRAY TAMBANG BARU KE DIMENSIONAL ARRAY MASING-MASING
    var mineAkhir = [];
    var cek1 = 0;
	var cek2 = mine[1].length;
	for(i = 0; i < mine.length; i++ ) {
        var mineSebelumAkhir = [];

		for( j = cek1; j < cek2; j++ ) {
			mineSebelumAkhir.push(mineBaru[j]);
		}
		mineAkhir.push(mineSebelumAkhir);
        mineSebelumAkhir = [];
		cek1 += mine[1].length;
		cek2 += mine[1].length;

	}
	// console.log(mineAkhir);

	return result;

}

var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// // [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]