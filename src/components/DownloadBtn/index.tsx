interface PropsData {
  disabled: boolean;
  textInput: string;
  setId(text: string): void;
  notify(message: string): void;
  setTextInput(textInput: string): void;
}

function DownloadBtn(props: PropsData) {
  let { disabled, textInput, setId, notify, setTextInput } = props;

  function onClickDownloadBtn() {
    const text = textInput.split("=")[1];
    
    if (text) {
      setId(text);
    } else {
      setTextInput('');
      notify("Invalid video link");
    }
  }

  return (
    <button
      id="download-btn"
      onClick={() => onClickDownloadBtn()}
      className={disabled ? "disabled" : ""}
      disabled={disabled}
    >
      Download
    </button>
  );
}

export default DownloadBtn;