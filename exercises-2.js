// Mengakses Nilai Dalam Array

function balikString(kalimat) {

    var balikinString = "";
    for( i = kalimat.length -1; i >= 0; i-- ) {
        balikinString += kalimat[i];
        }
    return balikinString;
    
}

console.log(balikString('hello world!'));