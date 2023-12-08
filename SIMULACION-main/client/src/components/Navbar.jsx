import { Link } from "react-router-dom"


function Navbar(){
    return(
        <nav className="bg-teal-200 my-3 flex justify-between py-5 px-10 rounded-md drop-shadow-lg ">
           
           <Link to='/homepage'>
                <h1 className="text-purple-600 text-2xl font-bold">IMC</h1>
            </Link>
           
            <ul className="flex gap-x-2">
                <li>
                    <Link to='/Registro' className=" text-white my-4 mx-2 px-2 py-2 ont-bold bg-purple-400 rounded-md  hover:bg-purple-700 text-purple-600">Registrar</Link>
                    <Link to='/Usuarios' className=" text-white my-4 mx-2 px-2 py-2 ont-bold bg-purple-400 rounded-md  hover:bg-purple-700 text-purple-600">Usuarios</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar