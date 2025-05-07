import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-BoxGeometry}
 */
const createBoxGeometry = () => {
	const boxWidth = 10;
	const boxHeight = 10;
	const boxDepth = 10;

	// segment값이 존재하긴하는데, 딱히 뭔차이가 있는건지 모르겠음

	return new three.BoxGeometry(boxWidth, boxHeight, boxDepth);
};

export default createBoxGeometry();
