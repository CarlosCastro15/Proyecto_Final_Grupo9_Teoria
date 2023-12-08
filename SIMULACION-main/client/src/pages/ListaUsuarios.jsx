/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export default function listUsuario(){
    
    const [users,setUsers] =useState([])

    const Navigate = useNavigate();

    const loadUsers = async()=>{
       const response = await fetch('http://localhost:3000/listausuarios')
       const data = await response.json()
       setUsers(data)
    }


    useEffect(()=>{
      loadUsers()
    },[])


    const handleDelete = async(id)=>{
    await fetch(`http://localhost:3000/eliminarusuarios/${id}`,{
           method:'DELETE',
      })

      setUsers(
        users.filter(users =>users.id_usuario !== id)
      )
};

    return (
        <div className="grid grid-cols-3 gap-2">
          {
            users.map(user=>(

              <div key={user.id_usuario} className="bg-green-300 max-w-md w-full p-10 rounded-md">
                <h2 className="text-2xl font-bold text-white">{user.nombre}</h2>
                <h2 className="text-2xl font-bold text-white">{user.apellido}</h2>
                <h5>Edad {user.edad}</h5>

                <header className="flex justify-between">
                        <div className="flex gap-x-2 items-center my-4">
                            <button className="text-white px-2 font-bold bg-blue-400 rounded-md  hover:bg-sky-700"
                            onClick={()=>Navigate(`/ICM/${user.id_usuario}`)}
                            >IMC</button>
                            <button className="text-white px-2 font-bold bg-gray-400 rounded-md  hover:bg-gray-700"
                            onClick={()=>Navigate(`/grafica/${user.id_usuario}`)}>
                              Grafica</button>
                            <button className="text-white px-2 font-bold bg-red-400 rounded-md  hover:bg-red-700"
                            onClick={()=>handleDelete(user.id_usuario)}>Eliminar</button>
                        </div>
                </header>
              
          </div>
                
                
            ))
          }
         

        </div>
    )
       
    
}

