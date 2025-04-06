// import components
import Header from "../components/header"
import Teams from "../components/teamsManager/teams"


const TeamsManager = () => {

    return (
        <div>
            <Header />
            <div className="center-container">
                <Teams />
            </div>
        </div>
    )
}

export default TeamsManager