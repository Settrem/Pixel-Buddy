import { PixelInput } from "../components/ui/PixelInput";
import { PixelButton } from "../components/ui/PixelButton";

function InputFormView(props){
  function sendFormACB(){
      props.sendFormCB(props);
      // Reset all input fields in this form
      props.form.forEach(field => {
          field.setStateType("");
      });
  }

  return (
    <div className="flex flex-col items-center">
      {...props.form.map(formInputSectionCB)}
      <div className="w-50 flex items-center mt-5">
        <PixelButton btnClickCB={sendFormACB}><div className="text-[40px] w-fill h-10 flex flex-row align-center items-center"><p className="w-full">{props.children}</p></div></PixelButton>
      </div>
    </div>
  );

  function formInputSectionCB(formType){
    return(
      <div className="w-full flex flex-col">
        <div className="w-full h-max">{formType.description}</div>
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