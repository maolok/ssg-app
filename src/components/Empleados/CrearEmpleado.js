import { useForm } from "react-hook-form";
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';





export const CrearEmpleado = () => {
    
    const { register, handleSubmit } = useForm();
    const [fechavacunas, setfechavacunas] = useState(true);
    const [registrocreado, setregistrocreado] = useState(false);

    
    const onSubmit = (data) => {
        let token = localStorage.getItem("token");
        axios({

            method: "post",
            url: "http://192.34.58.242:8080/sg-sst/empleado",
            headers : {Authorization:token},
            data: {
                afp	:   data.afp,
                arl	:	data.arl,
                barrio	:	data.barrio,
                ccf	:	data.ccf,
                celular	:	data.celular,
                comp_familiar	:	data.comp_familiar,
                contacto_emerg	:	data.nombre_emergencia,
                cual_enf	:	data.cual_enfermedad,
                cual_med	:	data.cual_medicamento,
                direccion	:	data.direccion,
                edad	:	data.edad,
                email	:	data.correo,
                eps	:	data.eps,
                es_instructor	:	data.esinstructor,
                es_vacunado_covid	:	data.vacunacovid,
                estado	:	data.estado,
                estado_civil	:	data.estadocivil,
                estrato	:	data.estrato,
                etnia	:	data.etnia,
                fecha_ingreso	:	data.fecha_ingreso,
                fecha_nac	:	data.fecha_nacimiento,
                fecha_prim_dosis	:data.primer_dosis,
                fecha_retiro	:	data.fecha_retiro,
                fecha_seg_dosis	:	data.segunda_dosis,
                fecha_ter_dosis	:	data.tercer_dosis,
                genero	:	data.genero,
                id_cargo	:	data.cargo,
                id_nivel_estudio	:	data.nivel_educativo,
                identificacion	:	data.numero_identificacion,
                induccion_sst	:	data.induccionsst,
                municipio	:	data.municipio,
                no_hijos	:	data.nhijos,
                parent_emerg	:	data.parentezco_emergencia,
                primer_apellido	:	data.primer_apellido,
                primer_nombre	:	data.primer_nombre,
                rango_tiempo_emp	:	data.rango_empleado,
                salario	:	data.salario,
                segundo_apellido	:	data.segundo_apellido,
                segundo_nombre	:	data.segundo_nombre,
                sufre_enf	:	data.enfermedades,
                telefono_emerg	:	data.celular_emergencia,
                telefono_fijo	:	data.telefonofijo,
                tipo_contrato	:	data.tipo_contrato,
                tipo_documento	:	data.tipo_documento,
                tipo_sangre	:	data.sangre,
                toma_med	:	data.medicina,
                turno_trabajo	:	data.turnolaboral
                
              }

          })
            .then(function (response) {
             console.log(response.data.Datos);
    
              if (response.data.Codigo == 1){
                   alert("Empleado Creado!");
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
            <h1>Crear Empleado</h1>
            <hr />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="name" className="form-label">Primer Nombre</label>
                        <input type="text" className="form-control" id="name" {...register("primer_nombre", { required: true, maxLength: 20})} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="name" className="form-label">Segundo Nombre</label>
                        <input type="text" className="form-control" id="name" {...register("segundo_nombre", { required: false, maxLength: 20})} />
                    </div>
                </div>

                <div className="row">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="lastname" className="form-label">Primer Apellido</label>
                        <input type="text" className="form-control" id="lastname" {...register("primer_apellido", { required: true, maxLength: 20})} />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="lastname" className="form-label">Segundo Apellido</label>
                        <input type="text" className="form-control" id="lastname" {...register("segundo_apellido", { required: true, maxLength: 20})} />
                    </div>
                </div>

                <div className="row">

                   


                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Cargo</label>
                    <select id="inputState" value={"Responsable SSG"} className="form-control" {...register("cargo", { required: true})}>
                        <option value="1">Jefe RH</option>
                        <option value="2">Responsable SSG</option>
                    </select>
                    </div>
                    
                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Nivel Educativo</label>
                    <select id="inputState" className="form-control" {...register("nivel_educativo", { required: true})}>
                            <option value="1">Basica Primaria</option>
                            <option value="2">Basica Secundaria</option>
                            <option value="3">Bachiller</option>
                            <option value="4">Tecnico</option>
                            <option value="5">Tecnologo</option>
                            <option value="6">Profesional</option>
                            <option value="7">Especializacion</option>
                            <option value="8">Maestria</option>
                            <option value="9">Doctorado</option>
                            <option value="10">Post Doctorado</option>

                    </select>
                    </div>

                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="lastname" className="form-label">Fecha Ingreso</label>
                        <input type="date" className="form-control"
                            min="2000-01-01" max="2021-12-31" {...register("fecha_ingreso", { required: true})}/>
                    </div>

                </div>


                <div className="row">

                <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Tipo Documento</label>
                    <select id="inputState" className="form-control" {...register("tipo_documento", { required: true})}>
                        <option value="1">Cedula</option>
                        <option value="2">Cedula Extranjeria</option>
                        <option value="3">Permiso Especial</option>
                        <option value="4">Pasaporte</option>
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


                    <div className="mb-3 col-sm-2">
                        <label htmlFor="edad" className="form-label">Edad</label>
                        <input type="text" className="form-control" id="edad" {...register("edad", { required: true, maxLength: 3, pattern: /^[0-9]*$/i })} />
                    </div>
                    
                    <div className="form-group col-sm-2">
                    <label htmlFor="inputState">Genero</label>
                    <select id="inputState" className="form-control" {...register("genero", { required: true})}>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                    </div>

                    <div className="form-group col-sm-2">
                    <label htmlFor="inputState">Tipo De Sangre</label>
                    <select id="inputState" className="form-control" {...register("sangre", { required: true})}>
                        <option value="O-">O-</option>
                        <option value="O+">O+</option>
                        <option value="A-">A-</option>
                        <option value="A+">A+</option>
                        <option value="B-">B-</option>
                        <option value="B+">B+</option>
                        <option value="AB-">AB-</option>
                        <option value="AB+">AB+</option>
                    </select>
                    </div>

                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Estado Civil</label>
                    <select id="inputState" className="form-control" {...register("estadocivil", { required: true})}>
                        <option value="Soltero">Soltero</option>
                        <option value="Separado">Separado</option>
                        <option value="Viudo">Viudo</option>
                        <option value="Casado">Casado</option>
                        <option value="Union Libre">Union Libre</option>
                        
                    </select>
                    </div>

                </div>

                <div className="row">

                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="addres" className="form-label">Turno Laboral</label>
                        <input type="text" className="form-control" id="addres" {...register("turnolaboral", { required: true, maxLength: 15})} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="phone" className="form-label">Telefono fijo</label>
                        <input type="text" className="form-control" id="phone" {...register("telefonofijo", { required: false, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="celphone" className="form-label">Celular</label>
                        <input type="text" className="form-control" id="celphone" {...register("celular", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>
                </div>

                <div className="row">

                    <div className="mb-3 col-lg-3 col-md-4">
                        <label htmlFor="celphone" className="form-label">Correo Electronico</label>
                        <input type="email" className="form-control" id="celphone" {...register("correo", { required: true, maxLength: 40})} />
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


                    <div className="mb-3 col-sm-4">
                        <label htmlFor="nhijos" className="form-label">Numero Hijos</label>
                        <input type="text" className="form-control" id="nhijos" {...register("nhijos", { required: true, maxLength: 2, pattern: /^[0-9]*$/i })} />

                    </div>

                    <div className="mb-3 col-sm-5">
                        <label htmlFor="salario" className="form-label">Salario</label>
                        <input type="text" className="form-control" id="salario" {...register("salario", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>

                    

                </div>

                <div className="row">


                    <div className="mb-3 col-md-3">
                        <label htmlFor="addres" className="form-label">Municipio</label>
                        <input type="text" className="form-control" id="addres" {...register("municipio", { required: true, maxLength: 15 })} />
                    </div>

                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Estrato</label>
                    <select id="inputState" className="form-control" {...register("estrato", { required: true})}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    </div>

                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Tipo Contrato</label>
                    <select id="inputState" className="form-control" {...register("tipo_contrato", { required: true})}>
                        <option value="Indefinido">INDEFINIDO</option>
                        <option value="Fijo">FIJO</option>
                        <option value="Obra o Labor">OBRA O LABOR</option>
                        <option value="Prestacion Servicios">PRESTACION SERVICIOS</option>
                        <option value="Aprendizaje">APRENDIZAJE</option>
                    </select>
                    </div>

                </div>

                <div className="row">


                <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Etnia</label>
                    <select id="inputState" className="form-control" {...register("etnia", { required: true})}>
                        <option value="Blanco">BLANCO</option>
                        <option value="Mestizo">MESTIZO</option>
                        <option value="Afrocolombiano">AFROCOLOMBIANO</option>
                        <option value="Mulato">MULATO</option>
                        <option value="Indigena">INDIGENA</option>
                        <option value="Ninguna">NINGUNA</option>

                    </select>
                    </div>

                    
                    <div className="mb-3 col-md-3">
                        <label htmlFor="addres" className="form-label">Comp Familiar</label>
                        <input type="text" className="form-control" id="addres" {...register("comp_familiar", { required: true, maxLength: 20 })} />
                    </div>

                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Estado</label>
                    <select id="inputState" className="form-control" {...register("estado", { required: true})}>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                        
                    </select>
                    </div>


            
                </div>

                <div className="row">


                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">EPS</label>
                    <select id="inputState" className="form-control" {...register("eps", { required: true})}>
                        <option value="Sura">SURA</option>
                        <option value="Salud Total">SALUD TOTAL</option>
                        <option value="Sanitas">SANITAS</option>
                        <option value="Nueva eps">NUEVA EPS</option>
                        <option value="Coosalud">COOSALUD</option>
                        <option value="Coomeva">COOMEVA</option>
                        <option value="Savia Salud">SAVIA SALUD</option>
                        <option value="Medimas">MEDIMAS</option>

                    </select>
                    </div>

                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">AFP</label>
                    <select id="inputState" className="form-control" {...register("afp", { required: true})}>
                        <option value="Porvenir">PORVENIR</option>
                        <option value="Proteccion">PROTECCION</option>
                        <option value="Colpensiones">COLPENSIONES</option>
                        <option value="Colfondos">COLFONDOS</option>
                    </select>
                    </div>

                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">CCF</label>
                    <select id="inputState" className="form-control" {...register("ccf", { required: true})}>
                        <option value="Comfenalco">COMFENALCO</option>
                        <option value="Comfama">COMFAMA</option>
                        <option value="Cafam">CAFAM</option>
                        
                    </select>
                    </div>

                    
                    

                </div>

                <div className="row">


                    <div className="form-group col-sm-5">
                    <label htmlFor="inputState">ARL</label>
                    <select id="inputState" className="form-control" {...register("arl", { required: true})}>
                        <option value="Sura">SURA</option>
                        <option value="Bolivar">BOLIVAR</option>
                        <option value="Axa Colpatria">AXA COLPATRIA</option>
                        <option value="Colmena">COLMENA</option>
                        <option value="La Equidad">LA EQUIDAD</option>
                        

                    </select>
                    </div>


                    <div className="form-group col-sm-4">
                    <label htmlFor="inputState">Vacuna Covid-19</label>
                    <select id="inputState" className="form-control" {...register("vacunacovid", { required: true})}>
                        <option value="false">No</option>
                        <option value="true">Si</option>
                        
                    </select>
                    </div>
            

                </div>

                <div className="row">

                    <div className="mb-3 col-sm-3">
                        <label htmlFor="lastname" className="form-label">Fecha Primer Dosis</label>
                        <input type="date" className="form-control"
                            min="1900-01-01" max="2021-12-31"   {...register("primer_dosis")}/>
                    </div>

                    <div className="mb-3 col-sm-3">
                        <label htmlFor="lastname" className="form-label">Fecha Segunda Dosis</label>
                        <input type="date" className="form-control"
                            min="1900-01-01" max="2021-12-31"  {...register("segunda_dosis")}/>
                    </div>

                    <div className="mb-3 col-sm-3">
                        <label htmlFor="lastname" className="form-label">Tercera Segunda Dosis</label>
                        <input type="date" className="form-control"
                            min="1900-01-01" max="2021-12-31"  {...register("tercer_dosis")}/>
                    </div>

                    

                </div>

                <div className="row">

                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Sufre Enfermedades</label>
                    <select id="inputState" className="form-control" {...register("enfermedades", { required: true})}>
                         <option value="false">No</option>
                         <option value="true">Si</option>
                        
                    </select>
                    </div>

                    <div className="mb-3 col-sm-6">
                        <label htmlFor="name" className="form-label">Cuales</label>
                        <input type="text" className="form-control" id="name"  {...register("cuales_enfermedades", { maxLength: 70})} />
                    </div>



                </div>

                <div className="row">

                    <div className="form-group col-sm-3">
                    <label htmlFor="inputState">Toma Algun Medicamento</label>
                    <select id="inputState" className="form-control" {...register("medicamentos", { required: true})}>
                        
                         <option value="false">No</option>
                        <option value="true">Si</option>
                        
                    </select>
                    </div> 

                    <div className="mb-3 col-sm-6">
                        <label htmlFor="name" className="form-label">Cuales</label>
                        <input type="text" className="form-control" id="name"  {...register("cuales_medicamentos", { maxLength: 70})} />
                    </div>



                </div>


                <div className="row">


                    

                    <div className="form-group col-sm-5">
                    <label htmlFor="inputState">Induccion SST</label>
                    <select id="inputState" className="form-control" {...register("induccionsst", { required: true})}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                        
                    </select>
                    </div>

                    <div className="form-group col-sm-4">
                    <label htmlFor="inputState">Es instructor</label>
                    <select id="inputState" className="form-control" {...register("esinstructor", { required: true})}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                        
                    </select>
                    </div> 

                </div>

                <div className="row">


                    <div className="mb-3 col-sm-3">
                        <label htmlFor="name" className="form-label">Contacto Emergencia</label>
                        <input type="text" className="form-control" id="name" {...register("nombre_emergencia", { required: true, maxLength: 40})} />
                    </div>

                    <div className="mb-3 col-sm-3">
                        <label htmlFor="name" className="form-label">Parentezco</label>
                        <input type="text" className="form-control" id="name" {...register("parentezco_emergencia", { required: true, maxLength: 40})} />
                    </div>

                    <div className="mb-3 col-sm-3">
                        <label htmlFor="celphone" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="celphone" {...register("celular_emergencia", { required: true, maxLength: 20, pattern: /^[0-9]*$/i })} />
                    </div>

                </div>

                <div className="row">

                    <div className="mb-3 col-sm-4">
                        <label htmlFor="celphone" className="form-label">Rango T Empleado</label>
                        <input type="text" className="form-control" id="celphone" {...register("rango_empleado", { required: true, maxLength: 5, pattern: /^[0-9]*$/i })} />
                    </div>


                    <div className="mb-3 col-sm-5">
                        <label htmlFor="fecharetiro" className="form-label">Fecha Retiro</label>
                        <input type="date" className="form-control"
                            min="1900-01-01" max="2021-12-31" {...register("fecha_retiro")}/>
                    </div>



                </div>

                <button className="btn btn-primary mb-3 col-sm-2">Registrar</button>


            </form>

            {
                registrocreado ? <Redirect to="/empleados"/> :""
            }

        </div>
    )
}
