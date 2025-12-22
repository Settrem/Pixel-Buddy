import { observer } from "mobx-react-lite";
import { PixelStatusBar } from "../components/ui/PixelStatusBar";

const StatusBarView = observer(
    function StatusBarView(props){
        return(
            <div className="w-[150px] sm:w-[220px] h-auto flex flex-col mt-2 ml-2 gap-[10px] sm:gap-[5px]">
                {[...props.statusForm]?.map(renderStatusBars)}
            </div>
        );
        
        function renderStatusBars(statusType){
            return(
                <PixelStatusBar
                    key = {statusType.color}
                    status = {statusType.status}
                    statusColor= {statusType.color}
                    statusImage = {statusType.image}
                />
            );
        }
    }
) 

export { StatusBarView }