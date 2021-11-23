import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import React,{useEffect,useState} from 'react'

export const ModalEditar = (props) => {

    const { register, handleSubmit } = useForm();
    const [open, setopen] = useState(true);
    let arr2 = [10];


      const onSubmit = (data) => {
        
        alert(JSON.stringify(data));

      }

      const closeModal = () => {
        
        
        setopen(false);
        props.modalstate(false);
      }

      //peticion a info de este usuario
      const userdata = {
          id_empleado : "1",
          usuario : "esteban666",
          password : "teban123",
          roles : "1,8,5"
      }

      const splitroles = (roles) =>{

        
        for(let i=0;i<10;i++){  //10 checkbox
           
            if (roles.includes((i+1))){
               arr2[i] = true;
            }else{
                arr2[i] = false;
            }
        }
        //console.log(arr2);
      }

      splitroles(userdata.roles);


    return (
        <div className="container">
      
            <Modal
                isOpen={open}
                onAfterOpen={false}
                onRequestClose={false}
                
                
            >
                <h2>Editar usuario de: {props.nombre} - {props.cc}</h2>    
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlhtmlFor="username" className="form-label" >Nombre Usuario</label>
                    <input type="text" className="form-control" id="username" value={userdata.usuario} disabled={true}/>
                </div>
                <div className="mb-3 col-lg-3 col-md-4">
                    <label htmlhtmlFor="pass" className="form-label">Contraseña</label>
                    <input type="text" className="form-control" id="pass" value={userdata.password} {...register("clave", { required: true, maxLength: 20 })}/>
                </div>
                
                <div className="mb-3 col-lg-3 col-md-4">
                <label>Roles:</label>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" checked={arr2[0]} {...register("1")}/>
                    <label class="form-check-label">
                        Responsable SG-SST
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck2" checked={arr2[1]} {...register("2")}/>
                    <label class="form-check-label">
                        Copassst
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck3" checked={arr2[2]} {...register("3")}/>
                    <label class="form-check-label" htmlFor="defaultCheck1">
                        Cocola
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck4" checked={arr2[3]} {...register("4")}/>
                    <label class="form-check-label" htmlFor="defaultCheck1">
                        Brigada Emergencia
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck5" checked={arr2[4]} {...register("5")}/>
                    <label class="form-check-label" htmlFor="defaultCheck1">
                        Presidente Copasst
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck6" checked={arr2[5]} {...register("6")}/>
                    <label class="form-check-label" htmlFor="defaultCheck1">
                        Presidente Cocola
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck7" checked={arr2[6]} {...register("7")}/>
                    <label class="form-check-label" htmlFor="defaultCheck1">
                        Presidente BE
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck8" checked={arr2[7]} {...register("8")}/>
                    <label class="form-check-label" htmlFor="defaultCheck1">
                        Empleado
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck9" checked={arr2[8]} {...register("9")}/>
                    <label class="form-check-label" htmlFor="defaultCheck1">
                        Lider con Personal a cargo
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck10" checked={arr2[9]} {...register("10")}/>
                    <label class="form-check-label" htmlFor="defaultCheck1">
                        Empleador
                    </label>
                    </div>
                </div>
        
                <button className="btn btn-primary mb-3 col-lg-3 col-md-4">Guardar</button>
            </form>
            
            <button className="btn btn-primary mb-3 col-lg-3 col-md-4" onClick={closeModal}>Cerrar</button>

            </Modal>
    </div>
    )
}
