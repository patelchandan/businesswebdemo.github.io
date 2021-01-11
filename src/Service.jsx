import React from 'react'
import Card from './Card'
import './Service.css'

function Service() {
    return (
        <>
         <h2 className='heading_style'>Our Services</h2>
        <div className='Cards'>
            
           <Card imgsrc='imgg.jpg' 
           title='This is Our Services' />
           <Card  imgsrc='imgg.jpg' 
           title='This is Our Services' />
           <Card  imgsrc='imgg.jpg' 
           title='This is Our Services' />
           <Card  imgsrc='imgg.jpg' 
           title='This is Our Services' />
           <Card  imgsrc='imgg.jpg' 
           title='This is Our Services' />
           <Card  imgsrc='imgg.jpg' 
           title='This is Our Services' />

        
           
           
        </div>
        </>
    )
}

export default Service
