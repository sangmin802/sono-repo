import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';

/**
 * @see {@link https://threejs.org/manual/#ko/primitives#Diagram-ParametricGeometry}
 */
const createParametricGeometry = () => {
	/**
	 * ParametricGeometry에 전달되는 두번째, 세번째 구분값으로 1을 나누었을 때 나오는 지점들이 반환됨.
	 * 이 지점들로 x, y 좌표를 계산하는것.
	 * 구분값이 커질수록 부드럽게 곡선을 그릴 수 있음.
	 * ex) 2, 3 전달 시
	 * v: 0, 0.5, 1 (x좌표 구성을 위한 값)
	 * u: 0, 0.33, 0.66, 1 (y좌표 구성을 위한 값)
	 */
	/**
	 * @example x, y 좌표가 0에 가까워질 수록 z가 돌출되는 피라미드형
	 */
	// return new ParametricGeometry(
	// 	(v: number, u: number, target: three.Vector3) => {
	// 		const x = u * 4 - 2; // 가로 방향 좌표 (-2 ~ 2)
	// 		const y = v * 4 - 2; // 세로 방향 좌표 (-2 ~ 2)
	// 		const z = 2 - Math.max(Math.abs(x), Math.abs(y)); // z축 (2D 평면)
	// 		console.log(x, y);
	// 		target.set(x, y, z);
	// 	},
	// 	4,
	// 	4
	// );
	/**
	 * @example 구
	 * theta x,y 좌표 기반의 수평 원의 그려지는 각도
	 *   - ex: Math.PI/3 원의 60도 만큼의 영역만
	 * phi 수직에서부터 그려지는 각도
	 *   - ex: Math.PI/6 원의 30도 만큼의 영역만
	 */
	return new ParametricGeometry(
		(u, v, target) => {
			const theta = u * (Math.PI * 0.4);
			const phi = v * (Math.PI * 0.7);
			/**
			 * 2d였다면 x는 Math.cos, y는 Math.sin이였겠지만, 3d이기 때문에 단면이 아닌 입체로 그려지는 위치의 x, y좌표를 구해야 함
			 * assets의 구 이미지 보면 이해 됨
			 * 그래서 x라면 theta 기준 x좌표인 cos * phi 기준 x좌표인 sin을 곱해주는 것
			 */
			const x = Math.sin(phi) * Math.cos(theta) * 10; // X 좌표
			const y = Math.sin(phi) * Math.sin(theta) * 10; // Y 좌표
			const z = Math.cos(phi) * 10; // Z 좌표
			target.set(x, y, z); // 결과 좌표 설정
		},
		50, // 가로 세그먼트 (세밀도)
		50 // 세로 세그먼트 (세밀도)
	);
	/**
	 * @example 물병
	 * 솔직히.. 너무여러움
	 */
	// return new ParametricGeometry(
	// 	(v: number, u: number, target: three.Vector3) => {
	// 		// 각 구간의 수치가 원주에서는 어느정도인지 --> 라디안 구하기 0~1이니깐 0.1*Math.PI 이면 360도에서 10% 정도의 위치의 라디안
	// 		v *= 2 * Math.PI; // 360도 기준, 각 구간의 원주를 구함 (라디안)
	// 		u *= 2 * Math.PI; // 360도 기준, 각 구간의 원주를 구함 (라디안)
	// 		let x;
	// 		let z;
	// 		// y축 계산 구분 원주가 180도보다 작은 경우
	// 		// y축 구간이 0.5 미만인 경우
	// 		if (u < Math.PI) {
	// 			x =
	// 				3 * Math.cos(u) * (1 + Math.sin(u)) +
	// 				2 * (1 - Math.cos(u) / 2) * Math.cos(u) * Math.cos(v);
	// 			z =
	// 				-8 * Math.sin(u) -
	// 				2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
	// 			// 180도보다 큰 경우
	// 			// y축 구간이 0.5 이상인 경우
	// 		} else {
	// 			x =
	// 				3 * Math.cos(u) * (1 + Math.sin(u)) +
	// 				2 * (1 - Math.cos(u) / 2) * Math.cos(v + Math.PI);
	// 			z = -8 * Math.sin(u);
	// 		}
	// 		const y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);
	// 		target.set(x, y, z);
	// 	},
	// 	25,
	// 	25
	// );
};

export default createParametricGeometry();
