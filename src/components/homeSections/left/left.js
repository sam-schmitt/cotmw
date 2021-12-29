import React from "react";

export default function Left(props) {
	return (
		<div
			style={{
				padding: 10,
				...(!props.mobileView && { width: "50%" }),
				display: "flex",
			}}
		>
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
				<h1 style={{ marginBottom: 10 }}>
					Welcome to the Milky Way Galaxy, and take a look at its diverse groups
					of citizens!
				</h1>
				<ul style={{ marginLeft: 20, fontSize: 24 }}>
					<li>
						Each Citizen has their own name and unique characteristic. Every
						piece is one of a kind, the rollout will be slow but steady, and the
						goal is to reach 10,000 Citizens by the end of 2022.
					</li>
					<li>
						Citizens of the Milky Way is an NFT collection created by blockchain
						enthusiast Samuel Schmitt from New York City, who is a college
						student and entrepreneur.
					</li>
					<li>
						The Milky Way is a galaxy with corporations, politics, science, and
						magic. All character NFTs have a unique excerpt of a grander story
						being told. Each also has a secret excerpt that can only be revealed
						by its owner.
					</li>
				</ul>
			</div>
		</div>
	);
}
