import React, {useRef, useEffect} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Goob = () => {
    return (
        <Canvas camera={{position:[0.0, 0.0, 8.0]}}>
            <ambientLight intensity={2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <primitive object={scene} />
            <OrbitControls />
        </Canvas>
    )
}

export default Goob