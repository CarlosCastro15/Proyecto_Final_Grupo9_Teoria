import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement,LinearScale,CategoryScale } from "chart.js/auto";
import { Line} from "react-chartjs-2";
import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend,LineElement,LinearScale,CategoryScale);

function Grafica(){

     const params = useParams()
     const [grafica,setGrafica] =useState(null)
     const [grafica2,setGrafica2] =useState(null)
     const [user,setUser] =useState([])

     const loadData = async (id)=>{
        const res = await fetch(`http://localhost:3000/historial/${id}`)
        const data = await res.json()
        if(data.length>0){
            setGrafica({
                labels: data.map((grafica)=>grafica.imc),
                datasets: [{
                    label: 'Imc alcanzado',
                    data: data.map((grafica)=>grafica.peso_actual),
                }]
            })
        }else{
            console.log('no hay datos');
        }
     
        
   };

     useEffect(()=>{
        if (params.id){
             loadData(params.id);
        }
   },[params.id])

   const loadData2 = async (id)=>{
    const res = await fetch(`http://localhost:3000/historial/${id}`)
    const data = await res.json()
    if(data.length>0){
        setGrafica2({
            labels: data.map((grafica)=>grafica.semanas),
            datasets: [{
                label: 'Perdida semanal',
                data: data.map((grafica)=>grafica.peso_actual),
            }]
        })
    }else{
        console.log('no hay datos');
    }
 
    
};

 useEffect(()=>{
    if (params.id){
         loadData2(params.id);
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
            <div>
                <div>
                    {user.map(usuario=>(
                        <div key={usuario.id_usuario}>
                            <h4 className>Pronostico de perdida de peso de: <h3 className="font-bold">{usuario.nombre}</h3></h4>
                        </div>
                    ))

                    }
                </div>

                <div className="w-8/12">
                    
                    {grafica!==null?(

                        <Line data={grafica}/>
                    ):(
                        <div></div>
                    )}
            
                </div>

            </div>

<hr className="w-full"/>
            <div className="my-6">

                <div className="w-8/12">
                    
                    {grafica2!==null?(

                        <Line data={grafica2}/>
                    ):(
                        <div></div>
                    )}
            
                </div>

            </div>

        </div>
    )

}

export default Grafica;