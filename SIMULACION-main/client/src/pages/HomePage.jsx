import { useNavigate } from 'react-router-dom';
import React from "react";


function HomePage(){

    const navigate = useNavigate()
    const [showModal, setShowModal] = React.useState(false)


return(     

        <div>
            <div className='bg-green-300 max-w-xs p-5 rounded-md mx-auto my-24 flex flex-col items-center shadow-lg'>
            
                <button type='submit' className="text-white px-2 font-bold bg-gray-400 rounded-md  hover:bg-gray-700 mx-auto"
                onClick={()=>navigate(`/Usuarios`)}>
                    Lista de Usuarios
               </button>         
         
                <button type='submit' className="text-white my-4 px-2 font-bold bg-gray-400 rounded-md  hover:bg-gray-700 mx-auto"
                onClick={()=>navigate(`/Registro`)}>
                    Registrar Usuario
               </button>

        </div>


        <>
      <button
        className="text-white my-4 px-2 font-bold bg-yellow-400 rounded-md  hover:bg-yellow-700 mx-auto shadow-lg"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ayuda
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none scrollbar"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
    
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <h1 className='my-4 mx-4 font-bold'>
                Cómo se calcula el Índice de Masa Corporal (IMC):
                </h1>
              <div className="overflow-y-auto h-32 text-left my-2 mx-2 max-h-3xl">
               
                <p>
                El IMC se calcula dividiendo el peso de una persona en kilogramos 
                por el cuadrado de su estatura en metros. La fórmula es:
                </p>

                <p className='my-3'>
                IMC=Peso (kg)/Estatura (m)^2
                </p>

              
                <p className='font-bold my-4'>Interpretación del IMC:</p>
           

                <p className='my-2'>
                El IMC se interpreta utilizando las siguientes categorías de estado 
                de peso estándar, aplicables a adultos de 20 años o más, independientemente
                 de su género y tipo de cuerpo

                </p>
                <p className='my-2'>
                Bajo Peso (IMC por debajo de 18.5)
                </p>
                
                <p className='my-3'>
                Indica que la persona puede tener un peso insuficiente en relación con su estatura. 
                Un bajo peso puede estar asociado con riesgos para la salud y requerir atención médica.
                Normal (IMC 18.5 – 24.9)
                </p>

                <p className='my-3'>
                Representa un rango considerado saludable en términos de peso corporal en relación con la estatura.
                Menor riesgo de problemas de salud relacionados con el peso.
                Sobrepeso (IMC 25.0 – 29.9)
                </p>

                <p className='my-3'>
                Indica un exceso de peso en relación con la estatura. Aumenta el riesgo de desarrollar 
                problemas de salud como enfermedades cardiovasculares y diabetes.
                Obesidad (IMC 30.0 o más)
                </p>

                <p className='my-3'>
                Representa un rango considerado saludable en términos de peso corporal en relación con la estatura. 
                Menor riesgo de problemas de salud relacionados con el peso.
                Sobrepeso (IMC 25.0 – 29.9)
                </p>

                <p className='my-3'>
                Indica un exceso de peso en relación con la estatura. Aumenta el riesgo de desarrollar problemas de salud
                como enfermedades cardiovasculares y diabetes.
                Obesidad (IMC 30.0 o más)
                </p>

                <p className='my-3'>
                Se refiere a un nivel de peso significativamente más alto de lo saludable en relación con la estatura.
                 Asociado con un mayor riesgo de diversas condiciones médicas. Uso del IMC como Herramienta de Detección
                </p>
                
                <p className='my-3'>
                El IMC se utiliza como una herramienta de detección inicial para evaluar el peso corporal, 
                pero no diagnostica la grasa corporal ni la salud de un individuo de manera completa. 
                Para determinar si el exceso de peso representa un riesgo para la salud, se deben realizar 
                evaluaciones adicionales. Esto incluye mediciones del grosor de los pliegues cutáneos, 
                evaluaciones de la alimentación, actividad física y antecedentes familiares
                </p>

                <p className='my-3'>
                Es fundamental tener en cuenta que la interpretación del IMC debe ser realizada por profesionales de la salud, 
                ya que cada persona es única y pueden existir otros factores que influyan en su salud general. Un proveedor 
                de atención médica puede brindar una evaluación completa y personalizada para determinar la salud y 
                el bienestar de un individuo.
                </p>

              </div>
               
          
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>


      
   </div>
)
}
export default HomePage