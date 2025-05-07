import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-ConeGeometry}
 */
const createConeGeometry = () => {
	const radius = 6; // 원뿔 둥굴기의 크기인것 같음. 작을수록 원뿔의 원 부분이 작음
	const height = 8;
	const radialSegments = 20; // 각 갯수로, 수치가 클 수록 원뿔이 더 둥글어짐
	const heightSegments = 2; // 용도를 잘 모르겠음
	const openEnded = false; // 원뿔 바닥을 뚤허버릴지 말지
	const thetaStart = Math.PI * 0.4; // 원뿔을 그리기 시작할 각도(라디안)
	const thetaLength = Math.PI * 1.5; // 270도 그릴꺼임 원뿔을 그릴 각도(라디안)

	return new three.ConeGeometry(
		radius,
		height,
		radialSegments,
		heightSegments
		// openEnded,
		// thetaStart,
		// thetaLength
	);
};

export default createConeGeometry();
