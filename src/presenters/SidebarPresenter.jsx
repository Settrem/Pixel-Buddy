import { observer } from "mobx-react-lite";
import { SidebarView } from "../views/SidebarView";


const Sidebar = observer( 
    function SidebarRender(props) {
        
        const currentBtn = window.location.hash === "#" + "/" + props.path;

        function clickSidebarButtonACB(btn){
            window.location.hash = "/" + btn.path;
        }

        return(
            <div className="h-fill">
                <SidebarView
                    sidebarButtons ={props.sidebarButtons}
                    buttonClickedCB = {clickSidebarButtonACB}
                    name = {props.name}
                ></SidebarView>
            </div>
        );
    }
);

export { Sidebar };