import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-OctahedronGeometry}
 */
const createOctahedronGeometry = () => {
	const radius = 4;
	const detail = 0;

	return new three.OctahedronGeometry(radius, detail);
};

export default createOctahedronGeometry();
