import { getAlaramApi } from '@/service/news';

export async function GET() {
	const data = await getAlaramApi();

	return Response.json({ data });
}
