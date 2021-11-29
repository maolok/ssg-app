import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import React,{useEffect,useState} from 'react'
import axios from 'axios';


export const ModalCargarDoc = (props) => {
    const [open, setopen] = useState(true);
    const [file, setfile] = useState(null);
    const [tDocumento, settDocumento] = useState("p");
    const [reload,setreload] = useState(false);

    let token = localStorage.getItem("token");


      const onSubmit = (data) => {
        
        alert(JSON.stringify(data));

      }

      const closeModal = () => {
        
        props.modalstate(false,true);

        setopen(false);
      }
      const onFileChange = (event) => {
        
        // Update the state
        setfile(event.target.files[0]);
      };
      const onTDocumentChange = (event) => {
        
        // Update the state
        settDocumento(event.target.value);
      
      }
      const handleCargarFile = (e) => {
        
        e.preventDefault();

        if (tDocumento === "p"){
            alert("Debe seleccionar el tipo de documento");
        }else{

            axios({

                method: "post",
                url: "http://192.34.58.242:8080/sg-sst/"+props.path,
                headers : {Authorization:token},
                data: {
                    id_empleado: props.id,
                    id_tipo_documento: tDocumento,
                    nombre_archivo: file.name
                  }

              })
                .then(function (response) {
                 console.log(response.data.Datos);
        
                  if (response.data.Codigo == 1){
                       alert("Archivo Cargado!");
                       setreload(true);
                       closeModal();
                  }
                    
                })
                .catch(function (response) {
                  //handle error
                  console.log(response);
                  alert("Error conectando al Servidor");
                  
                });


        }
      
      }
    return (
        <div className="container">
      
            <Modal
                isOpen={open}
                onAfterOpen={false}
                onRequestClose={false}     
            >
              {props.cargarconid? <h2>Cargar Documento a: {props.nombre} - {props.id}</h2>:<h2>Cargar Documento</h2>}
                 

                <form onSubmit={handleCargarFile}>
                
                <div class="form-group col-sm-3">
                    <label forHtml="inputState">Tipo Documento</label>
                    <select id="inputState" class="form-control" onChange={evt => onTDocumentChange(evt)} required>

                    <option selected value="p">Seleccione</option>


                        {props.tiposdocumentos.map((documento)=>{

                         return(
    
                            <option value={documento.id}>{documento.descripcion}</option>

                         )   


                        })}
                        
                    </select>

                </div>
                <div class="form-group col-sm-3">
                    <label forHtml="file">Documento</label>
                    <input type="file" id="file" onChange={evt => onFileChange(evt)} required/>
                    
                </div>
                
                
        
                <button className="btn btn-primary mb-3 col-lg-3 col-md-4">Cargar</button>
            </form>
            
            <button className="btn btn-primary mb-3 col-lg-3 col-md-4" onClick={closeModal}>Cerrar</button>

            </Modal>
    </div>
    )
}
