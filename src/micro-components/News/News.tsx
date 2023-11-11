import {FunctionComponent} from "react";
import styles from "./News.module.scss"
import Box from "../Box/Box";
import {useLocale} from "next-intl";

type News = {
    readonly title: string
    readonly description: string
    readonly date: Date
    readonly image: string
}

const News: FunctionComponent<News> = (props) => {

    const locale = useLocale();
    const {image, title, date, description} = props;

    return <Box image={image} className={styles["news"]}>
        <div className={styles["news__tag"]}>
            Update
        </div>
        <div className={styles["news__bottom"]}>
            <div className={styles["news__heading"]}>
                <span className={styles["news__title"]}>{title}</span>
                <span className={styles["news__date"]}>{date.toLocaleDateString(locale)}</span>
            </div>
            <p className={styles["news__description"]}>{description}</p>
        </div>

    </Box>
}

export default News