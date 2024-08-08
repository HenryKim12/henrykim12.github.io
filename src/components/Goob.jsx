import React, {useRef, useEffect} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Goob = () => {
    const { scene } = useGLTF('/3D/triplets.glb');
    const modelRef = useRef();
    const { camera, size } = useThree();

    const handleMouseMove = (event) => {
    // Calculate normalized device coordinates (-1 to +1) for the mouse position
        const mouseX = (event.clientX / size.width) * 2 - 1;
        const mouseY = -(event.clientY / size.height) * 2 + 1;

        // Create a vector from the mouse coordinates
        const mouseVector = new THREE.Vector3(mouseX, mouseY, 1).unproject(camera);

        // Calculate the direction from the model to the mouse
        const direction = mouseVector.sub(camera.position).normalize();

        // Update the model's rotation to face the direction of the mouse
        const rotationMatrix = new THREE.Matrix4().lookAt(camera.position, mouseVector, camera.up);
        modelRef.current.rotation.setFromRotationMatrix(rotationMatrix);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [camera, size]);

    return (
        <primitive object={scene} ref={modelRef} />
    )
}

export default Goob