import styles from "./BlogCard.module.css";
import Chip, { ChipVariantEnum } from "../Chip/Chip";

interface BlogCardProps {
    chipVariant: ChipVariantEnum; //String 
    title: string;
    text: string;
}

const BlogCard  = ({chipVariant, title, text }: BlogCardProps) => {

    return  (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src='./spacejoy-YqFz7UMm8qE-unsplash.jpg' alt={title} />
            </div>
            <div className={styles.content}>
                <div className="chipSection">
                    <Chip chipVariant={chipVariant} />
                </div>
                <p className={styles.title}> {title} </p>
                <p className={styles.text}> {text} </p>
                <div className="footer">
                    <a className={styles.readMore}href="">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;