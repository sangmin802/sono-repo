import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-ExtrudeGeometry}
 */
const createExtrudeGeometry = () => {
	const shape = new three.Shape();

	// shape.bezierCurveTo(제어점1x, 제어점1y, 제어점2x, 제어점2y, 도착지점x, 도착지점y);

	// 하트
	// const x = -2.5;
	// const y = -5;
	// shape.moveTo(x + 2.5, y + 2.5); // 0,-2.5 시작
	// shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y); // 이전 좌표에서 0,-2.5까지 직선(사실상 제자리), -0.5,-5를 거쳐서 -2.5,-5까지 도달하는 곡선
	// shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5); // -2.5,-5에서 -5.5,-5를 거쳐서 -5.5,-1.5를 거쳐서 -5.5, -1.5 도달하는 곡선
	// shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
	// shape.bezierCurveTo(x + 3, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
	// shape.bezierCurveTo3x + 8, y + 3.5, x + 8, y, x + 5, y);
	// shape.bezierCurveTo(x +103.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

	// 곡선있는 별
	const angle = 5;
	const outer = 6;
	const outerRound = 5;
	const inner = 2;
	const innerRound = 2.3;
	const x = 0;
	const y = 0;

	// 3.14 1라디안 160도 * 2 = 360도 별 기준 총 10개의 포인트
	// 반시계방향으로 그리기 시작함
	const step = (Math.PI * 2) / 10;
	const outerRoundStep = step / 10;
	const innerRoundStep = step / 5;
	let rotation = step;

	shape.moveTo(
		x + Math.cos(rotation - outerRoundStep) * outerRound,
		y + Math.sin(rotation - outerRoundStep) * outerRound
	);

	for (let i = 0; i < angle; i++) {
		shape.bezierCurveTo(
			x + Math.cos(rotation - outerRoundStep) * outerRound,
			y + Math.sin(rotation - outerRoundStep) * outerRound,
			x + Math.cos(rotation) * outer,
			y + Math.sin(rotation) * outer,
			x + Math.cos(rotation + outerRoundStep) * outerRound,
			y + Math.sin(rotation + outerRoundStep) * outerRound
		);
		rotation += step;
		shape.lineTo(
			x + Math.cos(rotation - innerRoundStep) * innerRound,
			y + Math.sin(rotation - innerRoundStep) * innerRound
		);
		shape.bezierCurveTo(
			x + Math.cos(rotation - innerRoundStep) * innerRound,
			y + Math.sin(rotation - innerRoundStep) * innerRound,
			x + Math.cos(rotation) * inner,
			y + Math.sin(rotation) * inner,
			x + Math.cos(rotation + innerRoundStep) * innerRound,
			y + Math.sin(rotation + innerRoundStep) * innerRound
		);
		rotation += step;
		shape.lineTo(
			x + Math.cos(rotation - outerRoundStep) * outerRound,
			y + Math.sin(rotation - outerRoundStep) * outerRound
		);
	}

	// 곡선없는 별
	// rotation += step;
	// shape.lineTo(x + Math.cos(rotation) * inner, y + Math.sin(rotation) * inner);
	// rotation += step;
	// shape.lineTo(x + Math.cos(rotation) * outer, y + Math.sin(rotation) * outer);
	// rotation += step;
	// shape.lineTo(x + Math.cos(rotation) * inner, y + Math.sin(rotation) * inner);
	// rotation += step;
	// shape.lineTo(x + Math.cos(rotation) * outer, y + Math.sin(rotation) * outer);
	// rotation += step;
	// shape.lineTo(x + Math.cos(rotation) * inner, y + Math.sin(rotation) * inner);
	// rotation += step;
	// shape.lineTo(x + Math.cos(rotation) * outer, y + Math.sin(rotation) * outer);
	// rotation += step;
	// shape.lineTo(x + Math.cos(rotation) * inner, y + Math.sin(rotation) * inner);

	shape.closePath();

	const extrudeSettings = {
		steps: 8, // 용도를 잘 모르겠음
		depth: 1, // 부피
		bevelEnabled: true, // 양 면을 자연스럽게 곡선으로 이어주는.. 음.. 뭐랄까.. 입체감..? 이거 근데 직접 보면서 하는게
		bevelThickness: 2, // 위 입체감 부피
		bevelSize: 1.2, // 위 입체감의 정도
		bevelSegments: 3 // 위 입체감의 단계 구분
	};

	return new three.ExtrudeGeometry(shape, extrudeSettings);
};

export default createExtrudeGeometry();
