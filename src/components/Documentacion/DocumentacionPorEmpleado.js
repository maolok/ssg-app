import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import pdf from '../../estaticos/pdf.png'; 
import excel from '../../estaticos/excel.png'; 
import word from '../../estaticos/word.png';
import document from '../../estaticos/documento.png';
import axios from 'axios';
import { ModalCargarDoc } from './ModalCargarDoc';
import { Spinner } from '../utils/Spinner';


export const DocumentacionPorEmpleado = () => {

    
    const [empleadodocumentos,setempleadodocumentos] = useState([]);
    const [modalcargar,setmodalcargar] = useState(false);
    const [spiner,setspiner] = useState(true);


    let { nombre,id } = useParams();

    const Documentos = [{
      id : 1,
      descripcion : "Curso 50 Horas"
    },
    {
      id : 2,
      descripcion : "Cedula"
    },
    {
      id : 3,
      descripcion : "Certficado Salud"
    },
    {
      id : 4,
      descripcion : "Responsabilidades"
    }
    
  ]
  const handleModal = (modalstate,reload) => {
    setmodalcargar(modalstate);

    if(reload){
      window.location.reload(false);
    }
  }

  const handleDeleteFile = (iddelete) => {

    axios({

      method: "delete",
      url: "http://192.34.58.242:8080/sg-sst/documentos_empleado/"+iddelete,
      headers : {Authorization:token}
    })
      .then(function (response) {
       //console.log(response.data.Datos);

        if (response.data.Codigo == 1){
           alert("archivo borrado!");
           window.location.reload(false);
         }
          
      })
      .catch(function (response) {
        //handle error
        console.log("fail");
        alert("Error conectando al Servidor");
        
      });
  }

    let token = localStorage.getItem("token");
        useEffect(() => {
            axios({

                method: "get",
                url: "http://192.34.58.242:8080/sg-sst/documentos_empleado/id_empleado/"+id,
                headers : {Authorization:token}
              })
                .then(function (response) {
                 //console.log(response.data.Datos);
        
                  if (response.data.Codigo == 1){
                    setempleadodocumentos(response.data.Datos); 
                    setspiner(false);
 
                  }else if(response.data.Codigo == 2){
                    setspiner(false);
                    alert("no hay datos en la consulta");
                  }
                    
                    
                })
                .catch(function (response) {
                  //handle error
                  console.log("fail");
                  alert("Error conectando al Servidor");
                  
                });
          },[]);


    const iconos = {
        
        height : 50,
        width : 50

      };

    return (
        <div>
            <h1>Documentacion de {nombre} </h1>
            <h3>ID {id}</h3>
            {spiner ? <Spinner/>:""}
            <hr/>

        
                   <div className="d-flex justify-content-end" >

                    <button className="btn btn-info" onClick={() => {setmodalcargar(true)}}>Cargar Documento</button>

                   </div>
                   <br/>
            
<table className="table">
<thead className="thead-dark">
  <tr>
    
    <th scope="col">Documentos</th>
    <th scope="col">Eliminar</th>
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
              <tr key={documento.id}>
              
              <td>
              
              <img style={iconos} src={logo}/>
              <button className="btn"><b>{" "+documento.nombre_archivo}</b></button>

              </td>
              

              <td >
              
              <button className="btn"  onClick={() => handleDeleteFile(documento.id)}><i className="fa fa-trash" ></i><b>Eliminar</b></button>

              </td>

              </tr>
              )



        })


    }

  
</tbody>
</table>  
{
    modalcargar ? <ModalCargarDoc
    
    
    id={id}
    nombre={nombre}
    modalstate={handleModal}
    tiposdocumentos={Documentos}
    path={"documentos_empleado"}
    cargarconid={true}

    
    /> : ""
}


</div>
    )
}
