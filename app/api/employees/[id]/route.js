// pages/api/employees/[id]/route.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function get(req, res) {
  const { id } = req.query;

  try {
    const employee = await prisma.employee.findOne({
      where: { ID: parseInt(id, 10) },
    });

    if (!employee) {
      res.status(404).json({ message: "Employee not found" });
    } else {
      res.status(200).json({ employee });
    }
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ message: "Failed to fetch employee" });
  }
}

export async function del(req, res) {
  const { id } = req.query;

  try {
    await prisma.employee.delete({
      where: { ID: parseInt(id, 10) },
    });

    res.status(200).json({ message: "Employee Deleted" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ message: "Failed to delete employee" });
  }
}
