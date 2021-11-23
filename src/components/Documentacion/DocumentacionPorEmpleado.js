import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import pdf from '../../estaticos/pdf.png'; 
import excel from '../../estaticos/excel.png'; 
import word from '../../estaticos/word.png';
import document from '../../estaticos/documento.png';
import axios from 'axios';


export const DocumentacionPorEmpleado = () => {

    
    const [empleadodocumentos,setempleadodocumentos] = useState([]);
    let { nombre,id } = useParams();

    let token = localStorage.getItem("token");
        useEffect(() => {
            axios({

                method: "get",
                url: "http://192.34.58.242:8080/sg-sst/documentos_empleado/id_empleado/"+id,
                headers : {Authorization:token}
              })
                .then(function (response) {
                 console.log(response.data.Datos);
        
                  if (response.data.Codigo == 1){
                         setempleadodocumentos(response.data.Datos);  
                  }
                    
                })
                .catch(function (response) {
                  //handle error
                  console.log("fail");
                  alert("Error conectando al Servidor");
                  
                });
          },[]);

    // peticion buscar documentacion por cedula o preguntar si mejor por id

    

    const eliminarDocumento = (doc)=>{
        alert("peticio borrar documento"+doc);

    }

    const iconos = {
        
        height : 50,
        width : 50

      };

    return (
        <div>
            <h1>Documentacion de {nombre} </h1>
            <h3>ID {id}</h3>
            <hr/>

        
                   <div className="d-flex justify-content-end" >

                    <button className="btn btn-info ">Cargar Documento</button>

                   </div>
                   <br/>
            
<table className="table">
<thead className="thead-dark">
  <tr>
    
    <th scope="col">Documentos</th>
    <th scope="col">Accion</th>
  </tr>
</thead>
<tbody>
    {
        empleadodocumentos.map((documento) => {
  
            let logo;
            if (documento.nombre_archivo.includes("pdf")){
                 logo = pdf;
            }else if (documento.nombre_archivo.includes("xlsx"))
            {
                logo = excel;
            }else if (documento.nombre_archivo.includes("docx"))
            {
                logo = word;
            }else{
                logo = document;
            }

            
          return(
              <tr>
              
              <td >
              
              <img style={iconos} src={logo}/>
              <button class="btn"><b>{" "+documento.nombre_archivo}</b></button>

              </td>

              <td >
              
              <button className="btn" ><i class="fa fa-trash"></i><b>Eliminar</b></button>

              </td>


              </tr>
              )



        })


    }

  
</tbody>
</table>  

</div>


    )
}
