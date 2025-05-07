import { useEffect, useRef } from 'react';
import * as three from 'three';

import {
	BoxGeometry,
	CircleGeometry,
	ConeGeometry,
	CylinderGeometry,
	DodecahedronGeometry,
	ExtrudeGeometry,
	IcosahedronGeometry,
	LatheGeometry,
	OctahedronGeometry,
	ParametricGeometry
} from './primitives';

/**
 * @see {@link https://threejs.org/manual/#ko/fundamentals}
 */
const WhatIsThreejs = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const meshListRef = useRef<three.Mesh>(null);
	const isDragStartRef = useRef(false);

	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) return;

		// RENDERER
		// antialias: 화면내 요소들이 디지털 특성상 픽셀로 그려지는 이유로 직선이 아닌 곡선, 대각선들이 계단현상이 생겨보이는 점을 경계면을 자연스럽게 해줌 (성능 좀 떨어짐)
		const renderer = new three.WebGLRenderer({ antialias: true, canvas });

		// CAMERA
		const fov = 75; // 시야각 클수록 넓은 시야각
		const aspect = 2; // 캔버스 기본비율 별다른 사이즈 없으면 300*150이니깐 2
		const near = 0.1; // 카메라에서 0.1칸 앞에서부터 절두체 시작
		const far = 1000; // 카메라에서 5칸에서 절두체 끝 즉, 0.1칸에서 5칸까지 그 안에 있는 요소만 그림 (z축 기준)
		const camera = new three.PerspectiveCamera(fov, aspect, near, far);

		// 카메라를 z축으로 2칸 이동
		camera.position.z = 30;

		// SCENE
		// 최 상단 클래스로 화면에 뭘 보여주고싶으면 꼭 생성되어야 함
		const scene = new three.Scene();
		scene.background = new three.Color(0x222222); // 배경색

		// LIGHT
		// 광원 추가
		const color = 0xffffff;
		const intensity = 3;
		const light = new three.DirectionalLight(color, intensity);
		light.position.set(-2, 40, 40);
		scene.add(light);

		// GEOMETRY
		// 화면에 그려질 3d 요소
		const geometry = ParametricGeometry;

		const createMesh = <T extends three.BufferGeometry>(
			geometry: T,
			color: number,
			x: number
		) => {
			// MATERIAL
			// 색상 속성
			// const material = new three.MeshBasicMaterial({ color }); // 광원에 반응하지 않음
			const material = new three.MeshPhongMaterial({
				color,
				side: three.DoubleSide
				// wireframe: true
			}); // 광원에 반응함
			const mesh = new three.Mesh(geometry, material);
			mesh.position.set(x, 0, 0);

			scene.add(mesh);
			meshListRef.current = mesh;

			return mesh;
		};

		// MESH
		const mesh = createMesh(geometry, 0xfff948, 0);

		// SCENE에 추가
		function render() {
			if (!isDragStartRef.current) {
				// 기준 축을 정하고 걔를 기준으로 돌린다 생각
				// 이거 로테이션 x 이게 x 축을 기준으로 돌리는거 실제로 보면 y방향으로 돌리는것처럼 보임
				// mesh.rotateOnWorldAxis(new three.Vector3(0, 1, 0), 0.003);
				// mesh.rotateOnWorldAxis(new three.Vector3(1, 0, 0), 0.003);
			}

			renderer.render(scene, camera);
			requestAnimationFrame(render);
		}
		requestAnimationFrame(render);
	}, []);

	useEffect(() => {
		const mesh = meshListRef.current;
		const canvas = canvasRef.current;

		let x = 0;
		let y = 0;

		if (!canvas || !mesh) return;

		const onMouseDown = ({ clientX, clientY }: MouseEvent) => {
			isDragStartRef.current = true;
			x = clientX;
			y = clientY;
		};
		const onMouseUp = () => {
			isDragStartRef.current = false;
		};
		const onMouseLeave = () => {
			isDragStartRef.current = false;
		};
		const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
			if (!isDragStartRef.current) return;

			if (Math.abs(y - clientY) < 10 && Math.abs(x - clientX) < 10) return;

			// 마우스 이동 시 최대한 작은 단위의 라디안으로 조금씩 회전하도록 0.01 수치를 높여서 회전 속도 조절
			const deltaX = (clientX - x) * 0.01;
			const deltaY = (clientY - y) * 0.01;

			/**
			 * rotate.x, rotateOnAxis 이 둘은 기준 축의 방향이 변경될 수 있음. 단, 이들은 물체의 축 방향을 기준응로 함. 그 뜻은
			 * 기본적으로 x 축은 오른쪽으로 쭉, y축은 위쪽으로 z축은 앞쪽 이 방향들 이지만
			 * 내가 x축 기준으로 반바퀴 (180도) 회전시키면 y축의 방향은 아래쪽을 보고있음. 그래서 이 상태에서 y축을 돌려보면 그 기준 방향이 아래쪽으로 이동되어있기 때문에 반대방향으로 돌아가는것
			 * 그래서 x축을 360도 돌리면 원점이라 y축을 돌렸을 때 최초상태처럼 마우스와 같은 방향으로 돌아감
			 */

			// 세계선 기준 축 고정) y축을 기준으로 회전
			mesh.rotateOnWorldAxis(new three.Vector3(0, 1, 0), deltaX);
			// 세계선 기준 축 고정) x축을 기준으로 회전
			mesh.rotateOnWorldAxis(new three.Vector3(1, 0, 0), deltaY);

			x = clientX;
			y = clientY;
		};

		canvas.addEventListener('mousedown', onMouseDown);
		canvas.addEventListener('mouseup', onMouseUp);
		canvas.addEventListener('mouseleave', onMouseLeave);
		canvas.addEventListener('mousemove', onMouseMove);

		return () => {
			canvas.removeEventListener('mousedown', onMouseDown);
			canvas.removeEventListener('mouseup', onMouseUp);
			canvas.removeEventListener('mouseleave', onMouseLeave);
			canvas.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			width={900}
			height={450}
		/>
	);
};

export default WhatIsThreejs;
