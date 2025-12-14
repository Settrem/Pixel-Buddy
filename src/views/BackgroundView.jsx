
function BackgroundView(props) {
  return (
    <div className="relative w-[101%] h-[101%] overflow-hidden">
        
        <img  /* Background */
            src={props.background}
            className="absolute inset-0 w-full h-full object-cover z-10"
            alt=""
        />
        
        <img   /* Foreground */
            src={props.foreground}
            className="absolute inset-0 w-full h-full object-cover z-20"
            alt=""
        />
    </div>
  );
}

export { BackgroundView }