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
      }

      
    return (
        <div>
      
            <Modal
                isOpen={open}
                onAfterOpen={false}
                onRequestClose={false}
                
                
            >
                <h2>Asignar usuario a: </h2>
                {props.cc}      
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
                <select className="form-select" aria-label="Default select example" {...register("rol", { required: true})}>
                    <option selected>Rol</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
        
                <button className="btn btn-primary mb-3 col-lg-3 col-md-4">Registrar</button>
            </form>

            <button className="btn btn-primary mb-3 col-lg-3 col-md-4" onClick={closeModal}>Cerrar</button>

            </Modal>
    </div>
    )
}
