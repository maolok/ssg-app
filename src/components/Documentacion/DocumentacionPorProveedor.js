import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import pdf from '../../estaticos/pdf.png'; 
import excel from '../../estaticos/excel.png'; 
import word from '../../estaticos/word.png';
import document from '../../estaticos/documento.png';
import { Spinner } from '../utils/Spinner';
import axios from 'axios';
import { ModalCargarDoc } from './ModalCargarDoc';




export const DocumentacionPorProveedor = () => {
    const [spiner,setspiner] = useState(true);
    const [proveedores,setproveedores] = useState([]);
    let { nombre,id } = useParams();
    const [modalcargar,setmodalcargar] = useState(false);

    const Documentos = [{
        id : 1,
        descripcion : "Seguridad Social"
      },
      {
        id : 2,
        descripcion : "Certificado ARL"
      },
      {
        id : 3,
        descripcion : "Ficha Seg Productos"
      }
      
      
    ]

    const handleModal = (modalstate,reload) => {
        setmodalcargar(modalstate);
    
        if(reload){
          window.location.reload(false);
        }
    };


    let token = localStorage.getItem("token");
        useEffect(() => {
            axios({

                method: "get",
                url: "http://192.34.58.242:8080/sg-sst/proveedor/"+id,
                headers : {Authorization:token}
              })
                .then(function (response) {
                 console.log(response.data.Datos);
        
                  if (response.data.Codigo == 1){
                         setproveedores(response.data.Datos);
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

    const eliminarDocumento = (doc)=>{
        alert("peticio borrar documento"+doc);

    }

    const iconos = {
        
        height : 50,
        width : 50

      };

      const logosearch = (nombrefile) =>{

        
            let logo;
            if (nombrefile.includes("pdf")){
                 logo = pdf;
            }else if (nombrefile.includes("xlsx"))
            {
                logo = excel;
            }else if (nombrefile.includes("docx"))
            {
                logo = word;
            }else{
                logo = document;
            }

           return logo; 


      }

    return (
        <div>
            <h1>Documentacion de {nombre} </h1>
            <h3>id {id}</h3>
            {spiner ? <Spinner/>:""}
            <hr/>

        
                   <div className="d-flex justify-content-end" >

                    <button className="btn btn-info" onClick={() => {setmodalcargar(true)}}>Editar Documento</button>

                   </div>
                   <br/>
            
<table className="table">
<thead className="thead-dark">
  <tr>
    <th scope="col">Nombre</th>
    <th scope="col">Documento</th>
  </tr>
</thead>
<tbody>
    {
        proveedores.map((proveedor) => {
  
            

            
          return(
              <>
            <tr>
              
                <td>
                
                <b>Seguridad Social</b>

                </td>

                <td >
                
                <img style={iconos} src={logosearch(proveedor.seguridad_social)}/>
                <button class="btn"><b>{proveedor.seguridad_social}</b></button>

                </td>
   

            </tr>


            <tr>
              
                <td>
                
                <b>Certificado ARL</b>

                </td>

                <td>
                
                <img style={iconos} src={logosearch(proveedor.certificado_arl)}/>
                <button class="btn"><b>{proveedor.certificado_arl}</b></button>

                </td>
  

            </tr>

            <tr>
                        
                <td >

                <b>Ficha Productos</b>

                </td>

                <td >

                <img style={iconos} src={logosearch(proveedor.ficha_seg_productos)}/>
                <button class="btn"><b>{proveedor.ficha_seg_productos}</b></button>

                </td>

            </tr>

            </>

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
    path={"documentos_empresa"}
    cargarconid={true}

    
    /> : ""
} 

</div>


    )
}
