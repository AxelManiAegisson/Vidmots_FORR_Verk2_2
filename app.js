'use strict';

/* global THREE */

function main() {
	//tengi við html
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    //set upp myndavél
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;
    //teikna senuna
    const scene = new THREE.Scene();
    //smá lighting
    {
	  const color = 0xFFFFFF;
	  const intensity = 1;
	  const light = new THREE.DirectionalLight(color, intensity);
	  //staðsetning ljóss
	  light.position.set(-1, 2, 4);
	  scene.add(light);
	}

    //set upp kassa
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    //lita kassa
    const material = new THREE.MeshPhongMaterial({color: 0x8844AA});
    //geri kassa að objecti
    const cube = new THREE.Mesh(geometry, material);
    //teikna kasssa
    scene.add(cube);
    //teikna senuna
    renderer.render(scene, camera);
    //animation
	function render(time){
		time *= 0.001; //skipti time yfir í sekúndur
		//kubbur snýst
		cube.rotation.x = time;
		cube.rotation.y = time;

		renderer.render(scene, camera);

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
}

main();
