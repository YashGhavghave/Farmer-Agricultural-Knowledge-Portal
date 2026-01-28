import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { 
  ShieldCheck, 
  UserX, 
  UserCheck, 
  ShieldAlert, 
  RefreshCw,
  Mail,
  UserCog
} from "lucide-react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 1. Role-Based Security Guard
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    // Decode token to check role (assuming a standard JWT structure)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (localStorage.role !== 'admin') {
        alert("Unauthorized Access: Admins Only");
        navigate("/");
        return;
      }
    } catch (e) {
      navigate("/login");
    }

    fetchUsers();
  }, [token, navigate]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data.users || []);
    } catch (err) {
      handleAuthError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthError = (err) => {
    if (err.response && (err.response.status === 401 || err.response.status === 403)) {
      navigate("/");
    }
  };

  const toggleRestrict = async (id, currentlyRestricted) => {
    if (!window.confirm(currentlyRestricted ? 'Unrestrict user?' : 'Restrict user?')) return;
    try {
      const action = currentlyRestricted ? "unrestrict" : "restrict";
      await axios.post(`http://localhost:3000/api/admin/users/${id}/${action}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchUsers();
    } catch (err) {
      alert("Action failed");
    }
  };

  const changeRole = async (id, role) => {
    if (!window.confirm(`Change user role to ${role}?`)) return;
    try {
      await axios.post(`http://localhost:3000/api/admin/users/${id}/role`, { role }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchUsers();
    } catch (err) {
      alert("Role change failed");
    }
  };

  if (loading) return (
    <div className="flex h-screen items-center justify-center">
      <RefreshCw className="animate-spin text-blue-600" size={48} />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-black text-gray-900">
              <ShieldCheck className="text-blue-600" size={32} />
              Admin Management
            </h1>
            <p className="text-gray-500">Monitor and manage user permissions and access</p>
          </div>
          <button 
            onClick={fetchUsers}
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 font-bold text-gray-700 shadow-sm border border-gray-200 hover:bg-gray-50 transition-all"
          >
            <RefreshCw size={18} /> Refresh Data
          </button>
        </div>

        {/* Stats Summary (Optional Visuals) */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Total Users" value={users.length} color="blue" />
          <StatCard label="Admins" value={users.filter(u => u.role === 'admin').length} color="purple" />
          <StatCard label="Restricted" value={users.filter(u => u.restricted).length} color="red" />
        </div>

        {/* Users Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="px-6 py-4">User Details</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((u) => (
                  <tr key={u._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          {u.avatar ? (
                            <img src={u.avatar} alt="" className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm" />
                          ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                              {(u.name || 'U')[0].toUpperCase()}
                            </div>
                          )}
                          {u.restricted && (
                            <div className="absolute -bottom-1 -right-1 rounded-full bg-red-500 p-1 text-white border-2 border-white">
                              <UserX size={10} />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{u.name}</p>
                          <p className="flex items-center gap-1 text-sm text-gray-500">
                            <Mail size={14} /> {u.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                        u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <UserCog size={14} /> {u.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {u.restricted ? (
                        <span className="flex items-center gap-1 text-sm font-bold text-red-600">
                          <ShieldAlert size={16} /> Restricted
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-sm font-bold text-green-600">
                          <UserCheck size={16} /> Active
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => toggleRestrict(u._id, u.restricted)}
                          className={`rounded-lg px-3 py-1 text-xs font-bold transition-colors ${
                            u.restricted 
                            ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                            : 'bg-red-50 text-red-600 hover:bg-red-100'
                          }`}
                        >
                          {u.restricted ? 'Unrestrict' : 'Restrict'}
                        </button>
                        <button 
                          onClick={() => changeRole(u._id, u.role === 'admin' ? 'user' : 'admin')}
                          className="rounded-lg bg-gray-900 px-3 py-1 text-xs font-bold text-white hover:bg-gray-800 transition-colors"
                        >
                          {u.role === 'admin' ? 'Make User' : 'Make Admin'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple internal component for the stats
function StatCard({ label, value, color }) {
  const colors = {
    blue: "text-blue-600 bg-blue-50",
    purple: "text-purple-600 bg-purple-50",
    red: "text-red-600 bg-red-50"
  };
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform hover:scale-105`}>
      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{label}</p>
      <p className={`text-3xl font-black ${colors[color].split(' ')[0]}`}>{value}</p>
    </div>
  );
}