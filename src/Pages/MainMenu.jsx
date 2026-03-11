import Navbar from "../Components/Navbar";
import FillHouse from "../kepek/feketeHaz.svg"
import messages from "../kepek/feketeKomment.svg"
import settings from "../kepek/feketeSettings.svg"
import people from "../kepek/feketePeople.svg"

export default function MainMenu() {

    return (
        <div className="background">
                <Navbar homeI={FillHouse} messagesI={messages} settingsI={settings} peopleI={people}/>
                <div>EZ EGY FOMENU??</div>
        </div>
    )
}