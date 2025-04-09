const menu = {
    "Ayam Goreng Krispi": { tipe: "makanan", harga: 15000 },
    "Ayam Puk Puk": { tipe: "makanan", harga: 13000 },
    "Ayam Bakar": { tipe: "makanan", harga: 20000 },
    "Es teh": { tipe: "minuman", harga: 5000 },
    "Es Jeruk": { tipe: "minuman", harga: 7000 }
};

const pajakItem = {
    makanan: 0.05,
    minuman: 0.03
};

const pajakTransaksi = 0.15;

const pesanan = {
    "Rehan Whangsap": {
        "Ayam Bakar": 2,
        "Es teh": 1
    },
    "Amba Roni": {
        "Ayam Puk Puk": 1,
        "Es teh": 3
    },
    "Faiz Ngawi": {
        "Ayam Goreng Krispi": 1,
        "Ayam Puk Puk": 1,
        "Ayam Bakar": 1,
        "Es teh": 1,
        "Es Jeruk": 1
    }
};

function hitungTotalPesanan(nama, daftarPesanan) {
    let subtotal = 0;

    for (const item in daftarPesanan) {
        const jumlah = daftarPesanan[item];
        const dataMenu = menu[item];
        const harga = dataMenu.harga;
        const tipe = dataMenu.tipe;
        const pajak = pajakItem[tipe];
    
        const totalPerItem = (harga + (harga * pajak)) * jumlah;
        subtotal += totalPerItem;
    }

    const totalAkhir = subtotal + (subtotal * pajakTransaksi);

    console.log(`Total untuk ${nama}: Rp ${Math.round(totalAkhir).toLocaleString("id-ID")}`);
}

for (const nama in pesanan) {
    hitungTotalPesanan(nama, pesanan[nama]);
}