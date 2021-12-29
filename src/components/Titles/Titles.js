import React from "react";
import styles from "./titles.module.css";

const Titles = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				padding: 10,
				justifyContent: "center",
				alignSelf: "center",
			}}
		>
			<p className={styles.title}>Space Travel</p>
			<p className={styles.title}>Corporations</p>
			<p className={styles.title}>Politics</p>
			<p className={styles.title}>Advanced Technology</p>
			<p className={styles.title} s>
				Magic
			</p>
		</div>
	);
};

export default Titles;
