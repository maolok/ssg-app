import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import pdf from '../../estaticos/pdf.png'; 
import excel from '../../estaticos/excel.png'; 
import word from '../../estaticos/word.png';
import document from '../../estaticos/documento.png';
import axios from 'axios';
import { ModalCargarDoc } from './ModalCargarDoc';

export const DocumentacionEmpresa = () => {

    const [empresadocumentos,setempresadocumentos] = useState([]);
    const [modalcargar,setmodalcargar] = useState(false);


    const Documentos = [{
        id : 1,
        descripcion : "RUT"
      },
      {
        id : 2,
        descripcion : "Certificado Tributario"
      },
      {
        id : 3,
        descripcion : "Certificado Fiscal"
      },
      {
        id : 4,
        descripcion : "Otro Documento"
      }
      
    ]

    let token = localStorage.getItem("token");
        useEffect(() => {
            axios({

                method: "get",
                url: "http://192.34.58.242:8080/sg-sst/documentos_empresa",
                headers : {Authorization:token}
              })
                .then(function (response) {
                 console.log(response.data.Datos);
        
                  if (response.data.Codigo == 1){
                         setempresadocumentos(response.data.Datos);  
                  }
                    
                })
                .catch(function (response) {
                  //handle error
                  console.log("fail");
                  alert("Error conectando al Servidor");
                  
                });
          },[]);


          const handleDeleteFile = (iddelete) => {

            axios({
        
              method: "delete",
              url: "http://192.34.58.242:8080/sg-sst/documentos_empresa/"+iddelete,
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

          const handleModal = (modalstate,reload) => {
            setmodalcargar(modalstate);
        
            if(reload){
              window.location.reload(false);
            }
          }
    

    const iconos = {
        
        height : 50,
        width : 50

      };

    return (
        <div>
            <h1>Documentacion-Empresa</h1>
            <hr/>

        
                   <div className="d-flex justify-content-end" >

                    <button className="btn btn-info"  onClick={() => {setmodalcargar(true)}}>Cargar Documento</button>

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
        empresadocumentos.map((documento) => {
  
            let logo;
            if (documento.nombre_archivo.includes("pdf")){
                 logo = pdf;
            }else if (documento.nombre_archivo.includes("xlsx"))
            {
                logo = excel;
            }else if (documento.nombre_archivo.includes("docx"))
            {
                logo = word;
            }

            
          return(
              <tr>
              
              <td >
              
              <img style={iconos} src={logo}Empleados/>
              <button class="btn"><b>{" "+documento.nombre_archivo}</b></button>

              </td>

              <td >
              
              <button className="btn" onClick={() => handleDeleteFile(documento.id)}><i class="fa fa-trash"></i><b>Eliminar</b></button>

              </td>


              </tr>
              )



        })


    }

  
</tbody>
</table> 
{
    modalcargar ? <ModalCargarDoc
    
    
    id={"nn"}
    nombre={"nn"}
    modalstate={handleModal}
    tiposdocumentos={Documentos}
    path={"documentos_empresa"}
    cargarconid={false}

    
    /> : ""
} 

</div>


    )
}
