import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-DodecahedronGeometry}
 */
const createDodecahedronGeometry = () => {
	const radius = 7; // 크기
	const detail = 1; // 수치가 커질수록 점점 둥글어짐
	return new three.DodecahedronGeometry(radius, detail);
};

export default createDodecahedronGeometry();
