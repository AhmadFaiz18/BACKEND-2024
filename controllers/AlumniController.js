// import Model Alumni
const Alumni = require("../models/Alumni");

// buat class AlumniController
class AlumniController {
  // buat fungsi
   // Mendapatkan semua resource
   async index(req, res) {
    const data = await Alumni.all();
    if (data.length > 0) {
      res.status(200).json({ message: "Get All Resource", data, code: 200 });
    } else {
      res.status(200).json({ message: "Data is empty", data: [], code: 200 });
    }
  }

  // Menambahkan resource baru
  async store(req, res) {
    const { name, phone, address, graduation_year, status_company_name, position } = req.body;

    if (!name || !phone || !address || !graduation_year || !status_company_name || !position) {
      return res.status(422).json({ message: "All fields must be filled correctly", code: 422 });
    }

    const result = await Alumni.create({ name, phone, address, graduation_year, status_company_name, position });
    res.status(201).json({ message: "Resource is added successfully", data: result, code: 201 });
  }

  // Mengedit resource
  async update(req, res) {
    const { id } = req.params;
    const { name, phone, address, graduation_year, status_company_name, position } = req.body;

    if (!name || !phone || !address || !graduation_year || !status_company_name || !position) {
      return res.status(422).json({ message: "All fields must be filled correctly", code: 422 });
    }

    const result = await Alumni.update(id, { name, phone, address, graduation_year, status_company_name, position });
    res.status(200).json({ message: "Resource is updated successfully", data: result, code: 200 });
  }

  // Menghapus resource
  async destroy(req, res) {
    const { id } = req.params;
    const result = await Alumni.delete(id);
    res.status(200).json({ message: "Resource is deleted successfully", data: result, code: 200 });
  }

  // Mendapatkan detail resource
  async show(req, res) {
    const { id } = req.params;
    const result = await Alumni.find(id);
    if (result) {
      res.status(200).json({ message: "Get Detail Resource", data: result, code: 200 });
    } else {
      res.status(404).json({ message: "Resource not found", code: 404 });
    }
  }

  // Mencari resource berdasarkan nama
  async search(req, res) {
    const { name } = req.params;
    const result = await Alumni.search(name);
    if (result.length > 0) {
      res.status(200).json({ message: "Search Resource by name", data: result, code: 200 });
    } else {
      res.status(404).json({ message: "Resource not found", data: [], code: 404 });
    }
  }

  // Mendapatkan resource fresh graduate
  async freshGraduate(req, res) {
    const result = await Alumni.findByStatus("fresh-graduate");
    if (result.length > 0) {
      res.status(200).json({ message: "Get Fresh Graduate Resource", data: result, code: 200 });
    } else {
      res.status(200).json({ message: "Data is empty", data: [], code: 200 });
    }
  }

  // Mendapatkan resource employed
  async employed(req, res) {
    const result = await Alumni.findByStatus("employed");
    if (result.length > 0) {
      res.status(200).json({ message: "Get Employed Resource", data: result, code: 200 });
    } else {
      res.status(200).json({ message: "Data is empty", data: [], code: 200 });
    }
  }
}

// membuat object AlumniController
const object = new AlumniController();

// export object AlumniController
module.exports = object;
  