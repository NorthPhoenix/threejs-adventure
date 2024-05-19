import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
  width: 500,
  height: 400
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Animation
// let time = Date.now()

const clock = new THREE.Clock()

gsap.to(mesh.position, { x: 1, duration: 1, delay: 1 })
gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 })

const tick = () => {

  // const currentTime = Date.now()
  // const dTime = currentTime - time
  // time = currentTime
  const elapsedTime = clock.getElapsedTime()

  mesh.rotation.y = Math.sin(elapsedTime * Math.PI) * 2
  mesh.rotation.x = Math.sin(elapsedTime * Math.PI) * 2
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()