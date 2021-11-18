import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Link, NavLink, useHistory } from 'react-router-dom';



export const DocumentacionEmpleados = () => {

    //peticion a empleados
    const data = [
        {
            id : 1,
            nombre: "esteban",
            apellido : "muñoz",
            cc : "123456789",
            usuariocreado : false
        },
        {
            id: 2,
            nombre:"pepito",
            apellido:"perez",
            cc:"987654321",
            usuariocreado: true

        },
        {
            id: 3,
            nombre:"pepito",
            apellido:"perez",
            cc:"987654321",
            usuariocreado: true

        },{
            id: 4,
            nombre:"pepito",
            apellido:"perez",
            cc:"987654321",
            usuariocreado: true

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
            <h1>Documentacion-Empleados</h1>
            <hr/>

            <table className="table">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Carpetas</th>
      
    </tr>
  </thead>
  <tbody>
      {
          data.map((usuario) => {
    
            return(
                <tr>
                
                <td >
                <Link 
                className="navbar-brand" 
                to={{
                    pathname: "/documentacion/empleado/"+usuario.nombre+" "+usuario.apellido+"/"+usuario.cc,
                }}
                >
                    <button class="btn"><i class="fa fa-folder"></i><b>{" "+usuario.nombre+" "+usuario.apellido+"-"+usuario.cc}</b></button>

                    
                    
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
