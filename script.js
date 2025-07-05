const produk = [
  { nama: "Madu Asli", harga: 50000 },
  { nama: "Kopi Hitam", harga: 30000 },
  { nama: "Keripik Pisang", harga: 20000 },
];

const container = document.getElementById("produk-container");

produk.forEach(item => {
  const div = document.createElement("div");
  div.className = "produk";
  div.innerHTML = `<h3>${item.nama}</h3><p>Rp ${item.harga}</p>`;
  container.appendChild(div);
});
