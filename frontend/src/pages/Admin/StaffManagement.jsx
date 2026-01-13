import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function StaffManagement() {
  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch('http://localhost:3000/users/get/staffs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!res.ok) {
          throw new Error('Failed to fetch staffs');
        }
  
        const data = await res.json();
        setStaff(data.staffs || []);
        setLoading(false);
  
      } catch (error) {
        console.error('Error fetching staffs:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStaffs();
  }, [])

  if (loading) return <i><p className='p-8'>Loading Staffs........</p></i>;
  
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">
        Staff Management = ({staff.length}) staffs
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">E-mail</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Department</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {staff.map((staff) => (
              <tr key={staff._id} className='border-t hover:bg-gray-50'>
                <td className="p-3">{staff.firstname} {staff.lastname}</td>
                <td className="p-3">{staff.email}</td>
                <td className="p-3">{staff.phone}</td>
                <td className="p-3">{staff.department}</td>
                <td className="p-3">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {staff.length === 0 && (
              <tr>
                <td colSpan="5" className='p-4 text-venter text-gray-500'>
                  No Staff Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <button onClick={() => navigate('/admin/dashboard')}className="bg-primary text-white h-12 rounded-lg font-bold mt-2 hover:bg-blue-600 transition p-5 text-center" >
          Dashboard
        </button>
      </div>
    </div>
  )
}