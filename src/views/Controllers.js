import React,{useEffect,useState} from 'react';
import axios from 'axios';
import SimpleKey from '../views/components/SimpleKey'

function Controllers(){

    const [systems,setSystem]=useState([]);

    useEffect(()=>{

        axios.get(`http://localhost:8080/systems?username=ansaramman`).then(res=>{

        console.log(res);
        setSystem(res.data.systems)

        }).catch(err=>{
            console.log('errors!',err)
        })

    },[]);

    return(
        <div className='col-12 pt-5 key_box'>
            {
                systems?.map(system=>{

                    if(system.type === 'simple_key'){
                        return <SimpleKey {...system} />
                    }
                    return '';
                })
            }
        </div>
    )
}
export default Controllers;