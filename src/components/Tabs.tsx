import {ReactElement, useCallback, useState} from "react";
import styles from '../../styles/components/Tab.module.scss'

interface TabTitleProps {
    title: string
    index: number
    setSelectedTab: (index: number) => void;
    isActive?: boolean
}

interface TabPaneProps {
    title: string
    isActive?: boolean
    children: ReactElement | ReactElement[]
}

interface TabsProps {
    children: ReactElement<TabPaneProps>[]
    preSelectedTabIndex?: number
}

export const TabTitle = (props: TabTitleProps): JSX.Element => {
    const {title, setSelectedTab, index, isActive} = props;

    const handleOnClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    return (
        <li onClick={handleOnClick} className={`${styles.tabs__tab} ${isActive ? styles["tabs__tab-active"] : ''}`}>
            {title}
        </li>
    );
};

export const Tab = ({children, isActive}: TabPaneProps): JSX.Element => {
    return <div style={{display: isActive ? "block" : "none"}}>{children}</div>;
}

export const Tabs = (props: TabsProps): JSX.Element => {
    const {children, preSelectedTabIndex} = props;

    // First tab is shown by default
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0);

    return (
        <div className={styles.tabs}>
            <ul className={styles["tabs__tab-list"]}>
                {children.map((item, index) => (
                    <TabTitle
                        key={item.props.title}
                        title={item.props.title}
                        index={index}
                        isActive={index === selectedTabIndex}
                        setSelectedTab={setSelectedTabIndex}
                    />
                ))}
            </ul>

            {/* show selcted tab by index*/}
            {
                children.map((value, index) => {
                    return <Tab key={value.props.title}
                                title={value.props.title}
                                isActive={index === selectedTabIndex}>{value.props.children}</Tab>
                })
            }
        </div>
    );
};