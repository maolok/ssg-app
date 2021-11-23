import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import React,{useEffect,useState} from 'react'

export const Modalview = (props) => {

    const { register, handleSubmit } = useForm();
    const [open, setopen] = useState(true);


      const onSubmit = (data) => {
        
        alert(JSON.stringify(data));

      }

      const closeModal = () => {
        
        
        setopen(false);
        props.modalstate(false);
      }

      
    return (
        <div className="container">
      
            <Modal
                isOpen={open}
                onAfterOpen={false}
                onRequestClose={false}
                
                
            >
                
                
                <h2>Asignar usuario a: {props.nombre} - {props.cc}</h2>    
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlFor="username" className="form-label" >Nombre Usuario</label>
                    <input type="text" className="form-control" id="username" {...register("usuario", { required: true, maxLength: 20 })}/>
                </div>
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlFor="pass" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="pass" {...register("clave", { required: true, maxLength: 20 })}/>
                </div>
                
                <div className="mb-3 col-lg-3 col-md-4">
                <label>Roles:</label>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" {...register("1")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Responsable SG-SST
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck2" {...register("2")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Copassst
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck3" {...register("3")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Cocola
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck4" {...register("4")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Brigada Emergencia
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck5" {...register("5")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Presidente Copasst
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck6" {...register("6")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Presidente Cocola
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck7" {...register("7")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Presidente BE
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck8" {...register("8")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Empleado
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck9" {...register("9")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Lider con Personal a cargo
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck10" {...register("10")}/>
                    <label class="form-check-label" for="defaultCheck1">
                        Empleador
                    </label>
                    </div>
                </div>
        
                <button className="btn btn-primary mb-3 col-lg-3 col-md-4">Crear</button>
            </form>
            
            <button className="btn btn-primary mb-3 col-lg-3 col-md-4" onClick={closeModal}>Cerrar</button>

            </Modal>
    </div>
    )
}
