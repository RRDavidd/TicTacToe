import Square from "./Square";
import X from "./X";


export default function TicTacToe() {
    return (
        <table className="table-auto">
            <tbody>
                <tr>
                    <td className="p-3 border-2 border-collapse border-black"><Square /></td>
                    <td className="p-3 border-2 border-collapse border-black"><span className="text-5xl"><X /></span></td>
                    <td className="p-3 border-2 border-collapse border-black"><span className="text-5xl">3</span></td>
                </tr>
                <tr>
                    <td className="p-3 border-2 border-collapse border-black"><span className="text-5xl">4</span></td>
                    <td className="p-3 border-2 border-collapse border-black"><span className="text-5xl">5</span></td>
                    <td className="p-3 border-2 border-collapse border-black"><span className="text-5xl">6</span></td>
                </tr>
                <tr>
                    <td className="p-3 border-2 border-collapse border-black"><span className="text-5xl">7</span></td>
                    <td className="p-3 border-2 border-collapse border-black"><span className="text-5xl">8</span></td>
                    <td className="p-3 border-2 border-collapse border-black"><span className="text-5xl">9</span></td>
                </tr>
            </tbody>
        </table>
    )
}


