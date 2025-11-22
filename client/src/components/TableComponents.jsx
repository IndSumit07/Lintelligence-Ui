import React, { useState } from "react";
import { ChevronUp, ChevronDown, Search, Filter, MoreVertical } from "lucide-react";

// Simple Table
export const SimpleTable = ({ customStyle }) => {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  ];

  return (
    <div className="w-full max-w-4xl overflow-x-auto" style={customStyle}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 px-4 text-white/70 font-space text-sm">Name</th>
            <th className="text-left py-3 px-4 text-white/70 font-space text-sm">Email</th>
            <th className="text-left py-3 px-4 text-white/70 font-space text-sm">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="py-3 px-4 text-white font-space text-sm">{row.name}</td>
              <td className="py-3 px-4 text-white/70 font-space text-sm">{row.email}</td>
              <td className="py-3 px-4 text-white/70 font-space text-sm">{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styled Table
export const StyledTable = ({ customStyle }) => {
  const data = [
    { id: 1, name: "React", category: "Framework", downloads: "12M", status: "Active" },
    { id: 2, name: "Vue", category: "Framework", downloads: "8M", status: "Active" },
    { id: 3, name: "Angular", category: "Framework", downloads: "5M", status: "Active" },
    { id: 4, name: "Svelte", category: "Framework", downloads: "2M", status: "Growing" },
  ];

  return (
    <div className="w-full max-w-4xl card-base rounded-2xl overflow-hidden" style={customStyle}>
      <table className="w-full">
        <thead className="bg-white/5">
          <tr>
            <th className="text-left py-4 px-6 text-white font-michroma text-sm">Name</th>
            <th className="text-left py-4 px-6 text-white font-michroma text-sm">Category</th>
            <th className="text-left py-4 px-6 text-white font-michroma text-sm">Downloads</th>
            <th className="text-left py-4 px-6 text-white font-michroma text-sm">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
              <td className="py-4 px-6 text-white font-space">{row.name}</td>
              <td className="py-4 px-6 text-white/70 font-space">{row.category}</td>
              <td className="py-4 px-6 text-white/70 font-space">{row.downloads}</td>
              <td className="py-4 px-6">
                <span className={`px-3 py-1 rounded-full text-xs font-space ${
                  row.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-orange-500/20 text-orange-400"
                }`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Sortable Table
export const SortableTable = ({ customStyle }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [data, setData] = useState([
    { id: 1, product: "Laptop", price: 999, stock: 45, sales: 234 },
    { id: 2, product: "Mouse", price: 29, stock: 120, sales: 567 },
    { id: 3, product: "Keyboard", price: 79, stock: 89, sales: 345 },
    { id: 4, product: "Monitor", price: 299, stock: 34, sales: 123 },
  ]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sorted);
  };

  return (
    <div className="w-full max-w-4xl card-base rounded-2xl overflow-hidden" style={customStyle}>
      <table className="w-full">
        <thead className="bg-white/5">
          <tr>
            {['product', 'price', 'stock', 'sales'].map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                className="text-left py-4 px-6 text-white font-michroma text-sm cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortConfig.key === key && (
                    sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
              <td className="py-4 px-6 text-white font-space">{row.product}</td>
              <td className="py-4 px-6 text-white/70 font-space">${row.price}</td>
              <td className="py-4 px-6 text-white/70 font-space">{row.stock}</td>
              <td className="py-4 px-6 text-white/70 font-space">{row.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Data Table with Actions
export const DataTable = ({ customStyle }) => {
  const data = [
    { id: 1, user: "Alice Johnson", email: "alice@example.com", joined: "2024-01-15" },
    { id: 2, user: "Bob Smith", email: "bob@example.com", joined: "2024-02-20" },
    { id: 3, user: "Carol White", email: "carol@example.com", joined: "2024-03-10" },
  ];

  return (
    <div className="w-full max-w-5xl" style={customStyle}>
      <div className="card-base rounded-2xl overflow-hidden">
        {/* Header with Search */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-white font-michroma text-lg">Users</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input
                type="text"
                placeholder="Search users..."
                className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>
            <button className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
              <Filter size={18} className="text-white/70" />
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left py-4 px-6 text-white/70 font-space text-sm">User</th>
              <th className="text-left py-4 px-6 text-white/70 font-space text-sm">Email</th>
              <th className="text-left py-4 px-6 text-white/70 font-space text-sm">Joined</th>
              <th className="text-right py-4 px-6 text-white/70 font-space text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 text-white font-space">{row.user}</td>
                <td className="py-4 px-6 text-white/70 font-space">{row.email}</td>
                <td className="py-4 px-6 text-white/70 font-space">{row.joined}</td>
                <td className="py-4 px-6 text-right">
                  <button className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                    <MoreVertical size={16} className="text-white/70" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Pricing Table
export const PricingTable = ({ customStyle }) => {
  const plans = [
    { name: "Free", price: "$0", features: ["5 Projects", "Basic Support", "1GB Storage"] },
    { name: "Pro", price: "$29", features: ["Unlimited Projects", "Priority Support", "10GB Storage", "Advanced Analytics"], popular: true },
    { name: "Enterprise", price: "$99", features: ["Unlimited Everything", "24/7 Support", "100GB Storage", "Custom Integration"] },
  ];

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6" style={customStyle}>
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`card-base rounded-2xl p-8 ${
            plan.popular ? 'border-orange-500/50 ring-2 ring-orange-500/20' : ''
          }`}
        >
          {plan.popular && (
            <span className="px-3 py-1 bg-orange-500 text-black text-xs font-semibold rounded-full mb-4 inline-block">
              Popular
            </span>
          )}
          <h3 className="text-2xl font-michroma text-white mb-2">{plan.name}</h3>
          <p className="text-4xl font-michroma text-orange-400 mb-6">{plan.price}<span className="text-lg text-white/50">/mo</span></p>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="text-white/70 font-space text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                {feature}
              </li>
            ))}
          </ul>
          <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
            plan.popular ? 'btn-primary' : 'btn-secondary'
          }`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
};
