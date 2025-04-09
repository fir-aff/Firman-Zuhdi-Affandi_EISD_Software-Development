function hitungKembalian(totalBayar, totalBelanja) {
    let kembalian = totalBayar - totalBelanja;
    const pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    const hasil = {};

    for (let i = 0; i < pecahan.length; i++) {
        const uang = pecahan[i];
        const jumlah = Math.floor(kembalian / uang);

        if (jumlah > 0) {
            hasil[uang] = jumlah;
            kembalian -= uang * jumlah;
        }
    }

    console.log("Total bayar : ",totalBayar);
    console.log("Total belanja : ", totalBelanja);
    return hasil;
}
console.log(`Hasil : `, hitungKembalian(10000, 7500),"\n");
console.log(`Hasil : `,hitungKembalian(5000, 1100),"\n");
console.log(`Hasil : `,hitungKembalian(178000, 90500),"\n");