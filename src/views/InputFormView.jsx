import { PixelInput } from "../components/ui/PixelInput";
import { PixelButton } from "../components/ui/PixelButton";

function InputFormView(props){
  function sendFormACB(){
      props.sendFormCB(props);
  }

  return (
    <div>
      {...props.form.map(formInputSectionCB)}
      <PixelButton btnClickCB={sendFormACB}>OK</PixelButton>
    </div>
  );

  function formInputSectionCB(formType){
    return(
      <div>
        <p>{formType.description}</p>
        <PixelInput
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