import React from "react";
import {
	FaTwitterSquare,
	FaInstagramSquare,
	FaPhotoVideo,
	FaExternalLinkSquareAlt,
} from "react-icons/fa";

const Contacts = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				padding: 10,
				justifyContent: "center",
			}}
		>
			<a
				href='https://twitter.com/citizensMW'
				target='_blank'
				rel='noreferrer'
				color='#000'
			>
				<FaTwitterSquare size={50} color='#fff' />
			</a>

			<a
				href='https://www.instagram.com/citizensofthemilkyway/'
				target='_blank'
				rel='noreferrer'
				color='#000'
			>
				<FaInstagramSquare size={50} color='#fff' />
			</a>
			<a
				href='https://opensea.io/collection/citizens-of-the-milky-way'
				target='_blank'
				rel='noreferrer'
				color='#000'
			>
				<FaExternalLinkSquareAlt size={50} color='#fff' />
			</a>
		</div>
	);
};

export default Contacts;
