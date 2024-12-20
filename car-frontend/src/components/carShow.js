import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {Reflector} from 'three/examples/jsm/Addons.js';

const CarShow = () => {
    const mountRef = useRef(null);

    // http://localhost:8080/file/1731499543319-any-name-left1.png
    // http://localhost:8080/file/1731499687368-any-name-right1.png
    
    useEffect(() => {
        const images = [
            'http://localhost:8080/file/1716175602857-any-name-audi.png',
            'http://localhost:8080/file/1716206346052-any-name-vw2.png',
            'http://localhost:8080/file/1716206588628-any-name-t1.png',
            'http://localhost:8080/file/1716206198680-any-name-mercedes3.png',
            'http://localhost:8080/file/1716206451632-any-name-bmw2.png',
            'http://localhost:8080/file/1716206511860-any-name-vw1.jpg'
        ]
        
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const textureLoader = new THREE.TextureLoader();

        // Renderer setup
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const rootNode = new THREE.Object3D();
        scene.add(rootNode);

        const count = 6;
        for (let i = 0; i < count; i++) {
            const texture = textureLoader.load(images[i]);
            texture.colorSpace = THREE.SRGBColorSpace;
            
            const baseNode = new THREE.Object3D();
            baseNode.rotation.y = i * (2 * Math.PI / count);
            rootNode.add(baseNode);

            const border = new THREE.Mesh(
                new THREE.BoxGeometry(3.2, 2.2, 0.09),
                new THREE.MeshStandardMaterial({ color:0x202020})
            );
            border.position.z = -4
            baseNode.add(border)
            const artwork = new THREE.Mesh(
                new THREE.BoxGeometry(3, 2, 0.1),
                new THREE.MeshStandardMaterial({ map: texture})
            );
            artwork.position.z = -4;
            baseNode.add(artwork);
        }

        const spotlight = new THREE.SpotLight(0xffffff,100.0,10.0,0.65,0.7);
        spotlight.position.set(0,5,0);
        spotlight.target.position.set(0,0.5,-5);
        scene.add(spotlight);
        scene.add(spotlight.target);

        const mirror = new Reflector(
            new THREE.CircleGeometry(10),
            {
                color: 0x303030,
                textureWidth :window.innerWidth,
                textureHeight :window.innerHeight
            }
        )
        mirror.position.y = -1.1;
        mirror.rotateX(-Math.PI/ 2)
        scene.add(mirror);
        // Animation function
        const animate = () => {
            requestAnimationFrame(animate);
            rootNode.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight)
        })
        // Clean up on component unmount
        return () => {
            renderer.dispose();
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default CarShow;
