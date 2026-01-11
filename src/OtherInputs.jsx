import React, { useState } from 'react'

const OtherInputs = () => {
  const [textarea, setTextArea] = useState("");
  const [selectMenu, setSelectMenu] = useState("USA");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Comments:", textarea);
    console.log("Selected:", selectMenu);
    console.log("Checked status:", checked);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment" style={{ verticalAlign: "top" }}>Comments:</label>
        <textarea id='comment' value={textarea} onChange={(e) => setTextArea(e.target.value)} cols={30} rows={10}></textarea>
        <br /><br />
        <label htmlFor="">Select Country: </label>
        <select value={selectMenu} onChange={(e) => setSelectMenu(e.target.value)}>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Japan">Japan</option>
        </select>
        <br /><br />
        <label htmlFor="">Yes I Agree The Terms</label>
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default OtherInputs
