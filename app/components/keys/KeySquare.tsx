type Props = {
    letter: string,
}

const KeySquare = ({letter}: Props) => {
    const length = "48px";
    const squareStyle = {
        width: length,
        height: length,
        backgroundColor: '#171717',
        borderRadius: '8px',
        boxShadow: '0px 0px 8px rgba(255, 255, 255, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#bcbcbc',
        fontSize: '12px',
        fontWeight: 'bold',
        margin: '5px 8px'
    };
    return (<div style={squareStyle}>
        {letter}
    </div>);
}


export default KeySquare;