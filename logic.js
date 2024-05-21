/*import { Pool } from "mysql2/typings/mysql/lib/Pool";
import { pool } from "./database";

async function getAllUsers() {
  const [rows] = await pool.execute('SELECT name FROM Users');
  return rows;
}

async function getUserById(id) {
  const [rows] = await pool.execute('SELECT * FROM Users WHERE id = ?', [id]);
  return rows[0] || null;
}

async function createUser(name, nickname, age, bio) {
  await pool.execute('INSERT INTO Users (name, nickname, age, bio) VALUES (?, ?, ?, ?)', [name, nickname, age, bio]);
}

async function updateUser(id, name, nickname, age, bio) {
  await pool.execute('UPDATE Users SET name = ?, nickname = ?, age = ?, bio = ? WHERE id = ?', [name, nickname, age, bio, id]);
}

async function deleteUser(id) {
  await pool.execute('DELETE FROM Users WHERE id = ?', [id]);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
*/




ID="AllUses"




