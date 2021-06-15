import React from 'react'

function Output({data}) {
	let newData = data.split("\n");
	return (
		<div className="card border-primary mb-3 mt-3" style={{maxWidth:"80%",marginLeft:"auto",marginRight:"auto"}}>
		  <div className="card-header">Output</div>
		  <div className="card-body">
		    <h4 className="card-title mb-3">Random Text Generated</h4>
		    {
		    	newData.map((item,index)=>{
		    		if(item!==""){
		    			return (
		    				<p className="card-text " key={index}>{item}</p>
		    			)
		    		}
		    	})
		    }
		    
		  </div>
		</div>
	)
}

export default Output