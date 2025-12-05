import { PixelInput } from "../components/ui/PixelInput";
import { PixelButton } from "../components/ui/PixelButton";

function InputFormView(props){
  function sendFormACB(){
      props.sendFormCB(props);
  }

  return (
    <div className="flex flex-col items-center">
      {...props.form.map(formInputSectionCB)}
      <div className="mt-10 w-50">
        <PixelButton btnClickCB={sendFormACB}>OK</PixelButton>
      </div>
    </div>
  );

  function formInputSectionCB(formType){
    return(
      <div className="w-full">
        <div className="w-full h-full text-[50px]">{formType.description}</div>
        <PixelInput
          type={formType.type}
          value={formType.stateType}
          onChange={formType.setStateType} 
          placeholder={formType.placeholder}
          maxLength={formType.max}
        />
      </div>
    );
  }
}

export { InputFormView }