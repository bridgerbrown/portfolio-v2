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
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { TextureLoader } from 'three'
import Head from "next/head";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const scene = new THREE.Scene();
      scene.backgroundIntensity = 1.2;

      function updateIsMobile() {
        setIsMobile(window.innerWidth < 800)
      }
      updateIsMobile()
      
      let camera = isMobile
        ? new THREE.PerspectiveCamera(
            80,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          )
        : new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          );
      camera.position.setX(60);
      camera.position.setY(60); 
      camera.position.setZ(0);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#canvasBg'),
        antialias: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      window.addEventListener( 'resize', onWindowResized );
  
      function onWindowResized() {
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        if(isMobile){
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        }
        updateIsMobile()
      }
  
      const controls = new OrbitControls(camera, renderer.domElement);
  
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
        roughness: 0,
        metalness: 1.1,
      } );

      function loadTexture(url) {
        return new Promise(resolve => {
          new THREE.TextureLoader().load(url, resolve)
        })
      }

      loadTexture('sky-orange-contrast.png').then((texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
        renderer.render(scene, camera);

        const orbitingSpheres = [];
        for (let i = 0; i < 3; i++) {
          const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry( 15, 8 ), material );
          orbitingSpheres.push(sphere);
          centerSphere.add(sphere);
          const angle = (2 * Math.PI * i) / 3;
          sphere.position.set(15 * Math.sin(angle), 0, 15 * Math.cos(angle));
        }
    
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(-50, 70, 0);
        scene.add(pointLight);
    
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
              const distance = 0 + window.scrollY / 60;
        
              orbitingSpheres[0].position.set(distance * Math.sin((2 * Math.PI * 0) / 3), 0, distance * Math.cos((2 * Math.PI * 0) / 3));
              orbitingSpheres[1].position.set(distance * Math.sin((2 * Math.PI * 1) / 3), 0, distance * Math.cos((2 * Math.PI * 1) / 3));
              orbitingSpheres[2].position.set(distance * Math.sin((2 * Math.PI * 2) / 3), 0, distance * Math.cos((2 * Math.PI * 2) / 3));
    
              camera.position.x = lerp(30, 50, scalePercent(0, 40));
              camera.position.y = lerp(30, 70, scalePercent(0, 40));
              camera.position.z = lerp(40, 40, scalePercent(0, 40));
    
              centerSphere.rotation.x = lerp(6, 9, scalePercent(0, 40));
            },
          })
          animationScripts.push({
            start: 40,
            end: 101,
            func: () => {
              const stoppingDistance = 25
              let distance = (0 + window.scrollY / 60) * (1 - scalePercent(40, 101))
              if (distance < stoppingDistance) {
                distance = stoppingDistance
              }
    
              orbitingSpheres[0].position.set(distance * Math.sin((2 * Math.PI * 0) / 3), 0, distance * Math.cos((2 * Math.PI * 0) / 3));
              orbitingSpheres[1].position.set(distance * Math.sin((2 * Math.PI * 1) / 3), 0, distance * Math.cos((2 * Math.PI * 1) / 3));
              orbitingSpheres[2].position.set(distance * Math.sin((2 * Math.PI * 2) / 3), 0, distance * Math.cos((2 * Math.PI * 2) / 3));
    
              camera.position.x = lerp(50, 40, scalePercent(40, 85));
              camera.position.y = lerp(70, 10, scalePercent(40, 85));
    
              centerSphere.rotation.x = lerp(9, 12, scalePercent(40, 101));
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
        }
    
        function animate() {
          cubeCamera.update( renderer, scene );
          requestAnimationFrame(animate);
          playScrollAnimations()
          controls.update();
          renderer.render(scene, camera);
        }
        animate();
      })
    }, [isMobile])

  const refScrollUp = useRef();

    return(
        <>
            <main className="Home fade" id="home" ref={refScrollUp}>
              <Head>Bridger Brown Dev</Head>
              <canvas id="canvasBg" loading="eager"></canvas>
              <div className="top-bg">
                <Navbar /> 
                <GoTop />
                <Landing />
              </div>
              <div className="blur-bg">
                <About />
                <Skills />
                <Projects />
              </div>
              <div className="blur-bg">
                <Design />
                <Contact />
                <Footer />
              </div>
            </main>            
        </>
    )
}

export default Home