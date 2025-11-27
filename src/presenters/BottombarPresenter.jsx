import { observer } from "mobx-react-lite";
import { BottombarView } from "../views/BottombarView";

const Bottombar = observer( 
    function BottombarRender(props) {
        return(
            <BottombarView>{props.children}</BottombarView>
        );
    }
);

export { Bottombar };