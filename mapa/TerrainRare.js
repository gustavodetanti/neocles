import * as THREE from './../three.js-master/build/three.module.js';
 
//o={w,h,noise,color,wire}
export function TerrainRare(o) {
    let w = 200, h = 200;
    if (o && o.w) { w = o.w; };
    if (o && o.h) { h = o.h; };
    let rh = o.noise || 4;

    if (o.posY || o.posY == 0) { } else
        o.posY = -6;
    let res = o.divs||parseInt(w / 10);
    const group = new THREE.Group();
    const geometry = new THREE.PlaneGeometry(w, h, res, res);
    //let g=ModifyPlaneWithBitmap(geometry,res,(bmp)=>{console.log(bmp)})
    let planePoints = [];
    // Get the vertices of the PlaneGeometry
    const vertices = geometry.attributes.position.array;

    let xx = 0;
    let zz = 0;
    let isBorder = true;
    // Change the vertices (modify the geometry)
    for (let i = 0; i < vertices.length; i += 3) {

        if (vertices[i] == -w / 2 || vertices[i + 1] == -h / 2 || vertices[i] == w / 2 || vertices[i + 1] == h / 2) {
           // console.log(vertices[i], vertices[i + 1], vertices[i + 2]);
            vertices[i + 2] = -1; // Move the vertices along the y-axis

        } else {
            vertices[i + 2] += Math.random() * rh; // Move the vertices along the y-axis

            // if(Math.random()<0.01) vertices[i + 2] += Math.random() * 10;
        }

        planePoints.push({ i: i, x: vertices[i], y: vertices[i + 1], z: vertices[i + 2] });

        xx += 3;
        if (xx >= res) {
            xx = 0;
            zz += 3;
        }


    }

    // Update the geometry to reflect the changes
    geometry.attributes.position.needsUpdate = true;

    const material = new THREE.MeshPhongMaterial({
        color: o.color || 0xbbff88,
        wireframe: o.wire || false,
        opacity: 1,
        transparent: false,
    });




    const plane = new THREE.Mesh(geometry, material); //bmpMaterial());

    plane.position.x = 0 * 1;
    plane.position.y = o.posY * 1;
    plane.position.z = 0 * 1;

    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    //plane.rotation.y =  Math.PI;
    group.add(plane);
    /*
    if(fn){  terrainBmp(fn);//plane;
    return;
    }*/
    if (window.terrainCreated)
        window.terrainCreated(plane, planePoints);

    return plane;

}
