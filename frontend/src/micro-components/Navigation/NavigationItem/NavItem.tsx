"use client"

import React, {FunctionComponent} from "react";
import styles from "./NavItem.module.scss";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {usePathname} from "next/navigation";

type NavItem = {
    href: string,
    lang: string,
    disabled?: boolean
}

export const NavItem: FunctionComponent<NavItem> = ({href, lang, disabled = false}) => {

    const t = useTranslations("Index");
    const pathname = usePathname();
    const locale = useLocale();

    return <div className={`${styles["nav-item"]} ${removeLocale(pathname, locale) == href ? styles["nav-item--active"] : ""} ${disabled ? styles["nav-item--disabled"] : ""}`}>
        <Link href={href}>{t(lang)}</Link>
    </div>

}

const removeLocale = (href = "/", locale = "en-US") => {
    if (locale && href.includes(locale)) {
        href = href.replace(`${locale}`, "")
        href = href.replace("//", "/")
    }

    return href;
}
