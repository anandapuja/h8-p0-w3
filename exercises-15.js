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




// let string = 'aacab'


/**
 * [
 *  [a, 2],
 *  [b, 2],
 *  [c, 1]
 * ]
 */

 