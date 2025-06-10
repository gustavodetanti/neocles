 
 import * as THREE from './../three.js-master/build/three.module.js';

export function setScene() {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);




    renderer.setClearColor(0xffffff, 1); // the default
    renderer.shadowMap.enabled = false;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 0.5;
    renderer.outputEncoding = THREE.sRGBEncoding;
    scene.background = new THREE.Color(0xffffff);
    //scene.fog = new THREE.FogExp2(0xffffff, 0.01);
    return [scene, camera, renderer];
}
