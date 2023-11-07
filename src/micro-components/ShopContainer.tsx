"use client"

import React, {FunctionComponent, useState} from "react";
import styles from "../../styles/components/Shop/ShopSection.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import ShopContainerButton from "./ShopContainerButton";
import {IShopSection} from "../@types/TShopSection";
import ShopSection from "./ShopSection";
import {FixedPage} from "./FixedPage/FixedPage";

interface IShopContainer {
    sections: IShopSection[]
}

/**
 *
 * @param sections provided by the backend api to display all sections with items
 * @constructor
 */
const ShopContainer: FunctionComponent<IShopContainer> = ({sections}) => {

    //const language = useLanguage();
    const [index, setIndex] = useState<number>(0);
    const [slidesSizesGrid, setSlidesSizesGrid] = useState<Array<number>>([0, 0]);

    const setSlidesSizesGridFunction = (swiper: any) => swiper["slidesSizesGrid"] && setSlidesSizesGrid(swiper["slidesSizesGrid"]);

    // @ts-ignore
    return <FixedPage>
        <Swiper onAfterInit={setSlidesSizesGridFunction} onResize={setSlidesSizesGridFunction}
                direction={"vertical"}
                centeredSlides={true} slidesPerView={2} spaceBetween={25}
                pagination={{clickable: true}}
                onSlideChangeTransitionStart={swiper => setIndex(swiper.activeIndex)}
                style={{position: "absolute", height: "100%", width: "100%"}}>

            {/** show button when there is a new slide to reach at the top **/}
            {index > 0 ? <ShopContainerButton type={"up"}/> : null}

            {/** iterate through all sections and show shop items in it **/}
            {sections.map((section, key) => {

                //get classes for better readability of code and shorter lines
                const swiperSlideClasses = styles["shop-section"] + (key != index ? (" " + styles["shop-section-disabled"]) : "");

                return <SwiperSlide key={key} className={swiperSlideClasses}>
                    {slidesSizesGrid ? <ShopSection height={slidesSizesGrid[key] <= 600 ? slidesSizesGrid[key] : 600}
                                                    section={section}/> : null}
                </SwiperSlide>
            })}

            {/** show button when there is a new slide to reach at the buttom **/}
            {index < (sections.length - 1) ? <ShopContainerButton type={"down"}/> : null}
        </Swiper>
    </FixedPage>
}


export default ShopContainer;