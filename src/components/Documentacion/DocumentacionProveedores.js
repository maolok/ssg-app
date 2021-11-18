import React from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';



export const DocumentacionProveedores = () => {
    //peticion a proveedores
    const data = [
        {
            id : 1,
            nombre: "mayoritaria kiko",
            nit : "123456789",
            
        },
        {
            id: 2,
            nombre: "respuestos jyk sas",
            nit : "123456789",

        },
        {
            id: 3,
            nombre: "empresa 2 sas",
            nit : "123456789",
            

        },{
            id: 4,
            nombre: "empresa 3 sas",
            nit : "123456789",

        }
    ]

    /*
    const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        
      ];
      const rows  = [
        { id: 1, col1: "Hello", col2: "World" },
        { id: 2, col1: "XGrid", col2: "is Awesome" },
        { id: 3, col1: "Material-UI", col2: "is Amazing" },
        { id: 4, col1: "Hello", col2: "World" },
        { id: 5, col1: "XGrid", col2: "is Awesome" },
        { id: 6, col1: "Material-UI", col2: "is Amazing" }
      ];*/
/*
    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Empleado</th>
      
    </tr>
  </thead>
  <tbody>
      {
          data.map((usuario) => {
            
            return(
                <tr>
                <th scope="row" key={usuario.id}>{usuario.id}</th>
                <td >{usuario.nombre+" "+usuario.apellido+"-"+usuario.cc}</td>
                
                
                </tr>)

          })
      }
    
  </tbody>
</table>

            <DataGrid rows={rows} columns={columns} />
*/

    return (
        <div>
            <h1>Documentacion-Proveedores</h1>
            <hr/>

            <table className="table">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Carpetas</th>
      
    </tr>
  </thead>
  <tbody>
      {
          data.map((proveedor) => {
    
            return(
                <tr>
                
                <td >
                <Link 
                className="navbar-brand" 
                to={{
                    pathname: "/documentacion/empresa/"+proveedor.nombre+"/"+proveedor.nit
                }}
                >
                    <button class="btn"><i class="fa fa-folder"></i><b>{" "+proveedor.nombre}</b></button>

                    
                    
                </Link>
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
