import {useForm} from 'react-hook-form';
import {UserCreate} from '../api/auth';
import { useNavigate } from 'react-router-dom';



function UsuarioRegistro(){

     const navigate = useNavigate();

     const {register, handleSubmit} = useForm()


   

     const onSubmit = handleSubmit(async (values)=>{
          console.log(values);
          const res= await UserCreate(values)
          console.log(res);
          navigate('/Usuarios')
          });


    return(
   <div className='bg-green-300 max-w-md p-5 rounded-md mx-auto my-24'>

        <form onSubmit={onSubmit}>
              
            <input type="text" 
               {...register('nombre',{required:true,pattern:"[a-zA-Z]"})} className='w-full  text-black px-4 rounded-md my-2' placeholder='Nombre'
            />
           
           <input type="text"  {...register('apellido',{required:true})} 
            className='w-full text-black px-4 rounded-md my-2' placeholder='Apellidos'/>
            
            <input type="number" min="18" max="100" {...register('edad',{required:true, valueAsNumber:true})}
            className='w-full text-black px-4 rounded-md my-2' placeholder='Edad'/>
               
         
         <button type='submit' className="text-white px-2 font-bold bg-gray-400 rounded-md  hover:bg-gray-700">
                    Registrar
               </button>

               

        </form>

        <div>

        </div>
   </div>
    )
  }
  
  export default UsuarioRegistro