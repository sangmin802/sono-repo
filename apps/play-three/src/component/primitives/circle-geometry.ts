import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-CircleGeometry}
 */
const createCircleGeometry = () => {
	const radius = 7;
	const segments = 24;
	const thetaStart = Math.PI * 0.2; // 그리기 시작하는 각도(라디안 계산)
	const thetaLength = Math.PI * 1.3; // 잘리는 부분을 제외한 얼만큼 그릴 것인지(라디안 계산)

	return new three.CircleGeometry(radius, segments, thetaStart, thetaLength);
};

export default createCircleGeometry();
