import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-IcosahedronGeometry}
 */
const createIcosahedronGeometry = () => {
	const radius = 7; // 이십면체 크기
	const detail = 0; // 이십면체 세부 정도 클 수록 둥글어짐

	return new three.IcosahedronGeometry(radius, detail);
};

export default createIcosahedronGeometry();
