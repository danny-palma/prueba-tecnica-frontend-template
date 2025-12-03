import { initialData } from "@/lib/mockData";
import { expensiveCalculation } from "@/lib/utils";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const filter = (url.searchParams.get("filter") || "").toLowerCase();
    const sort = (url.searchParams.get("sort") || "asc");
    const page = parseInt(url.searchParams.get("page") || "1", 10) || 1;
    const pageSize = parseInt(url.searchParams.get("pageSize") || "24", 10);

    let result = initialData.filter((item) => {
      if (!filter) return true;
      const f = filter;
      return item.name.toLowerCase().includes(f) ||
        item.description.toLowerCase().includes(f) ||
        item.category.toLowerCase().includes(f);
    });

    const totalItems = result.length;
    const totalValue = result.reduce((acc, cur) => acc + cur.price, 0);

    result = result.sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));

    const start = (page - 1) * pageSize;
    const pageItems = result.slice(start, start + pageSize);

    const processed = expensiveCalculation(pageItems);

    return NextResponse.json({
      items: processed,
      totalItems,
      totalValue,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
