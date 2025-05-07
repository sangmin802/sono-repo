import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-ExtrudeGeometry}
 */
const createExtrudeGeometry = () => {
	const shape = new three.Shape();

	// shape.bezierCurveTo(제어점1x, 제어점1y, 제어점2x, 제어점2y, 도착지점x, 도착지점y);

	// 하트
	const x = -2.5;
	const y = -5;
	shape.moveTo(x + 2.5, y + 2.5); // 0,-2.5 시작
	shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y); // 이전 좌표에서 0,-2.5까지 직선(사실상 제자리), -0.5,-5를 거쳐서 -2.5,-5까지 도달하는 곡선
	shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5); // -2.5,-5에서 -5.5,-5를 거쳐서 -5.5,-1.5를 거쳐서 -5.5, -1.5 도달하는 곡선
	shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
	shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
	shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
	shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

	// 별
	// const x = 0; // 시작점
	// const y = 8; // 시작점
	// const c = 1;
	// const s = 3;
	// shape.moveTo(x, y);
	// shape.bezierCurveTo(x, y, x + c, y - c, x + c * 2, y - c * 4);
	// shape.bezierCurveTo(x + c * 2, y - c * 4, s, s, y - c * 4, x + c * 2);
	// shape.bezierCurveTo(y - c * 4, x + c * 2, y - c, x + c, y, x);
	// shape.bezierCurveTo(y, x, x + c, y - c, y - c * 4, x - c * 2);

	const extrudeSettings = {
		steps: 8, // 용도를 잘 모르겠음
		depth: 2, // 부피
		bevelEnabled: true, // 양 면을 자연스럽게 곡선으로 이어주는.. 음.. 뭐랄까.. 입체감..? 이거 근데 직접 보면서 하는게
		bevelThickness: 2, // 위 입체감 부피
		bevelSize: 2, // 위 입체감의 정도
		bevelSegments: 2 // 위 입체감의 단계 구분
	};

	return new three.ExtrudeGeometry(shape, extrudeSettings);
};

export default createExtrudeGeometry();
