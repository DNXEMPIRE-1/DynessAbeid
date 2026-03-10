import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial, PerspectiveCamera, ContactShadows, Text, Float as FloatDrei, Environment, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const Rig = () => {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 1.5, mouse.y * 1, 10), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

const ArtisticFloatingShapes = () => {
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      position: [Math.random() * 15 - 7.5, Math.random() * 10 - 5, Math.random() * 5 - 5],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: 0.2 + Math.random() * 1.2,
      speed: 0.5 + Math.random() * 1.5,
      distort: 0.2 + Math.random() * 0.5
    }))
  }, [])

  return (
    <group>
      {shapes.map((s, i) => (
        <Float key={i} speed={s.speed} rotationIntensity={2} floatIntensity={2} position={s.position}>
          <mesh rotation={s.rotation} scale={s.scale}>
            {i % 3 === 0 ? (
              <torusGeometry args={[0.5, 0.1, 16, 100]} />
            ) : i % 3 === 1 ? (
              <sphereGeometry args={[0.5, 32, 32]} />
            ) : (
              <boxGeometry args={[0.8, 0.8, 0.8]} />
            )}
            <MeshDistortMaterial 
              color={i % 2 === 0 ? "#c5a363" : "#121212"} 
              opacity={0.15} 
              transparent 
              metalness={0.9} 
              roughness={0.1}
              distort={s.distort}
              speed={s.speed}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

const VisionCore = () => {
  const mesh = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.cos(t / 4) / 4
    mesh.current.rotation.y = Math.sin(t / 4) / 4
    mesh.current.rotation.z = Math.sin(t / 4) / 4
    mesh.current.position.y = Math.sin(t / 1.5) / 5
  })

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={mesh} scale={2}>
          <icosahedronGeometry args={[1, 15]} />
          <MeshDistortMaterial
            color="#c5a363"
            speed={2}
            distort={0.4}
            radius={1}
            metalness={1}
            roughness={0.1}
            emissive="#c5a363"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
      {/* Halo rings */}
      <group rotation={[Math.PI / 2, 0, 0]}>
         <mesh scale={3.5}>
            <torusGeometry args={[1, 0.005, 16, 100]} />
            <meshStandardMaterial color="#c5a363" opacity={0.2} transparent />
         </mesh>
         <mesh scale={4} rotation={[0.5, 0.3, 0]}>
            <torusGeometry args={[1, 0.005, 16, 100]} />
            <meshStandardMaterial color="#121212" opacity={0.1} transparent />
         </mesh>
      </group>
    </group>
  )
}

const Experience = () => {
  return (
    <div className="fixed inset-0 z-0 bg-cream">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#c5a363" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8e9a8a" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={3} color="#ffffff" />
        
        <Rig />
        <ArtisticFloatingShapes />
        <VisionCore />
        <Sparkles count={50} scale={15} size={1} speed={0.4} opacity={0.1} color="#c5a363" />
        
        <Environment preset="studio" />
        
        <ContactShadows 
          opacity={0.15} 
          scale={30} 
          blur={3} 
          far={10} 
          resolution={256} 
          color="#c5a363" 
          position={[0, -5, 0]}
        />
      </Canvas>
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(250,249,246,0.5)_100%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
    </div>
  )
}

export default Experience
