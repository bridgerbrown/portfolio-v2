import React from "react";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Landing from "../components/sections/Landing";
import Navbar from '../components/features/Navbar'
import Skills from "../components/sections/Skills";
import Footer from '../components/sections/Footer'
import Contact from "../components/sections/Contact"
import Design from "../components/sections/Design";
import { useState, useEffect, useRef } from "react";
import GoTop from "../components/features/GoTop";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

function Home() {
    // const [darkTheme, setDarkTheme] = useState()

    // useEffect(() => {   
    //     const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    //     if(prefersDarkScheme) {
    //         document.body.classList.toggle("light-theme");
    //         setDarkTheme(prefersDarkScheme)
    //     } else {
    //         document.body.classList.toggle("dark-theme");
    //         setDarkTheme(prefersDarkScheme)
    //     }
    // },[darkTheme] )

    // function themeChange() {
    //     if(darkTheme) {
    //         document.body.classList.toggle("light-theme");
    //         setDarkTheme(!darkTheme)
    //     } else {
    //         document.body.classList.toggle("dark-theme");
    //         setDarkTheme(!darkTheme)
    //     }
    // };

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000, );
          camera.position.setX(60);
          camera.position.setY(60);
          camera.position.setZ(0);
          camera.lookAt(0, 0, 0);
          // camera.setFocalLength(30)
          // camera.fov = 37
          // camera.updateProjectionMatrix();
    
        const renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#canvasBg'),
          antialias: true,
        })
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
    
        window.addEventListener( 'resize', onWindowResized );
    
        // let stats = new Stats();
        // document.body.appendChild( stats.dom );
    
        const controls = new OrbitControls(camera, renderer.domElement);
    
        new RGBELoader().load( 'sky-bw.hdr', function ( texture ) {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.background = texture;
          scene.environment = texture;
          renderer.render(scene, camera);
        } );
    
        const centerSphereGeometry = new THREE.SphereGeometry(0, 0, 0);
        const centerSphereMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xffffff,
        });
        const centerSphere = new THREE.Mesh(centerSphereGeometry, centerSphereMaterial);
        scene.add(centerSphere);
    
        let cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 256 );
        cubeRenderTarget.texture.type = THREE.HalfFloatType;
        let cubeCamera = new THREE.CubeCamera( 1, 1000, cubeRenderTarget );
        let material = new THREE.MeshStandardMaterial( {
          envMap: cubeRenderTarget.texture,
          roughness: 0.05,
          metalness: 1
        } );
        
        const orbitingSpheres = [];
        for (let i = 0; i < 3; i++) {
          const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry( 15, 8 ), material );
          orbitingSpheres.push(sphere);
          centerSphere.add(sphere);
          // Position the sphere around the center sphere
          const angle = (2 * Math.PI * i) / 3;
          sphere.position.set(15 * Math.sin(angle), 0, 15 * Math.cos(angle));
        }
    
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(-50, 70, 0);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(20, 20, 20);
        const ambientLight = new THREE.AmbientLight(0x00000);
        scene.add(ambientLight, pointLight, directionalLight);
    
        function lerp(x, y, a){
          return (1 - a) * x + a * y
        }
    
        function scalePercent(start, end) {
          return (scrollPercent - start) / (end - start)
        }
      
        const animationScripts = []
          animationScripts.push({
            start: 0,
            end: 40,
            func: () => {
            // centerSphere.rotation.y += 0.002;
              const distance = 0 + window.scrollY / 25;
        
              orbitingSpheres[0].position.set(distance * Math.sin((2 * Math.PI * 0) / 3), 0, distance * Math.cos((2 * Math.PI * 0) / 3));
              orbitingSpheres[1].position.set(distance * Math.sin((2 * Math.PI * 1) / 3), 0, distance * Math.cos((2 * Math.PI * 1) / 3));
              orbitingSpheres[2].position.set(distance * Math.sin((2 * Math.PI * 2) / 3), 0, distance * Math.cos((2 * Math.PI * 2) / 3));
    
              camera.position.x = lerp(40, 100, scalePercent(0, 40));
              camera.position.y = lerp(40, 180, scalePercent(0, 40));
              camera.position.z = lerp(40, 40, scalePercent(0, 40));
    
              centerSphere.rotation.x = lerp(0, 3, scalePercent(0, 40));
            },
          })
          animationScripts.push({
            start: 40,
            end: 101,
            func: () => {
              // centerSphere.rotation.y += 0.002;
              const stoppingDistance = 25
              let distance = (0 + window.scrollY / 25) * (1 - scalePercent(40, 101))
              if (distance < stoppingDistance) {
                distance = stoppingDistance
              }
    
              orbitingSpheres[0].position.set(distance * Math.sin((2 * Math.PI * 0) / 3), 0, distance * Math.cos((2 * Math.PI * 0) / 3));
              orbitingSpheres[1].position.set(distance * Math.sin((2 * Math.PI * 1) / 3), 0, distance * Math.cos((2 * Math.PI * 1) / 3));
              orbitingSpheres[2].position.set(distance * Math.sin((2 * Math.PI * 2) / 3), 0, distance * Math.cos((2 * Math.PI * 2) / 3));
    
              camera.position.x = lerp(100, 60, scalePercent(40, 80));
              camera.position.y = lerp(180, 50, scalePercent(40, 80));
    
              centerSphere.rotation.x = lerp(3, 6, scalePercent(40, 101));
            },
          })
    
          function playScrollAnimations() {
            animationScripts.forEach((a) => {
                if (scrollPercent >= a.start && scrollPercent < a.end) {
                    a.func()
                }
            })
          }
      
          let scrollPercent = 0
        
        document.body.onscroll = () => {
            scrollPercent =
                ((document.documentElement.scrollTop || document.body.scrollTop) /
                    ((document.documentElement.scrollHeight ||
                        document.body.scrollHeight) -
                        document.documentElement.clientHeight)) *
                100
            // ;(document.getElementById('scrollProgress')).innerText =
            //     'Scroll Progress : ' + scrollPercent.toFixed(2)
        }
    
        function onWindowResized() {
          renderer.setSize( window.innerWidth, window.innerHeight );
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        }
    
        function animate() {
          cubeCamera.update( renderer, scene );
          requestAnimationFrame(animate);
          playScrollAnimations()
          controls.update();
          renderer.render(scene, camera);
        }
        animate();
    
      }, [])

    const refScrollUp = useRef();

    return(
        <>
            <main className="Home fade" id="home" ref={refScrollUp}>
                <canvas id="canvasBg"></canvas>
                <Navbar /> 
                <GoTop />
                <Landing />
                <About />
                <Skills />
                <Projects />
                <Design />
                <Contact />
                <Footer />
            </main>            
        </>
    )
}

export default Home