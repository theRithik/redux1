import React from 'react'

const Display=(props)=>{

    const renderMovie =({datalist}) =>{
        if(datalist){
           
            return datalist.map((item)=>{
                return(
        
                    
       <div className="card" style={{width: '18rem'}}>
  <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" class="card-img-top courimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">React Js</h5>
    <p className="card-text" style={{color:'black'}}> {item.name}</p>
       {/* <Link to ={`/course/React`} class="btn btn-primary">Details</Link> */}
  </div>
</div>
                    
               
                )
            })

        }
    }
    return(
        <center>
            <h2>Movie</h2>
            {renderMovie(props)}
        </center>
    )
}
export default Display