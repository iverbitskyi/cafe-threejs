import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF("/americano-transformed.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Plate_Plate_0.geometry}
				material={materials.Plate}
				position={[0, 17.38, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cup_Cup_0.geometry}
				material={materials.material}
				position={[4.246, 71.402, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Teaspoon_Teapoon_0.geometry}
				material={materials.Teapoon}
				position={[-64.404, 29.631, 23.88]}
				rotation={[-1.543, 0.019, 0.458]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Coffee_Coffee_0.geometry}
				material={materials.Coffee}
				position={[0.685, 127.074, 0]}
				rotation={[-Math.PI / 2, 0, Math.PI]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Smoke_Smoke_0.geometry}
				material={materials.Smoke}
				position={[0, 177.682, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
		</group>
	);
}

useGLTF.preload("/americano-transformed.glb");
