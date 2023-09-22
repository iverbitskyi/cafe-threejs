import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF("/espresso-transformed.glb");
	materials.Coffee_Baked.color.set("#442f1a");
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Object_4.geometry} material={materials.CUP_Baked} />
			<mesh
				geometry={nodes.Object_6.geometry}
				material={materials.Coffee_Baked}
				position={[0, -0.011, 0]}
				scale={1.024}
			/>
			<mesh geometry={nodes.Object_8.geometry} material={materials.Plate_Baked} />
		</group>
	);
}

useGLTF.preload("/espresso-transformed.glb");
