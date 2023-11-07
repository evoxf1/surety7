const AdminTable = ({ admins }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Admin Name</th>
            <th className="py-2 px-4 border-b">Hashed Password</th>
            <th className="py-2 px-4 border-b">Created At</th>
            <th className="py-2 px-4 border-b">Updated At</th>
            <th className="py-2 px-4 border-b">Deleted At</th>
          </tr>
        </thead>
        <tbody>
        <tr  className='bg-gray-100'>
              <td className="py-2 px-4 border-b">Admin ID </td>
              <td className="py-2 px-4 border-b">Admin</td>
              <td className="py-2 px-4 border-b">*********</td> {/* Placeholder for hashed password */}
              <td className="py-2 px-4 border-b">Created At</td> {/* Placeholder for created at */}
              <td className="py-2 px-4 border-b">Updated At</td> {/* Placeholder for updated at */}
              <td className="py-2 px-4 border-b">Deleted At</td> {/* Placeholder for deleted at */}
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
