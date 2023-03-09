import EspecialidadDD from "./EspecialidadDD"

function Navbar() {
    return (
        <div className="flex justify-between">
            <a href="" className="text-3xl italic flex justify-between">
                PPS
            </a>
            <EspecialidadDD />
        </div>
    )
}

export default Navbar