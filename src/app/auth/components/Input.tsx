export default function Input({ label, type, value, onChange }: {
  label: string;
  type: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
        required
      />
    </div>
  );
}
