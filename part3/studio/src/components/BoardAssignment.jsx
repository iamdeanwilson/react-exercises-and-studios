import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{"label": "Vegan", "value": "Vegan"},{"label": "Queso", "value": "Queso"},{"label": "Cashews", "value": "Cashews"}];

   const [boardName, setName] = useState('no boards yet!'); 

   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         <option value={boards[0].label}>{boards[0].value}</option>
         <option value={boards[1].label}>{boards[1].value}</option>
         <option value={boards[2].label}>{boards[2].value}</option>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
