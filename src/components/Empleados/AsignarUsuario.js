import React from 'react'
import { useForm } from "react-hook-form";

export const AsignarUsuario = ({datauser}) => {

    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
    return (
        <div>
         <h1>Crear Usuario</h1>
         <hr/>
         <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="username" class="form-label" >Nombre Usuario</label>
                    <input type="text" class="form-control" id="username" {...register("usuario", { required: true, maxLength: 20 })}/>
                </div>
               
                <div class="mb-3 col-lg-3 col-md-4">
                    <label for="pass" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="pass" {...register("clave", { required: true, maxLength: 20 })}/>
                </div>


        
                <button class="btn btn-primary mb-3 col-lg-3 col-md-4">Crear</button>
            </form>

            
        </div>
    )
}
