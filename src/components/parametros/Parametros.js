import React from 'react'
import { useForm } from "react-hook-form";


export const Parametros = () => {
    //peticion a parametros empresa

    const { register, handleSubmit } = useForm();
    const data = 
        {
            RazonSocial : 'Chocolates SAS',
            Nit : "123456789",
            Latitud : '-76585.90',
            Longitud : '6.43',
            Actividad : "comercio al por mayor",
            NivelRiesgo : "bajo"
            
        }
        const onSubmit = (data) => {
            alert(JSON.stringify(data));
          };
    return (
        <div>
            <h1>Parametros</h1>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="name" className="form-label">Razon Social</label>
                        <input type="text" className="form-control" id="name" value={data.RazonSocial} {...register("razonsocial" , { required: true, maxLength: 40})} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="nit" className="form-label">NIT</label>
                        <input type="text" className="form-control" id="nit" value={data.Nit} {...register("nit", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                </div>

                <div className="row">
                <div className="mb-3 col-md-5">
                        <label htmlFor="latitud" className="form-label">Latitud</label>
                        <input type="text" className="form-control" id="latitud" value={data.Latitud} {...register("latitud", { required: true, maxLength: 20 })} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="longitud" className="form-label">Longitud</label>
                        <input type="text" className="form-control" id="longitud" value={data.Longitud} {...register("longitud", { required: true, maxLength: 20 })} />
                    </div>
                </div>

                <div className="row">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="actividadeconomica" className="form-label">Actividad Economica</label>
                        <input type="text" className="form-control" id="actividadeconimica" value={data.Actividad} {...register("actividadeconomica", { required: true, maxLength: 40})} />
                    </div>

                    <div className="mb-3 col-md-4">
                        <label htmlFor="nivelriesgo" className="form-label">Nivel de Riesgo</label>
                        <input type="text" className="form-control" id="nivelriesgo" value={data.NivelRiesgo} {...register("nivelriego", { required: true, maxLength: 40})} />
                    </div>

                </div>


                <div className="row">
                    <div className="mb-3 col-sm-2">
                        <label htmlFor="edad" className="form-label">Cantidad Empleados</label>
                        <input type="text" className="form-control" id="edad" {...register("nempleados", { required: true, maxLength: 5, pattern: /^[0-9]*$/i })} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Naturaleza Juridica</label>
                        <input type="text" className="form-control" id="addres" {...register("naturalezajuridica", { required: true, maxLength: 40})} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Tipo De Empresa</label>
                        <input type="text" className="form-control" id="addres" {...register("tipoempresa", { required: true, maxLength: 40})} />
                    </div> 

                </div>

                <div className="row">

                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono 1</label>
                        <input type="text" className="form-control" id="phone" {...register("telefono", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono 2</label>
                        <input type="text" className="form-control" id="phone" {...register("telefono1", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono 3</label>
                        <input type="text" className="form-control" id="phone" {...register("telefono2", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>


                    
                </div>

                <div className="row">

                    <div className="mb-3 col-lg-9">
                        <label htmlFor="addres" className="form-label">Direccion</label>
                        <input type="text" className="form-control" id="addres" {...register("direccion", { required: true, maxLength: 20 })} />
                    </div>
                </div>

                <div className="row">

                    <div className="mb-3 col-md-5">
                        <label htmlFor="celphone" className="form-label">Correo Electronico</label>
                        <input type="email" className="form-control" id="celphone" {...register("correo", { required: true, maxLength: 30 })} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Pagina Web</label>
                        <input type="text" className="form-control" id="addres" {...register("paginaweb", { required: true, maxLength: 50 })} />
                    </div>
                    
                </div>

                
                <button className="btn btn-primary mb-3 col-sm-2">Guardar</button>


            </form>

        </div>
    )
}
