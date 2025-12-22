import { BuddyComponent } from "../components/ui/buddy";

function BuddyView(props) {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex overflow-hidden" style={{imageRendering: "pixelated"}}>
                <div className="relative h-full w-full">
                    <BuddyComponent buddy = {props.buddy}/>
                </div>
            </div>
        </div>
    )
}
export { BuddyView }
