tsx
export default async function Home() {
  const res = await fetch('http://localhost:3000/api/listings')
  const listings = await res.json()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((l: any) => (
          <div key={l.id} className="border rounded-xl shadow p-4">
            <h2 className="font-semibold text-lg">{l.address}</h2>
            <p className="text-green-600 font-bold">{l.price}</p>
            <p className="text-sm text-gray-500">{l.beds} bed · {l.baths} bath</p>
          </div>
        ))}
      </div>
    </main>
  )
}
