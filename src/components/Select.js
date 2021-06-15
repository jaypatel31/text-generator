import React from 'react'

function Select({wrap, setWrap}) {
	return (
		<div>
			<div className="btn-group switch-container" role="group" aria-label="Basic radio toggle button group" style={{display:"flex", width:"25%",margin:"auto"}}>
			  <input type="radio" className="btn-check" name="wrapper" id="btnradio1" value={true} onChange={()=>setWrap(true)} autoComplete="off" checked={(wrap)?true:false}/>
			  <label className="btn btn-outline-primary" htmlFor="btnradio1">True</label>
			  <input type="radio" className="btn-check" name="wrapper" id="btnradio2" value={false} onChange={()=>setWrap(false)}  autoComplete="off" checked={(!wrap)?true:false}/>
			  <label className="btn btn-outline-primary" htmlFor="btnradio2">False</label>
			</div>
		</div>
	)
}

export default Select