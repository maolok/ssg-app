import React,{useEffect,useState} from 'react'
import { useForm } from "react-hook-form";
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

export const EditarProveedor = () => {

    const [proveedordata,setproveedordata] = useState([]);
    const [registroeditado, setregistroeditado] = useState(false);
    const { register, handleSubmit } = useForm();

    let { id,nombre } = useParams();

    let token = localStorage.getItem("token");
        useEffect(() => {
            axios({

                method: "get",
                url: "http://192.34.58.242:8080/sg-sst/proveedor/"+id,
                headers : {Authorization:token}
              })
                .then(function (response) {
                 //console.log(response.data.Datos);
        
                  if (response.data.Codigo == 1){
                         setproveedordata(response.data.Datos); 
                  }
                    
                })
                .catch(function (response) {
                  //handle error
                  console.log("fail");
                  alert("Error conectando al Servidor");
                  
                });
          },[]);


    const onSubmit = (data) => {

        let token = localStorage.getItem("token");
        axios({

            method: "post",
            url: "http://192.34.58.242:8080/sg-sst/proveedor",
            headers : {Authorization:token},
            data: {
                id:proveedordata[0].id,
                email:data.correo,
                es_autorizado:data.autorized,
                nit:data.nit,
                razon_social:data.razonsocial,
                telefono1:data.telefono1,
                telefono2:data.telefono2,
                tipo_empresa:data.tipoempresa,
                certificado_arl: proveedordata[0].certificado_arl,
                seguridad_social: proveedordata[0].seguridad_social,
                ficha_seg_productos: proveedordata[0].ficha_seg_productos
            }

        })
            .then(function (response) {
            console.log(response.data.Datos);

            if (response.data.Codigo == 1){
                alert("Proveedor Editado!");
                setregistroeditado(true);
                
            }
                
            })
            .catch(function (response) {
            //handle error
            console.log(response);
            alert("Error conectando al Servidor");
            
            });


    };

    


    return (
        <div className='container'>
            <h1>Editando Proveedor {nombre} con id {id}</h1>
            <hr />


             {
             
             proveedordata.map((proveedor) => {
    
             return(

                <form key={proveedor.id} onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="name" className="form-label">Razon Social</label>
                        <input type="text" className="form-control" id="name" defaultValue={proveedor.razon_social} {...register("razonsocial", { required: true, maxLength: 40})} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="NIT" className="form-label">NIT</label>
                        <input type="text" className="form-control" id="NIT" defaultValue={proveedor.nit} {...register("nit", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                </div>

                <div className="row">
                    <div className="mb-3 col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono 1</label>
                        <input type="text" className="form-control" id="phone" defaultValue={proveedor.telefono1} {...register("telefono1", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono 2</label>
                        <input type="text" className="form-control" id="phone" defaultValue={proveedor.telefono2} {...register("telefono2", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                </div>

                <div className="row">

                    <div className="mb-3 col-md-8">
                        <label htmlFor="celphone" className="form-label">Correo Electronico</label>
                        <input type="email" className="form-control" id="celphone" defaultValue={proveedor.email} {...register("correo", { required: true, maxLength: 40 })} />
                    </div>
                    

                </div>
                
                <div className="row">

                    
                    <div className="mb-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Tipo De Empresa</label>
                        <input type="text" className="form-control" id="addres" defaultValue={proveedor.tipo_empresa} {...register("tipoempresa", { required: true, maxLength: 50 })} />
                    </div>
                    <div className="form-group col-sm-4">
                    <label htmlFor="inputState">Es Autorizado</label>
                    <select id="inputState" className="form-control" defaultValue={proveedor.es_autorizado.toString()} {...register("autorized", { required: true})}>
                        <option selected value="true">Si</option>
                        <option value="false">No</option>
                    </select>
                    </div>
                    
                </div>

                


                

                
                <button className="btn btn-primary mb-3 col-sm-2">Guardar</button>


            </form>
                
            


                )



                })

            }
            
            {
                registroeditado ? <Redirect to="/proveedores"/> :""
            }
                


        </div>
    
    )
}
