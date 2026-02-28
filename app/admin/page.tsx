tsx
export default function AdminPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Customize Your Site</h1>

      <label className="block mb-2 font-medium">Brand Color</label>
      <input type="color" defaultValue="#16a34a" className="mb-6 w-full h-12 rounded" />

      <label className="block mb-2 font-medium">Font Style</label>
      <select className="mb-6 w-full border rounded p-2">
        <option>Inter (Modern)</option>
        <option>Playfair Display (Luxury)</option>
        <option>Roboto (Clean)</option>
      </select>

      <label className="block mb-2 font-medium">Upload Logo</label>
      <input type="file" className="mb-6" />

      <button className="bg-black text-white px-6 py-3 rounded-xl w-full">Save Changes</button>
    </main>
  )
}
