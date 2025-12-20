import { observer } from "mobx-react-lite";
import { StatusBarView } from "../views/StatusView";


const StatusBarPresenter= observer(
    function StatusBarPresenter(props){

        const statusform = [
            {
                status: props.userModel.buddyModel.stats.hunger,
                color: "orange",
                image: "../../public/assets/hunger.png",
            },
            {
                status: props.userModel.buddyModel.stats.happiness,
                color: "red",
                image: "../../public/assets/happy.png",
            },
            {
                status: props.userModel.buddyModel.stats.energy,
                color: "yellow",
                image: "../../public/assets/energy.png",
            },
        ] 


        return(
            <div className="absolute cursor-default z-50 opacity-30 hover:opacity-100 transition-opacity duration-200">
                <StatusBarView statusForm = {statusform}/>
            </div>
        );
    }
) 

export { StatusBarPresenter }
