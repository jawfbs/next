export type Listing = {
  id: string
  address: string
  price: number
  beds: number
  baths: number
  sqft?: number
  photoUrl?: string
}

// Dummy data for development
export const dummyListings: Listing[] = [
  { id: "1", address: "123 Maple St", price: 450000, beds: 3, baths: 2, sqft: 1800 },
  { id: "2", address: "456 Oak Ave", price: 625000, beds: 4, baths: 3, sqft: 2400 },
  { id: "3", address: "789 Pine Rd", price: 310000, beds: 2, baths: 1, sqft: 1100 },
]

// Real Spark API fetch — used in production
export async function getListings(): Promise<Listing[]> {
  const apiKey = process.env.SPARK_API_KEY

  if (!apiKey || apiKey === "dummy-key-for-now") {
    return dummyListings
  }

  const res = await fetch("https://sparkapi.com/v1/listings?_limit=20", {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: 300 }, // cache for 5 minutes
  })

  if (!res.ok) {
    console.error("Spark API error:", res.status)
    return dummyListings // fall back gracefully
  }

  const data = await res.json()

  // Map Spark's field names to your own clean shape
  return data.D.Results.map((r: any) => ({
    id: r.Id,
    address: r.StandardFields?.UnparsedAddress ?? "Address unavailable",
    price: r.StandardFields?.ListPrice ?? 0,
    beds: r.StandardFields?.BedsTotal ?? 0,
    baths: r.StandardFields?.BathroomsTotalInteger ?? 0,
    sqft: r.StandardFields?.BuildingAreaTotal ?? undefined,
    photoUrl: r.StandardFields?.Photos?.[0]?.Uri800 ?? undefined,
  }))
}
