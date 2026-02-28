import { getListings } from "@/lib/listings"

export default async function Home() {
  const listings = await getListings()

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Available Properties</h1>
      <p className="text-gray-500 mb-8">{listings.length} listings found</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((l) => (
          <div
            key={l.id}
            className="rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Photo */}
            <div className="bg-gray-100 h-48 w-full">
              {l.photoUrl ? (
                <img
                  src={l.photoUrl}
                  alt={l.address}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">
                  No photo
                </div>
              )}
            </div>

            {/* Card body */}
            <div className="p-4">
              <p className="font-semibold text-gray-900 text-sm leading-snug mb-1">
                {l.address}
              </p>
              <p className="text-xl font-bold text-blue-600 mb-2">
                ${l.price.toLocaleString()}
              </p>
              <div className="flex gap-3 text-sm text-gray-500">
                <span>{l.beds} bed</span>
                <span>·</span>
                <span>{l.baths} bath</span>
                {l.sqft && (
                  <>
                    <span>·</span>
                    <span>{l.sqft.toLocaleString()} sqft</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
