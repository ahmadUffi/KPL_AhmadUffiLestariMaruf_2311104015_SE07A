import { config } from "dotenv";
import express from "express";

const app = express();
config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// welcome route
app.get("/", (req, res) => {
  res.send("Hello World! guysss kelas 01");
});

// create a mahasiswa route
app.post("/mahasiswa", (req, res) => {
  try {
    const { nim, nama_lengkap, email, no_hp, tanggal_lahir, jenis_kelamin } =
      req.body;

    // validate request body
    if (
      !nim ||
      !nama_lengkap ||
      !email ||
      !no_hp ||
      !tanggal_lahir ||
      !jenis_kelamin
    ) {
      return res.status(400).json({
        statusCode: 400,
        message: "Bad Request",
        error: "All fields are required",
      });
    }

    res.status(201).json({
      statusCode: 201,
      message: "Mahasiswa created successfully",
      data: {
        nim: nim,
        nama_lengkap: nama_lengkap,
        email: email,
        no_hp: no_hp,
        tanggal_lahir: tanggal_lahir,
        jenis_kelamin: jenis_kelamin,
      },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// get all mahasiswa route

// get a mahasiswa by id route

// update a mahasiswa by id route

// delete a mahasiswa by id route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
