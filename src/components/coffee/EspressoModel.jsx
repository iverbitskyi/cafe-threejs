/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 espresso.gltf --transform 
Files: espresso.gltf [2.91MB] > espresso-transformed.glb [513.98KB] (82%)
Author: senorp3dro (https://sketchfab.com/senorp3dro)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cup-of-coffee-f82264218618431d81b8a280076a786e
Title: Cup of Coffee
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF("/espresso-transformed.glb");
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