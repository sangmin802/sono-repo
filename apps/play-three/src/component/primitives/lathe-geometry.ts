import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-LatheGeometry}
 *
 * x, y 좌표들의 벡터들을 담아서 그 2차원 선을 돌리면서 도형을 그림
 *  (3, -4)
	•	(3.596, -3.2)
	•	(4.175, -2.4)
	•	(4.721, -1.6)
	•	(5.217, -0.8)
	•	(5.648, 0)
	•	(5.995, 0.8)
	•	(5.243, 1.6)
	•	(4.382, 2.4)
	•	(3.417, 3.2)
	위의 좌표들을 선으로 이었을 때 나오는 2차원 선을 3d로 한바퀴 돌린다 생각
 */
const createLatheGeometry = () => {
	const points = [new three.Vector2(0, -4)];
	for (let i = 0; i < 10; ++i) {
		points.push(new three.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.8));
	}

	const segments = 20; // 클 수록 각이 적고 둥글어짐
	// const phiStart = Math.PI * 0.25;
	// const phiLength = Math.PI * 1.5;

	return new three.LatheGeometry(points, segments);
};

export default createLatheGeometry();
