import React from 'react'

function Text({paras, setParas, sentences, setSentences}) {
	return (
		<div className="form-group mt-5 form-container" >
			  <div className="form-floating mb-3 input-container" >
			    <input type="tel" className="form-control" id="floatingInput" value={paras} onChange={(e)=>setParas(Number(e.target.value))} placeholder=""/>
			    <label htmlFor="floatingInput">Number of Paragraph</label>
			  </div>
			  <div className="form-floating mb-3 input-container" >
			    <input type="tel" className="form-control" id="floatingInput" value={sentences} onChange={(e)=>setSentences(Number(e.target.value))} placeholder=""/>
			    <label htmlFor="floatingInput">Number of Sentences</label>
			  </div>
		</div>
	)
}

export default Text