import {FunctionComponent} from "react";
import styles from "./News.module.scss"
import Box from "../Box/Box";

type News = {
    readonly title: string
    readonly description: string
    readonly date: Date
    readonly image: string
}

const News: FunctionComponent<News> = (props) => {

    const {image, title, date, description} = props;

    return <Box image={image} className={styles["news"]}>
        <div className={styles["news__tag"]}>
            Update
        </div>
        <div className={styles["news__heading"]}>
            <span className={styles["news__heading__title"]}>{title}</span>
            <span className={styles["news__heading__date"]}>{date.toLocaleDateString()}</span>
        </div>
        <p className={styles["news__description"]}>{description}</p>
    </Box>
}

export default News