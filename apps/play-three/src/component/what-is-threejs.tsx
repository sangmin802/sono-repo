import { useEffect, useRef } from 'react';
import * as three from 'three';

/**
 * @see {@link https://threejs.org/manual/#ko/fundamentals}
 */
const WhatIsThreejs = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

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
		const far = 5; // 카메라에서 5칸에서 절두체 끝 즉, 0.1칸에서 5칸까지 그 안에 있는 요소만 그림 (z축 기준)
		const camera = new three.PerspectiveCamera(fov, aspect, near, far);

		// 카메라를 z축으로 2칸 이동
		camera.position.z = 2;

		// SCENE
		// 최 상단 클래스로 화면에 뭘 보여주고싶으면 꼭 생성되어야 함
		const scene = new three.Scene();

		// LIGHT
		// 광원 추가
		const color = 0xffffff;
		const intensity = 3;
		const light = new three.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		scene.add(light);

		// GEOMETRY
		// 화면에 그려질 3d 요소 정육면체
		const boxWidth = 1;
		const boxHeight = 1;
		const boxDepth = 1;
		const geometry = new three.BoxGeometry(boxWidth, boxHeight, boxDepth);

		const createMesh = (
			geometry: three.BoxGeometry,
			color: number,
			x: number
		) => {
			// MATERIAL
			// 색상 속성
			// const material = new three.MeshBasicMaterial({ color: 0x44aa88 }); // 광원에 반응하지 않음
			const material = new three.MeshPhongMaterial({ color }); // 광원에 반응함
			const mesh = new three.Mesh(geometry, material);
			mesh.position.set(x, 0, -1);

			scene.add(mesh);

			return mesh;
		};
		// MESH
		// 0xHexcode 색상의 정육면체 클래스 생성
		const meshes = [
			createMesh(geometry, 0xff5733, 0),
			createMesh(geometry, 0x4cff33, -2),
			createMesh(geometry, 0x00fffd, 2)
		];

		// SCENE에 추가
		function render(time: number) {
			time *= 0.001; // convert time to seconds

			meshes.forEach((mesh, index) => {
				const speed = 1 + index * 0.1;
				mesh.rotation.x = time * speed;
				mesh.rotation.y = time * speed;
			});

			renderer.render(scene, camera);
			requestAnimationFrame(render);
		}
		requestAnimationFrame(render);
	}, []);

	return <canvas ref={canvasRef} />;
};

export default WhatIsThreejs;
