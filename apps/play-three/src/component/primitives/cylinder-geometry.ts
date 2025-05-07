import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-CylinderGeometry}
 */
const createCylinderGeometry = () => {
	const radiusTop = 4; // 원통 상단의 크기
	const radiusBottom = 4; // 원통 하단의 크기
	const height = 8;
	const radialSegments = 20; // 수치가 클 수록 원통이 더 둥글어짐
	const heightSegments = 2; // 용도를 잘 모르겠음
	const openEnded = false; // 원통 바닥을 뚤허버릴지 말지
	const thetaStart = Math.PI * 0.4; // 원통을 그리기 시작할 각도(라디안)
	const thetaLength = Math.PI / 10; // 270도 그릴꺼임 원통을 그릴 각도(라디안)

	return new three.CylinderGeometry(
		radiusTop,
		radiusBottom,
		height,
		radialSegments,
		heightSegments
		// openEnded,
		// thetaStart,
		// thetaLength
	);
};

export default createCylinderGeometry();
