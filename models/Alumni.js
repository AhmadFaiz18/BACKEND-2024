// import database
const db = require ("../config/database");


// membuat class Alumni
class Alumni {
  // buat fungsi
   // Mendapatkan semua resource
   static async all() {
    const query = "SELECT * FROM alumni";
    const [rows] = await db.execute(query);
    return rows;
  }

  // Menambahkan resource baru
  static async create(data) {
    const query = `
      INSERT INTO alumni (name, phone, address, graduation_year, status_company_name, position)
      VALUES (?, ?, ?, ?, ?, ?)`;
    const [result] = await db.execute(query, [
      data.name,
      data.phone,
      data.address,
      data.graduation_year,
      data.status_company_name,
      data.position,
    ]);
    return { id: result.insertId, ...data };
  }

  // Mengedit resource
  static async update(id, data) {
    const query = `
      UPDATE alumni SET name = ?, phone = ?, address = ?, graduation_year = ?, 
      status_company_name = ?, position = ? WHERE id = ?`;
    await db.execute(query, [
      data.name,
      data.phone,
      data.address,
      data.graduation_year,
      data.status_company_name,
      data.position,
      id,
    ]);
    return { id, ...data };
  }

  // Menghapus resource
  static async delete(id) {
    const query = "DELETE FROM alumni WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return { id, affectedRows: result.affectedRows };
  }

  // Mendapatkan detail resource
  static async find(id) {
    const query = "SELECT * FROM alumni WHERE id = ?";
    const [rows] = await db.execute(query, [id]);
    return rows[0] || null;
  }

  // Mencari resource berdasarkan nama
  static async search(name) {
    const query = "SELECT * FROM alumni WHERE name LIKE ?";
    const [rows] = await db.execute(query, [`%${name}%`]);
    return rows;
  }

  // Mendapatkan resource berdasarkan status
  static async findByStatus(status) {
    const query = "SELECT * FROM alumni WHERE status_company_name = ?";
    const [rows] = await db.execute(query, [status]);
    return rows;
  }
}

// export class Alumni
module.exports = Alumni;
