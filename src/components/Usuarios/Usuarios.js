import React from 'react'
import { useForm } from "react-hook-form";


export const Usuarios = () => {
    
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };

    return (
        <div className='container'>
            <h1>Crear Usuario</h1>
            <hr />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="username" class="form-label" >Nombre Usuario</label>
                    <input type="text" class="form-control" id="username" {...register("usuario", { required: true, maxLength: 20 })}/>
                </div>
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="name" {...register("nombre", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                </div>
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="lastname" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="lastname" {...register("apellido", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                </div>
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="cc" class="form-label">Cedula</label>
                    <input type="text" class="form-control" id="cc" {...register("cedula", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                </div>
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="phone" class="form-label">Telefono</label>
                    <input type="text" class="form-control" id="phone" {...register("telefono", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                </div>
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="celphone" class="form-label">Celular</label>
                    <input type="text" class="form-control" id="celphone" {...register("celular", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                </div>
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="addres" class="form-label">Direccion</label>
                    <input type="text" class="form-control" id="addres" {...register("direccion", { required: true, maxLength: 20 })} />
                </div>
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="pass" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="pass" {...register("clave", { required: true, maxLength: 20 })}/>
                </div>
        
                <button class="btn btn-primary mb-3 col-lg-3 col-md-4">Registrar</button>
            </form>


        </div>
    )
}
