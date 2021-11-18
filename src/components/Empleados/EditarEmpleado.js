import React from 'react'
import { useForm } from "react-hook-form";
import { Link, NavLink, useHistory,useParams } from 'react-router-dom';


export const EditarEmpleado = () => {

    const data = {
            primernombre : 'Esteban',
            segundonombre : "Mauricio"
            
        } //data de peticion de cada empleado por id o cedula puede ser en un useeffect
    let { id,cc } = useParams();

    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };

    return (
        <div className='container'>
            <h1>Editando Empleado cedula {cc} con id {id}</h1>
            <hr />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="name" className="form-label">Primer Nombre</label>
                        <input type="text" className="form-control" id="name" value={data.primernombre} {...register("primer_nombre", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="name" className="form-label">Segundo Nombre</label>
                        <input type="text" className="form-control" id="name" value={data.segundonombre} {...register("segundo_nombre", { required: false, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                    </div>
                </div>

                <div className="row">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="lastname" className="form-label">Primer Apellido</label>
                        <input type="text" className="form-control" id="lastname" {...register("primer_apellido", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="lastname" className="form-label">Segundo Apellido</label>
                        <input type="text" className="form-control" id="lastname" {...register("segundo_apellido", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                    </div>
                </div>

                <div className="row">

                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="lastname" className="form-label">Cargo</label>
                        <input type="text" className="form-control" id="lastname" {...register("cargo", { required: true, maxLength: 20})} />
                    </div>
                    
                    <div class="form-group col-sm-3">
                    <label for="inputState">Nivel Educativo</label>
                    <select id="inputState" class="form-control" {...register("nivel_educativo", { required: true})}>
                            <option selected value="0">Ninguno</option>
                            <option value="1">Primaria</option>
                            <option value="2">Bachillerato</option>
                            <option value="3">Tecnico</option>
                            <option value="4">Tecnologo</option>
                            <option value="5">Profesional</option>
                    </select>
                    </div>

                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="lastname" className="form-label">Fecha Ingreso</label>
                        <input type="date" className="form-control"
                            min="2000-01-01" max="2021-12-31" {...register("fecha_ingreso", { required: true})}/>
                    </div>

                </div>


                <div className="row">

                <div class="form-group col-sm-3">
                    <label for="inputState">Tipo Documento</label>
                    <select id="inputState" class="form-control" {...register("tipo_documento", { required: true})}>
                        <option selected value="0">Cedula</option>
                        <option value="1">Pasaporte</option>
                        <option value="2">Cedula Extranjeria</option>
                        <option value="3">Permiso Especial</option>
                    </select>
                    </div>

                                        
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="cc" className="form-label"># Identificacion</label>
                        <input type="text" className="form-control" id="cc" {...register("numero_identificacion", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>

                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="lastname" className="form-label">Fecha Nacimiento</label>
                        <input type="date" className="form-control"
                            min="1900-01-01" max="2021-12-31" {...register("fecha_nacimiento", { required: true})}/>
                    </div>

                </div>

                <div className="row">


                    <div className="mb-3 col-sm-3">
                        <label htmlFor="edad" className="form-label">Edad</label>
                        <input type="text" className="form-control" id="edad" {...register("edad", { required: true, maxLength: 3, pattern: /^[0-9]*$/i })} />
                    </div>
                    
                    <div class="form-group col-sm-3">
                    <label for="inputState">Genero</label>
                    <select id="inputState" class="form-control" {...register("genero", { required: true})}>
                        <option selected value="0">Maculino</option>
                        <option value="1">Femenino</option>
                    </select>
                    </div>

                    <div className="mb-3 col-sm-3">
                        <label htmlFor="addres" className="form-label">Tipo Sangre</label>
                        <input type="text" className="form-control" id="addres" {...register("tipo_sangre", { required: true, maxLength: 4 })} />
                    </div>
                </div>

                <div className="row">

                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Turno Laboral</label>
                        <input type="text" className="form-control" id="addres" {...register("turnolaboral", { required: true, maxLength: 15})} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="phone" {...register("telefono", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="celphone" className="form-label">Celular</label>
                        <input type="text" className="form-control" id="celphone" {...register("celular", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                </div>

                <div className="row">

                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="celphone" className="form-label">Correo Electronico</label>
                        <input type="email" className="form-control" id="celphone" {...register("correo", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Direccion</label>
                        <input type="text" className="form-control" id="addres" {...register("direccion", { required: true, maxLength: 20 })} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Barrio</label>
                        <input type="text" className="form-control" id="addres" {...register("barrio", { required: true, maxLength: 15 })} />
                    </div>
                </div>

                <div className="row">


                    <div className="mb-3 col-md-5">
                        <label htmlFor="addres" className="form-label">Municipio</label>
                        <input type="text" className="form-control" id="addres" {...register("municipio", { required: true, maxLength: 15 })} />
                    </div>
                    <div className="mb-3 col-sm-4">
                        <label htmlFor="addres" className="form-label">Estrato</label>
                        <input type="text" className="form-control" id="addres" {...register("estrato", { required: true, maxLength: 1 })} />
                    </div>

                </div>

                <div className="row">


                    <div className="mb-3 col-md-5">
                        <label htmlFor="addres" className="form-label">Etnia</label>
                        <input type="text" className="form-control" id="addres" {...register("etnia", { required: true, maxLength: 1 })} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Comp Familiar</label>
                        <input type="text" className="form-control" id="addres" {...register("comp_familiar", { required: true, maxLength: 1 })} />
                    </div>
            
                </div>
                <button className="btn btn-primary mb-3 col-sm-2">Guardar</button>


            </form>


        </div>
    )
}
