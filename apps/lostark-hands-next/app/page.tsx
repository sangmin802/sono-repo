import type { FC } from 'react';

/**
 * 이벤트, 업데이트 영역별로 독립적인 로딩 에러를 갖고싶은데, 그럴려면 그 route 가 생성되어야하는것 같음..
 * 그냥 서버사이드에서 데이터를 받아오고 이에 따른 error.tsx, loading.tsx가 적용되게 하려면 그냥 이 page 에서 다 해줘야 하나..
 */
const Page: FC = () => {
	return <div className="lg:flex"></div>;
};

export default Page;
