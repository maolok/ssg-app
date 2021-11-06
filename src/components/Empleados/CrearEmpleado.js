import React from 'react'
import { useForm } from "react-hook-form";


export const CrearEmpleado = () => {
    
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };

    return (
        <div className='container'>
            <h1>Crear Empleado</h1>
            <hr />

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" {...register("nombre", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                </div>
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlFor="lastname" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastname" {...register("apellido", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                </div>
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlFor="cc" className="form-label">Cedula</label>
                    <input type="text" className="form-control" id="cc" {...register("cedula", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                </div>
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlFor="phone" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="phone" {...register("telefono", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                </div>
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlFor="celphone" className="form-label">Celular</label>
                    <input type="text" className="form-control" id="celphone" {...register("celular", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                </div>
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlFor="addres" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="addres" {...register("direccion", { required: true, maxLength: 20 })} />
                </div>
               
        
                <button className="btn btn-primary mb-3 col-lg-3 col-md-4">Registrar</button>
            </form>


        </div>
    )
}
