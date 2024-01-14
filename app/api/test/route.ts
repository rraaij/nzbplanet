import { NextRequest, NextResponse } from "next/server";
//
// type ResponseData = {
//   message: string;
// };
//
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>,
// ) {
//   res.status(200).json({ message: "Hello from NZB Planet!" });
// }

export async function GET() {
  const res = await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=030e0502e2bbaa8bd7801e0316f05127&query=james%20bond",
  );
  const data = await res.json();
  // return NextResponse.json(data);
  console.log("[ROUTE::test]", { data });
  return data;
}
