import Image from "next/image";
import styles from "./ProfilePicture.module.css";

export default function Pfp({image}) {
	console.log(image);
	return (
		<Image src={image} height={100} className={styles.roundedPicture} width={100} />
	)
}
