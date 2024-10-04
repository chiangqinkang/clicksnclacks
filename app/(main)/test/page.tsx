  import KeyRow from "@/app/components/keys/KeyRow";

  export default function Home() {
    const firstRow = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'];
    const secondRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const thirdRow = ['A', 'S', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const fourthRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '/'];
    const rows = [firstRow, secondRow, thirdRow, fourthRow];
    return (
      <div className="flex flex-col justify-center items-center h-screen text-xl">
        {rows.map((row, index) => (
          <div key={index} className="mb-2">
          <KeyRow letters={row} />
          </div>
          ))}
      </div>
    );
  }