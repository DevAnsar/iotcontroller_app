import React, { useEffect, useState } from 'react';
import './../styles/simple_key.css'
import Switch from '@mui/material/Switch';
import axios from 'axios';

function SimpleKey(key){

    const [checked ,setChecked]=useState(false);

    const bit_id=key.bit_id
    useEffect(()=>{
        axios.get(`http://localhost:8080/bits/get_data/value/${bit_id}?username=ansaramman`)
        .then((res)=>{
                setChecked(res.data.value)
        })
        .catch(err=>console.log(err))
    
    },[])
    function handleChange(e){

        axios.patch(`http://localhost:8080/bits/${key.bit_id}?username=ansaramman`,{
            value:!checked
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        setChecked(prev=>!prev)
    }

    return(
        <div className='col-6 col-md-4 col-lg-3 simple-key-box p-2'>

<Switch

checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
            {key.title}
        </div>
    )
}

export default SimpleKey;
