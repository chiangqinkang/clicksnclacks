import KeySquare from "./KeySquare";

type Props = {
    letters: string[],
}

const KeyRow = ({letters}: Props) => {
    return (
        <div className="flex justify-center mt-4">
            {letters.map((letter) => (
                <KeySquare key={letter} letter={letter} /> 
            ))}
        </div>
    );
}


export default KeyRow;