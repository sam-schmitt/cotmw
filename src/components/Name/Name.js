import React from "react";
import styles from "./name.module.css";

const Name = ({ mobileView }) => {
	return (
		<div
			className={styles.nameContainer}
			// style={{ ...(!mobileView && { marginLeft: 300 }) }}
		>
			<p
				className={styles.name}
				style={{ ...(mobileView && { textAlign: "center" }) }}
			>
				Citizens
			</p>
			<p
				className={styles.sub}
				style={{ ...(mobileView && { textAlign: "center" }) }}
			>
				of the
			</p>
			<p
				className={styles.name}
				style={{ ...(mobileView && { textAlign: "center" }) }}
			>
				Milky Way
			</p>
		</div>
	);
};

export default Name;
