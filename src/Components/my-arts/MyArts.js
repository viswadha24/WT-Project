import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form'
import { MdLogin } from "react-icons/md";
import Cards from '../card/Cards';


function MyArts(props) {
    let [art, setArt] = useState({ img: "" });
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onFormSubmit=(addArtObj)=>{
        addArtObj.image = art.img;
        console.log(addArtObj);
        alert("Art Added Successfull")
        setShow(false);
      }

      const handleChange = (e) => {
        setArt({ img: e.target.files[0].name });
      };



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <div>
            <h1 className='mx-5 text-center'>My ARTS 
              <span className='ml-5' style={{float:"right"}}>
                 <Button variant="primary btn btn-warning" onClick={handleShow}>Add Arts</Button>
              </span>
            </h1>
            <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Art Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
        <form className='mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
      <div className='mb-3 mt-2'>
        <label htmlFor='artName'>Art Name</label>
        <input type="text" id='artName' className='form-control' placeholder='Enter Art Name' {...register('artName', { required: true, minLength: 4})} />
        {errors.artName?.type === 'required' && <p className='text-danger'> *artName is required </p>}
        {errors.artName?.type === 'minLength' && <p className='text-danger'> *min length should be 4 </p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='artistName'>Artist Name</label>
        <input type="text" name='' id='artistName' className='form-control' placeholder='Enter Artist Name' {...register('artistName', { required: true })} />
        {errors.artistName?.type === 'required' && <p className='text-danger'> *Artist Name is required </p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='price'>Price</label>
        <input type="number" name='price' id='price' className='form-control' placeholder='Enter price' {...register('price', { required: true })} />
        {errors.price?.type === 'required' && <p className='text-danger'> *Price is required </p>}
      </div>
      
      <div className='mb-3'>
        <label htmlFor='quantity'>Quantity</label>
        <input type="number" name='quantity' id='quantity' className='form-control' placeholder='Enter quantity' {...register('quantity', { required: true })} />
        {errors.quantity?.type === 'required' && <p className='text-danger'> *Quantity is required </p>}
      </div>

      <div className='mb-3'>
                <label htmlFor='description'>Description</label>
                <textarea name="description" id="description" rows="5" className='form-control' placeholder='Enter Description' {...register('description', {required: true})}/>
                {errors.description?.type === 'required' && <p className='text-danger'> *Address is required </p>}
      </div>
         
         
      <div className="mb-3">
              <label>Choose an image:</label>
              <input type="file" accept="image/png, image/jpeg" className="form-control-file"
                onChange={handleChange} />
              {errors.image?.type === "required" && ( <p className="text-danger">*Image is required</p> )}
     </div>
     <hr/>
     <button type='submit' className='btn btn-success mb-3 mx-auto'>Signup <MdLogin/></button>
     <Button variant="secondary" className='mx-auto' style={{float:"right"}} onClick={handleClose}>
            Close
     </Button>
       
       </form>

        </Modal.Body>
       {/* <Modal.Footer>
        
          
         <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>  */ } 
      </Modal>
    </>
    <Cards className='mt-5' />
        </div>
    );
}

export default MyArts;