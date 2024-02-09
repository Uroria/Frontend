import {FunctionComponent, ReactNode} from "react";
import styles from "./Breadcrumb.module.scss"
import Link from "next/link";

type Breadcrumb = {
    href: string
    children: ReactNode
}

const Breadcrumb: FunctionComponent<Breadcrumb> = ({children, href}) => {
  return <Link href={href} className={styles["breadcrumb"]}>
      {children}
  </Link>
}

export default Breadcrumb