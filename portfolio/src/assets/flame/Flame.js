import React from 'react';
import * as THREE from 'three';
import './Flame.css';
import { Lensflare, LensflareElement } from './Lensflare.js';

export default class Flame extends React.Component{
    /**
     * @ props.title
     * @ props.picture
     * @ props.description
     * 
     * return a react component of game card IN 3D
     */

    //rr = React.createRef();
    render() {
        return(
            // <div ref={this.rr} />
            <canvas id = "Flame-c" ref={ref => (this.mount = ref)} />
        )
    }
    componentDidMount() {
      // renderer, scene, and camera
        // hook the renderer to the canvas
        const canvas = this.mount
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
          canvas: canvas});
        renderer.outputEncoding = THREE.sRGBEncoding;
            
        
        const scene = new THREE.Scene();
        scene.background = new THREE.Color().setHSL( 0.51, 0.4, 0.01 );
        scene.fog = new THREE.Fog( scene.background, 3500, 15000 );

        var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 15000 );
        camera.position.set(0, 0, 250);
        camera.up.set(0, 0, 1);
        camera.lookAt(0, 0, 0);


        // the target flame
        const flamepivot = new THREE.Object3D();
        scene.add(flamepivot);
        // lensflares
				const textureLoader = new THREE.TextureLoader();
				const textureFlare0 = textureLoader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/lensflare/lensflare0.png' );
				const textureFlare3 = textureLoader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/lensflare/lensflare3.png' );
				addLight( 0.55, 0.9, 0.5);
				function addLight( h, s, l) {
					const light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
					light.color.setHSL( h, s, l );
					// light.position.set( x, y, z );
					flamepivot.add( light );

					const lensflare = new Lensflare();
          // console.log("ccc", lensflare)
					lensflare.addElement( new LensflareElement( textureFlare0, 700, 0, light.color ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );
					light.add( lensflare );
				}

        //the butterfly
        const butterflyMain = new THREE.Object3D();
        butterflyMain.position.z = 20
        scene.add(butterflyMain);

        



        const butterflyPivot = new THREE.Object3D();
        butterflyMain.add(butterflyPivot);

        const sphereGeometry = new THREE.CircleGeometry(10, 5);
        const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00, side: THREE.DoubleSide,});
        
        const leftwingpivot = new THREE.Object3D();
        butterflyPivot.add(leftwingpivot)
        const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
        sunMesh.position.x = 10
        leftwingpivot.rotation.set(Math.PI / 2, 0, 0);
        leftwingpivot.add(sunMesh);

        const rightwingpivot = new THREE.Object3D();
        butterflyPivot.add(rightwingpivot)

        const rightwingMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
        rightwingMesh.position.x = 10
        rightwingpivot.rotation.set(Math.PI / 2, 0, 0);
        
        rightwingpivot.add(rightwingMesh);

        const sg = new THREE.CircleGeometry(5, 5);
        const rightwingMeshdown = new THREE.Mesh(sg, sunMaterial);
        rightwingMeshdown.position.x = 6
        rightwingMeshdown.position.y = -10
        const leftwingMeshdown = new THREE.Mesh(sg, sunMaterial);
        leftwingMeshdown.position.x = 6
        leftwingMeshdown.position.y = -10
        
        rightwingpivot.add(rightwingMeshdown);
        leftwingpivot.add(leftwingMeshdown);
 
        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const width = canvas.clientWidth;
          const height = canvas.clientHeight;
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
          }
          return needResize;
        }
        
      
        const targetPosition = new THREE.Vector3();
        var cnt = 0
        var tianwei = true
        var inc = 0.05

        function render(time) {
      
          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
          }

          flamepivot.getWorldPosition(targetPosition);

          butterflyMain.lookAt(targetPosition);
          // console.log(butterflyPivot.position.x, targetPosition.x)

          // go to the target position
          {
            butterflyMain.position.x += (flamepivot.position.x + 13 - butterflyMain.position.x) / 60
            butterflyMain.position.y += (flamepivot.position.y + 13 - butterflyMain.position.y) / 60
          }

          if(tianwei){
            cnt += inc
            
          }else{
            cnt -= inc
          }
          //  rightwingMesh.rotation.set(Math.PI / 2, cnt, 0);
          // rightwingMesh.setRotationFromAxisAngle(butterflyPivot.y,cnt)
          leftwingpivot.rotation.set(Math.PI / 2, -cnt, 0);
          rightwingpivot.rotation.set(Math.PI / 2, cnt, 0);
          if(cnt >= 1)
            tianwei = false
          if(cnt <= 0)
            tianwei = true

          renderer.render(scene, camera);
      
          requestAnimationFrame(render);
        }
        
        var mouse = {x: 0, y: 0};
        window.addEventListener('mousemove', function (event) {
          event.preventDefault();
          // console.log(event.clientX, event.clientY)
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
          
          // Make the sphere follow the mouse
            var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
            vector.unproject( camera );
            var dir = vector.sub( camera.position ).normalize();
            var distance = - camera.position.z / dir.z;
            var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
            flamepivot.position.copy(pos);
        });

        
        requestAnimationFrame(render);
    }

}

