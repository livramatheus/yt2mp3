interface PropsData {
  disabled: boolean;
  textInput: string;
  setId(text: string): void;
}

function DownloadBtn(props: PropsData) {
  let { disabled, textInput, setId } = props;

  return (
    <button
      onClick={() => {
        const text = textInput.split("=")[1];
        if (text) {
          setId(text);
        }
      }}
      className={disabled ? "disabled" : ""}
      disabled={disabled}
    >
      Download
    </button>
  );
}

export default DownloadBtn;