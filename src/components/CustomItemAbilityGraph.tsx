import {FunctionComponent} from "react";


type CustomItemAbilityGraphBarProps = {
    progres?: number
}

type CustomItemAbilityGraphProps = {
    progres?: number,
    children: string
}

const CustomItemAbilityGraphBar: FunctionComponent<CustomItemAbilityGraphBarProps> = ({progres = 0}) =>
    // @ts-ignore
    <div style={{"--data-level": progres + "%"}} className={"bar"}/>

const CustomItemAbilityGraph: FunctionComponent<CustomItemAbilityGraphProps> = ({progres, children}) => <>
    <span className={"name"}>{children}</span>
    <CustomItemAbilityGraphBar progres={progres}/>
</>

export default CustomItemAbilityGraph;