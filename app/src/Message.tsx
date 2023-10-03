import {useState}from 'react';

function Message(){
    const [firstname,firstvalue]=useState('');
    const[secondname,secondvalue]=useState('');
    const[output,result]=useState('0');
    return <div className="container">
        <div className="input-values">
        <div>
        <label htmlFor="first-value">Enter value 1</label>
        <input type="number" name="first-value" id="first-value" />
        </div>
        <div>
        <label htmlFor="second-value">Enter value 2</label>
        <input type="number" name="second-value" id="second-value" />
        </div>
        </div>
        <button id="add">Add</button>
        <button id="sub">sub</button>
        <button id="mul">Mul</button>
        <button id="divide">Divide</button>
        
    </div>
}
export default Message;