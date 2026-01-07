export default function StaffManagement() {
  const staff = [
    {
      id: 1,
      name: "Dr. John Doe",
      role: "Doctor",
      department: "Cardiology",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Receptionist",
      department: "Front Desk",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Staff Management</h2>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="px-6 py-3">{s.name}</td>
                <td className="px-6 py-3">{s.role}</td>
                <td className="px-6 py-3">{s.department}</td>
                <td className="px-6 py-3 text-center space-x-3">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
