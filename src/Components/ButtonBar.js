const ButtonBar = (props) => {
    return (
        <div>
            <button value={-5} onClick={props.handleIterate}>Skip Backward</button>
            <button value={-1} onClick={props.handleIterate}>Backward</button>
            <button value={1} onClick={props.handleIterate}>Forward</button>
            <button value={5} onClick={props.handleIterate}>Skip Forward</button>
        </div>
    )
}

export default ButtonBar