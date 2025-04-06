// import components
import Header from "../components/header"
import Home from "../components/dashboard/home"


const Dashboard = () => {

    return (
        <div>
            <Header />
            <div className="center-container">
                <Home />
            </div>
        </div>
    )
}

export default Dashboard