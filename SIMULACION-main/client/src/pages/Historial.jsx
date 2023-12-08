import {useForm} from 'react-hook-form';
import { calculateICM } from '../api/auth';
import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Historial(){

     const {register, handleSubmit} = useForm()
     const [users,setUsers] =useState([])
     const [user,setUser] =useState([])
     
     const params = useParams()
     const navigate = useNavigate()

     const onSubmit = handleSubmit(async (values)=>{
          console.log(values);
          const res= await calculateICM(values)
          console.log(res);
          navigate(`/grafica/${params.id}`)
          }); 
          
          const loadData = async (id)=>{
               const res = await fetch(`http://localhost:3000/historial/${id}`)
               const data = await res.json()
               setUsers(data)
          };

          useEffect(()=>{
               if (params.id){
                    loadData(params.id);
               }
          },[params.id])

          const loadUser = async (id)=>{
               const res = await fetch(`http://localhost:3000/usuario/${id}`)
               const data = await res.json()
               setUser(data)
               console.log(data)
           };
           
           useEffect(()=>{
               if (params.id){
                   loadUser(params.id);
               }
           },[params.id])
  return(
  
         <div>

               <div className='my-4'>
                {user.map(usuario=>(
                    <div key={usuario.id_usuario}>
                        <h4 className>Ingrese los datos de:<h3 className="font-bold">{usuario.nombre}</h3></h4>
                    </div>
                ))

                }
               </div>
               
               <hr className='my-4'/>

                <div className='bg-green-300 max-w-md p-5 rounded-md top-2'>

                    <form onSubmit={onSubmit}>

                    <input type='hidden'
                    value={params.id}
                    {...register('id_usuario',{required:true})} 
                    ></input>
                    
                    <input type="number" step="0.01" min="0.1" max="3.10" 
                         {...register('altura',{required:true,pattern:"[a-zA-Z]"})} className='w-full  text-black px-4 rounded-md my-2' placeholder='Altura en metros'
                    />
                    
                    <input type="number"  min="1"{...register('semanas',{required:true})} 
                    className='w-full text-black px-4 rounded-md my-2' placeholder='semanas'/>
                    
                    <input type="number" min="10" {...register('peso_actual',{required:true, valueAsNumber:true})}
                    className='w-full text-black px-4 rounded-md my-2' placeholder='Peso actual en kilogramos'/>
                         
                         <button type='submit' className=" text-white px-2 ont-bold bg-gray-400 rounded-md  hover:bg-gray-700">
                              Ingresar
                         </button>
                    </form>
          
               </div>
               <hr className='my-4'/>
         <div className='my-4'>

          <h2 className='text-black font-bold'>Pronostico de Perdida</h2>

          <table className=' my-4 w-8/12 min-w-max table-auto text-left rounded-lg bg-gray-50 drop-shadow-lg'>
               <thead  className=" border-purple-100 bg-gray-400 p-4">
                    <tr>
                         <th>Semanas</th>
                         <th>Peso</th>
                         <th>imc</th>
                    </tr>
               </thead>

               <tbody>
      
                    {users.map(user=>(
                    
                          <tr key={user.id}>
                              <td>semana {user.semanas} <hr/></td>

                              <td>{user.peso_actual} kg<hr/></td>

                              <td>{user.imc}<hr/></td> 
                         </tr>
                    ))}
                   
               </tbody>

          </table>

         </div>
         
    </div>
   
     )
   
  }

  export default Historial
  