import AdminTable from "@/components/AdminTable";
import CompanyTable from "@/components/CompanyTable";
import EmployeeTable from "@/components/EmployeeTable";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <CompanyTable />
      <EmployeeTable />
      <AdminTable />
      <div className="flex justify-around  items-center gap-4 w-full">
        {" "}
        <Link href={'/addCompany'}>
          {" "}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Company
          </button>
        </Link>
        <Link href={'/addEmployee'}>
          {" "}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Employee
          </button>
        </Link>
      </div>
    </div>
  );
}
