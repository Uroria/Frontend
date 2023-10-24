import React, {FunctionComponent} from "react";
import {useLanguage} from "../hooks/LanguageHook";
import ItemDetailSection from "../sections/shop/ItemDetailSection";

const ShopDetail: FunctionComponent = () => {

    const language = useLanguage();
    return <ItemDetailSection/>;
}

export default ShopDetail;