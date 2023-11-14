'use client'
import AdminTable from '@/components/AdminTable';
import CompanyTable from '@/components/CompanyTable';
import EmployeeTable from '@/components/EmployeeTable';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  // If the user is not authenticated, show the login page
  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Link href="/login">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    );
  }

  // If the user is authenticated, show the content
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Your content goes here */}
      <CompanyTable />
      <EmployeeTable />
      <AdminTable />
      <div className="flex justify-around items-center gap-4 w-full">
        <Link href="/addCompany">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Company
          </button>
        </Link>
        <Link href="/addEmployee">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Employee
          </button>
        </Link>
      </div>
    </div>
  );
}
