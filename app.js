const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk mengizinkan aplikasi Express membaca body dengan format JSON
app.use(express.json());

// Endpoint untuk menangani permintaan POST dari URL https://happy-puce-ox.cyclic.app/mainPost
app.post("/mainPost", (req, res) => {
  const data = req.body; // Mendapatkan data yang dikirimkan dalam permintaan POST

  // Lakukan operasi lain yang diperlukan dengan data yang diterima
  console.log(data);

  // Kirim respon berhasil
  res.status(200).json({ message: "Data received successfully" });
});

// Memulai server Express
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
