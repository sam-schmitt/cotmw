import React from "react";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { useHistory } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import projectsArray from "../../../data/projects";

export default function Right(props) {
	const history = useHistory();

	return (
		<div style={{ padding: 10, display: "flex" }}>
			{/* <div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<h1>What is it?</h1>
				<p
					onClick={() => {
						history.push("/blogs");
					}}
					style={{
						display: "flex",
						alignItems: "center",
					}}
				></p>
			</div> */}
			<div
				style={{
					padding: 10,
					backgroundColor: "#484848",
					borderRadius: 5,
				}}
			>
				<h1 style={{ marginBottom: 10 }}>Our Goals are to grow big!</h1>
				<ul style={{ marginLeft: 20, fontSize: 24 }}>
					<li>1 to #100 (Phase 1)</li>
					<li>101 to #200 (Phase 2)</li>
					<li>201 to #1000 (Phase 3)</li>
					<li>1001 to #1500 (Phase 4)</li>
					<li>... #9,001 to #10,000 (Final Phase)</li>
				</ul>
			</div>
		</div>
	);
}
