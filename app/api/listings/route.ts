js
export async function GET() {
  return Response.json([
    { id: 1, address: "123 Maple St", price: "$450,000", beds: 3, baths: 2 },
    { id: 2, address: "456 Oak Ave", price: "$625,000", beds: 4, baths: 3 },
    { id: 3, address: "789 Pine Rd", price: "$310,000", beds: 2, baths: 1 }
  ])
}
