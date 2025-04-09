function hitungUsername(namaLengkap) {
    const cleanNama = namaLengkap.toLowerCase().replace(/\s+/g, '');
    const hasil = new Set();

    function buatKombinasi(prefix, sisa) {
        if (prefix.length > 0 && prefix.length <= 6) {
            hasil.add(prefix);
        }

        if (prefix.length === 6) return;

        for (let i = 0; i < sisa.length; i++) {
            const huruf = sisa[i];
            const sisaLain = sisa.slice(0, i) + sisa.slice(i + 1);
            buatKombinasi(prefix + huruf, sisaLain);
        }
    }

    buatKombinasi('', cleanNama);

    console.log(`Total kombinasi username: ${hasil.size}`);

    return hasil.size;
}

hitungUsername("Naip Lovyu");