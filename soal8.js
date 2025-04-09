const produk = [
    { nama: "TV", kategori: "elektronik", harga: 1000 },
    { nama: "headphone", kategori: "elektronik", harga: 200 },
    { nama: "baju", kategori: "fashion", harga: 50 },
    { nama: "gitar", kategori: "musik", harga: 300 },
    { nama: "sepatu", kategori: "olahraga", harga: 80 },
    { nama: "kamera", kategori: "elektronik", harga: 600 },
];

const pelanggan = [
    {nama: "Rina",
        minat: ["elektronik", "musik"],
        beli: ["TV", "headphone"]
    },
    {nama: "Budi",
        minat: ["fashion", "musik"],
        beli: ["baju", "gitar"]
    },
    {
        nama: "Hartono",
        minat: ["olahraga", "elektronik"],
        beli: ["sepatu", "kamera"]
    }
];

function rekomendasiProduk(namaPelanggan) {
    const dataPelanggan = pelanggan.find(p => p.nama.toLowerCase() === namaPelanggan.toLowerCase());

    if (!dataPelanggan) {
        console.log("Pelanggan tidak ditemukan.");
        return [];
    }

    const { minat } = dataPelanggan;

    const hasil = produk
        .filter(p => minat.includes(p.kategori))
        .map(p => p.nama);

    console.log(`Rekomendasi untuk ${namaPelanggan}:`, hasil);
    return hasil;
}

rekomendasiProduk("Rina");