interface TextInput {
  textInput: string;
  setTextInput(txtInput: string): void;
}

function Body(props: TextInput) {
    const { textInput, setTextInput } = props;
 
    return (
        <div id="body">
            <input
            type="text"
            value={textInput}
            placeholder="YouTube link here..."
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
            />

            <span>It might take a moment to convert your video :)</span>  
      </div>
    )
}

export default Body;