import React from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import pdf from '../../estaticos/pdf.png'; 
import excel from '../../estaticos/excel.png'; 
import word from '../../estaticos/word.png'; 

export const DocumentacionPorProveedor = () => {
    let { nombre,nit } = useParams();

    // peticion buscar documentacion por nit empresa o preguntar si mejor por id

    const data = [
        {
            id : 1,
            nombreDocumento: "Rut.pdf",
            ruta : "/xas"
        },
        {
            id: 2,
            nombreDocumento: "documento empresa 1.xlsx",
            ruta : "/asd"

        },
        {
            id: 3,
            nombreDocumento: "documento empresa 2.docx",
            ruta : "/sdad"

        },{
            id: 4,
            nombreDocumento: "documento empresa 3.pdf",
            ruta : "/asds"

        }
    ]

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
            <h3>Nit {nit}</h3>
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
        data.map((documento) => {
  
            let logo;
            if (documento.nombreDocumento.includes("pdf")){
                 logo = pdf;
            }else if (documento.nombreDocumento.includes("xlsx"))
            {
                logo = excel;
            }else if (documento.nombreDocumento.includes("docx"))
            {
                logo = word;
            }

            
          return(
              <tr>
              
              <td >
              
              <img style={iconos} src={logo}/>
              <button class="btn"><b>{" "+documento.nombreDocumento}</b></button>

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
