import type { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

/**
 * 적응형으로 지지고 볶아보려했지만..
 */
export const middleware = (request: NextRequest) => {
	const url = request.nextUrl;
	const { device } = userAgent(request);
	const viewport = device.type === 'mobile' ? 'mobile' : 'web';
	const response = NextResponse.rewrite(url);
	response.cookies.set('initViewport', viewport);

	// ssr 컴포넌트에서 조회
	// const cookieStore = cookies();
	// const initViewport = cookieStore.get('initViewport');

	return response;
};
