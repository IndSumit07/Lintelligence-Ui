import React, { useState } from "react";
import { Copy, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentCustomizer from "../components/ComponentCustomizer";
import { SimpleTable, StyledTable, SortableTable, DataTable, PricingTable } from "../components/TableComponents";

const TableSection = () => {
  const [state, setState] = useState("Preview");
  const [copied, setCopied] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [customConfig, setCustomConfig] = useState(null);

  const tableComponents = [
    {
      name: "Simple Table",
      component: <SimpleTable />,
      implementationCode: `export const SimpleTable = ({ customStyle }) => {
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
};`,
      usageCode: `import { SimpleTable } from "../components/TableComponents";

const MyComponent = () => (
  <SimpleTable />
);`,
      description: "Basic table with minimal styling",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "padding"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "transparent", borderRadius: "0", padding: "0" }
      }
    },
    {
      name: "Styled Table",
      component: <StyledTable />,
      implementationCode: `export const StyledTable = ({ customStyle }) => {
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
                <span className={\`px-3 py-1 rounded-full text-xs font-space \${
                  row.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-orange-500/20 text-orange-400"
                }\`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`,
      usageCode: `import { StyledTable } from "../components/TableComponents";

const MyComponent = () => (
  <StyledTable />
);`,
      description: "Table with card styling and status badges",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "16" }
      }
    },
    {
      name: "Sortable Table",
      component: <SortableTable />,
      implementationCode: `export const SortableTable = ({ customStyle }) => {
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
              <td className="py-4 px-6 text-white/70 font-space">\${row.price}</td>
              <td className="py-4 px-6 text-white/70 font-space">{row.stock}</td>
              <td className="py-4 px-6 text-white/70 font-space">{row.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`,
      usageCode: `import { SortableTable } from "../components/TableComponents";

const MyComponent = () => (
  <SortableTable />
);`,
      description: "Interactive table with column sorting",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "16" }
      }
    },
    {
      name: "Data Table",
      component: <DataTable />,
      implementationCode: `export const DataTable = ({ customStyle }) => {
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
};`,
      usageCode: `import { DataTable } from "../components/TableComponents";

const MyComponent = () => (
  <DataTable />
);`,
      description: "Full-featured table with search and actions",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius"],
        defaultConfig: { borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "transparent", borderRadius: "0" }
      }
    },
    {
      name: "Pricing Table",
      component: <PricingTable />,
      implementationCode: `export const PricingTable = ({ customStyle }) => {
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
          className={\`card-base rounded-2xl p-8 \${
            plan.popular ? 'border-orange-500/50 ring-2 ring-orange-500/20' : ''
          }\`}
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
          <button className={\`w-full py-3 rounded-lg font-semibold transition-all \${
            plan.popular ? 'btn-primary' : 'btn-secondary'
          }\`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
};`,
      usageCode: `import { PricingTable } from "../components/TableComponents";

const MyComponent = () => (
  <PricingTable />
);`,
      description: "Pricing comparison table layout",
      customization: {
        relevantFields: ["borderColor", "backgroundColor", "borderRadius", "padding"],
        defaultConfig: { borderColor: "transparent", backgroundColor: "transparent", borderRadius: "0", padding: "0" }
      }
    }
  ];

  const currentTable = tableComponents[currentIndex];

  const generateCustomCode = (config) => {
    if (!config) return currentTable.usageCode;

    const styles = [];
    if (config.borderColor && currentTable.customization.relevantFields.includes("borderColor")) styles.push(`    border: "2px solid ${config.borderColor}"`);
    if (config.backgroundColor && currentTable.customization.relevantFields.includes("backgroundColor")) styles.push(`    backgroundColor: "${config.backgroundColor}"`);
    if (config.borderRadius && currentTable.customization.relevantFields.includes("borderRadius")) styles.push(`    borderRadius: "${config.borderRadius}px"`);
    if (config.padding && currentTable.customization.relevantFields.includes("padding")) styles.push(`    padding: "${config.padding}px"`);

    return `<div style={{
${styles.join(",\n")}
}}>
  <${currentTable.component.type.name} />
</div>`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const nextTable = () => {
    if (currentIndex < tableComponents.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCustomConfig(null);
    }
  };

  const prevTable = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setCustomConfig(null);
    }
  };

  return (
    <div className="mt-8 md:mt-12 w-full flex flex-col justify-center items-center gap-6 md:gap-8 font-space px-4">
      {/* Description */}
      <div className="w-full max-w-5xl text-center">
        <p className="text-white/60 font-space text-sm md:text-base">
          Professional table components for displaying data.
        </p>
      </div>

      {/* Quick Navigation Grid - NOW AT TOP */}
      <div className="w-full max-w-5xl card-base rounded-xl p-4 md:p-6">
        <h4 className="text-white font-michroma text-base md:text-lg mb-4">All Tables</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {tableComponents.map((table, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-space text-xs md:text-sm transition-all ${
                currentIndex === index
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {table.name}
            </button>
          ))}
        </div>
      </div>

      {/* Preview/Code Section */}
      <div className="w-full max-w-5xl flex justify-center items-start flex-col gap-4">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3 sm:gap-5">
          <div className="flex gap-2 md:gap-3 w-full sm:w-auto">
            <button
              onClick={() => setState("Preview")}
              className={`${
                state === "Preview"
                  ? "btn-primary"
                  : "btn-secondary"
              } px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base flex-1 sm:flex-none`}
            >
              Preview
            </button>
            <button
              onClick={() => setState("Code")}
              className={`${
                state === "Code"
                  ? "btn-primary"
                  : "btn-secondary"
              } px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base flex-1 sm:flex-none`}
            >
              Code
            </button>
            <button
              onClick={() => setState("Customize")}
              className={`${
                state === "Customize"
                  ? "btn-primary"
                  : "btn-secondary"
              } px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base flex-1 sm:flex-none`}
            >
              Customize
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={prevTable}
              disabled={currentIndex === 0}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-xs md:text-sm text-white font-medium px-3 md:px-4 text-center min-w-[140px] md:min-w-[180px]">
              {currentTable.name}
            </span>
            <button
              onClick={nextTable}
              disabled={currentIndex === tableComponents.length - 1}
              className={`p-2.5 md:p-3 rounded-lg glass-effect hover:bg-white/10 transition ${
                currentIndex === tableComponents.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Description of current component */}
        <div className="w-full">
          <p className="text-white/50 font-space text-xs md:text-sm italic">
            {currentTable.description}
          </p>
        </div>

        {/* Preview/Code/Customize Area */}
        <div className="w-full">
          {state === "Customize" ? (
            <ComponentCustomizer
              onConfigChange={(config) => setCustomConfig(config)}
              defaultConfig={currentTable.customization?.defaultConfig}
              relevantFields={currentTable.customization?.relevantFields}
              customFields={currentTable.customization?.customFields}
            >
              {(config) => React.cloneElement(currentTable.component, {
                customStyle: {
                  borderColor: config.borderColor,
                  backgroundColor: config.backgroundColor,
                  borderRadius: config.borderRadius ? `${config.borderRadius}px` : undefined,
                  padding: config.padding ? `${config.padding}px` : undefined,
                }
              })}
            </ComponentCustomizer>
          ) : (
            <div className="w-full px-6 md:px-12 py-8 md:py-12 border border-white/10 rounded-xl relative glass-effect">
              {state === "Preview" ? (
                <div className="flex justify-center items-center min-h-[320px] overflow-x-auto">
                  {currentTable.component}
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  {/* Implementation Code */}
                  {currentTable.implementationCode && (
                    <div className="relative w-full overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white/70 font-michroma text-sm">Component Code</h4>
                        <button
                          onClick={() => copyToClipboard(currentTable.implementationCode)}
                          className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                        >
                          {copied === currentTable.implementationCode ? <Check size={14} /> : <Copy size={14} />}
                          {copied === currentTable.implementationCode ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <SyntaxHighlighter
                        language="jsx"
                        showLineNumbers
                        wrapLines
                        customStyle={{
                          borderRadius: "12px",
                          padding: "20px 24px",
                          background: "#000",
                          fontSize: "13px",
                          fontFamily: "monospace",
                          lineHeight: "1.7",
                          margin: 0,
                        }}
                        style={vscDarkPlus}
                      >
                        {currentTable.implementationCode.trim()}
                      </SyntaxHighlighter>
                    </div>
                  )}

                  {/* Usage Code */}
                  <div className="relative w-full overflow-x-auto">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white/70 font-michroma text-sm">Usage Example</h4>
                      <button
                        onClick={() => copyToClipboard(customConfig ? generateCustomCode(customConfig) : currentTable.usageCode)}
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs"
                      >
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentTable.usageCode) ? <Check size={14} /> : <Copy size={14} />}
                        {copied === (customConfig ? generateCustomCode(customConfig) : currentTable.usageCode) ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <SyntaxHighlighter
                      language="jsx"
                      showLineNumbers
                      wrapLines
                      customStyle={{
                        borderRadius: "12px",
                        padding: "20px 24px",
                        background: "#000",
                        fontSize: "13px",
                        fontFamily: "monospace",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                      style={vscDarkPlus}
                    >
                      {customConfig ? generateCustomCode(customConfig) : currentTable.usageCode.trim()}
                    </SyntaxHighlighter>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableSection;
