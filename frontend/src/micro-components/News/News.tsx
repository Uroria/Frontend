"use client"

import {FunctionComponent} from "react";
import styles from "./News.module.scss"
import Box from "../Box/Box";
import {useLocale} from "next-intl";
import {useRouter} from "next/navigation";

type News = {
    readonly title: string
    readonly description: string
    readonly date: Date
    readonly slug: string
    readonly image: string
}

const News: FunctionComponent<News> = (props) => {

    const locale = useLocale();
    const router = useRouter()
    const {image, title, date, description, slug} = props;

    return <Box image={image} className={styles["news"]} onClick={() => router.push(`/posts/${slug}`)}>
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