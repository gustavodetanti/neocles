export function setLights(THREE, scene) {

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1000, 1000, 1000);
    scene.add(light);
    const light1 = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light1);

    return [light, light1];
}
