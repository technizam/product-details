import React, { useState } from 'react';
import style from './form.module.css';
import http from '../../Util/httprequest'

export default function FORM() {

    const [id, setNumber] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')


    const handleId = (e) =>{
            setNumber(e.target.value);
    }
    const handleName = (e) =>{
            setName(e.target.value);
    }
    const handlePrice = (e) =>{
            setPrice(e.target.value);
    }
    const handleDate = (e) =>{
            setDate(e.target.value);
    }
    const handleSubmit = (e) =>{
      // e.preventDefault();
     
            
            console.log("form is submitted");
            
            let userInfo = {
              id ,
              name,
              price,
              date 
            }
            http
            .post("/register",userInfo)
            .then((res)=>{
              console.log(res)
            })
            e.preventDefault();
    }

  return <div>
      <h1>Product Name</h1>
      <form action='' onSubmit={handleSubmit}>
            <div className={style.formGroup}>     
                <label htmlFor='id' >ID: </label>
                <input
                    type={"number"}
                    name='id' 
                    id='id' 
                    value={id}
                    onChange={handleId}
                    required
                 /> 
           </div>
            <div className={style.formGroup}>     
                <label htmlFor='name' >Name: </label>
                <input
                    type={"text"}
                    name='name' 
                    id='name' 
                    value={name}
                    onChange={handleName}
                    required
                 /> 
           </div>
            <div className={style.formGroup}>     
                <label htmlFor='price' >Price: </label>
                <input
                    type={"number"}
                    name='price' 
                    id='price' 
                    value={price}
                    onChange={handlePrice}
                    required
                 /> 
           </div>

           <div className={style.formGroup}>
          <label htmlFor='date' >Date :{date}</label>
          
          <input 
          type={"date"} 
          name='date' 
          id='date' 
          value={date}
          onChange={handleDate} 
          required 
          /> 
          </div>

          {/* <div className={style.formGroup}>
          <label htmlFor='password' >Password :</label>
          <input 
          type={"password"} 
          name='password' 
          id='password'
          value={password} 
          onChange={handlePassword} 
          required 
            />
          </div> */}
          <div className={style.formGroup} >
           <input type="file" id="myFile" name="filename"/>
           <input type="submit"/>
          </div>

          {/* <div className={style.formGroup}>
              <button type='submit'   >Register</button>
          </div> */}

      </form>

  </div>;
}
