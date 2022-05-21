import type {NextPage} from 'next'
import UroriaNavbar from "../components/Navigation";
import UroriaHeader from "../components/UroriaHeader";
import AvatarList from "../components/AvatarList";
import Avatar from "../components/Avatar";
import {IconUsers} from "@tabler/icons";
import IconButton from "../components/IconButton";
import AttentionText from "../components/AttentionText";
import StatusView from "../components/StatusView";

const Home: NextPage = () => {
    return <div style={{overflowX: "hidden"}}>
        <UroriaNavbar/>
        <UroriaHeader>
            <AvatarList>
                <Avatar image={<img src={"/ururiabot.png"}/>}/>
                <Avatar image={<img src={"/jan.png"}/>}/>
                <Avatar image={<img src={"/gecoded.png"}/>}/>
                <Avatar image={<img src={"/paul.png"}/>}/>
                <IconButton><IconUsers size={20}/></IconButton>
            </AvatarList>
            <AttentionText top={["5px", "0px", "10px", "10px", "10px", "-50px"]} left={["380px", "370px", "450px", "570px", "650px", "770px"]}>Jetzt bei Uroria<br/>bewerben!</AttentionText>
            <h1>Der beste MMO-RPG Server in <br/>Deutschland: Uroria.com</h1>

            <StatusView headline={"Netzwerk Status"} icon={"/haken.png"}>Active</StatusView>
            <StatusView headline={"Nächstes Event"}>6ter September, 10 Uhr</StatusView>
            <StatusView headline={"Gewinn"} icon={"/coins.png"}>150</StatusView>

        </UroriaHeader>
    </div>
}

export default Home
