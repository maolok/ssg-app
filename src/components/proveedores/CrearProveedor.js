import React,{useEffect,useState} from 'react'
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Route, Redirect } from 'react-router-dom';



export const CrearProveedor = () => {
    const [file, setfile] = useState(null);
    const [file1, setfile1] = useState(null);
    const [file2, setfile2] = useState(null);
    const [registrocreado, setregistrocreado] = useState(false);

    const { register, handleSubmit } = useForm();
    
    
    const onSubmit = (data) => {

        let token = localStorage.getItem("token");
        axios({

            method: "post",
            url: "http://192.34.58.242:8080/sg-sst/proveedor",
            headers : {Authorization:token},
            data: {
                certificado_arl:file.name,
                email:data.correo,
                es_autorizado:data.autorized,
                ficha_seg_productos:file1.name,
                nit:data.nit,
                razon_social:data.razonsocial,
                seguridad_social:file2.name,
                telefono1:data.telefono1,
                telefono2:data.telefono2,
                tipo_empresa:data.tipoempresa
              }

          })
            .then(function (response) {
             console.log(response.data.Datos);
    
              if (response.data.Codigo == 1){
                   alert("Proveedor Creado!");
                   setregistrocreado(true);
                   
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
            <h1>Crear Proveedor</h1>
            <hr />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="name" className="form-label">Razon Social</label>
                        <input type="text" className="form-control" id="name" {...register("razonsocial", { required: true, maxLength: 40})} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="NIT" className="form-label">NIT</label>
                        <input type="text" className="form-control" id="NIT" {...register("nit", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                </div>

                <div className="row">
                    <div className="mb-3 col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono 1</label>
                        <input type="text" className="form-control" id="phone" {...register("telefono1", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono 2</label>
                        <input type="text" className="form-control" id="phone" {...register("telefono2", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                </div>

                <div className="row">

                    <div className="mb-3 col-md-8">
                        <label htmlFor="celphone" className="form-label">Correo Electronico</label>
                        <input type="email" className="form-control" id="celphone" {...register("correo", { required: true, maxLength: 40 })} />
                    </div>
                    

                </div>
                
                <div className="row">

                    
                    <div className="mb-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Tipo De Empresa</label>
                        <input type="text" className="form-control" id="addres" {...register("tipoempresa", { required: true, maxLength: 50 })} />
                    </div>
                    <div class="form-group col-sm-4">
                    <label for="inputState">Es Autorizado</label>
                    <select id="inputState" class="form-control" {...register("autorized", { required: true})}>
                        <option selected value="true">Si</option>
                        <option value="false">No</option>
                    </select>
                    </div>
                    
                </div>

                <div className="row">

                    <div class="form-group col-sm-3">
                        <label forHtml="file">Certificado Arl</label>
                        <input type="file" id="file" onChange={evt => setfile(evt.target.files[0])}  required/>
                        
                    </div>
                    
                </div>
                <div className="row">

                    <div class="form-group col-sm-3">
                        <label forHtml="file">Ficha Productos</label>
                        <input type="file" id="file" onChange={evt => setfile1(evt.target.files[0])}  required/>
                        
                    </div>
                    
                </div>
                <div className="row">

                    <div class="form-group col-sm-3">
                        <label forHtml="file">Seguridad Social</label>
                        <input type="file" id="file" onChange={evt => setfile2(evt.target.files[0])}  required/>
                        
                    </div>
                    
                </div>


                

                
                <button className="btn btn-primary mb-3 col-sm-2">Registrar</button>


            </form>

            {
                registrocreado ? <Redirect to="/proveedores"/> :""
            }


        </div>
    )
}
