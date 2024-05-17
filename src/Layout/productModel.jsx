import React from 'react'
import * as THREE from 'three';
import { OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
class ProductModel extends React.Component{
    constructor(props){
        super(props);
      }
      // start
       
      componentDidUpdate(prevProps , prevState){
        const { activeData } = this.props;
        if(prevProps.activeData !== activeData){
          this.applyMaterial(activeData);
        }
      
      }
      componentDidMount() {
        this.InitialSetup();
      }
      InitialSetup = () => {
        const { handleLoading } = this.props;
        this.container = document.getElementById('productContainer');
        const item = document.getElementById('productContainer').getBoundingClientRect();
      
        this.sizes = {
          width: item.width,
          height: item.height,
        };
      
        this.canvas = document.querySelector('canvas.proweblg');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
          45,
          this.sizes.width / this.sizes.height,
          10,
          5000
        );
        this.camera.position.set(150, 20, 20);
        this.scene.add(this.camera);
      
        this.manager = new THREE.LoadingManager();
        this.manager.onProgress = (url, itemsLoaded, itemsTotal) => {
          const ProgressVal = (itemsLoaded / itemsTotal) * 100;
          if (ProgressVal === 100) {
            // handleLoading();
          }
        };
      
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.touches = {
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_PAN,
        };
        // this.controls.addEventListener('change', () => {});
       
        this.controls.enableDamping = true;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 2;
        this.controls.enablePan = false;
        this.controls.enableZoom = false;
        //  this.controls.minPolarAngle = -Math.PI / 2;
        this.controls.maxPolarAngle = Math.PI / 1.9;
      
        this.renderer = new THREE.WebGLRenderer({
          canvas: this.canvas,
          antialias: true,
          alpha: true,
        });
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.shadowMap.enabled = true;
      
        this.loadHDR();
        this.addModel();
        window.addEventListener('resize', this.resize);
      
        const render = () => {
          this.controls.update();
          this.renderer.render(this.scene, this.camera);
          window.requestAnimationFrame(render);
        };
        render();
      };
      resize = () => {
        this.sizes.width = this.container.offsetWidth;
        this.sizes.height = this.container.offsetHeight;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.camera.aspect = this.sizes.width / this.sizes.height;
        this.camera.updateProjectionMatrix();
      };
      
      loadHDR = () => {
        new RGBELoader(this.manager)
          .setDataType(THREE.HalfFloatType)
          .load('default.hdr', (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.needsUpdate = true;
            // this.scene.background = texture;
            this.scene.environment = texture;
            texture.dispose();
          });
      };
      
      addModel = () => {
        const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`;
        const DRACO_LOADER = new DRACOLoader(this.manager).setDecoderPath(
          `${THREE_PATH}/examples/js/libs/draco/gltf/`
        );
      
        const bag= 'leather.glb';
        const GLtfLoader = new GLTFLoader(this.manager).setDRACOLoader(
          DRACO_LOADER
        );
        GLtfLoader.load(bag, (gltf) => {
            gltf.scene.position.set(0, -30, 0);
          gltf.scene.scale.set(100, 100, 100);
          // gltf.scene.traverse(function (child) {
          //   if (child instanceof THREE.Mesh) {
          //     child.castShadow = true;
          //     child.receiveShadow = true;
          //     child.material.needsUpdate = true;
          //   }
          // });
          this.scene.add(gltf.scene);
        });
      
      };
       
    render(){
        return(
            <div id="productContainer" className='h-[800px]'>
                <canvas className='proweblg w-full h-full relative z-10' ></canvas>
            </div>
        )
    }
}
export default ProductModel;