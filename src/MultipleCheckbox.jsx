import React, { useState } from "react";

const MultipleCheckbox = () => {
  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    setSelectedFruits((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected fruits:", selectedFruits);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Select Fruits</legend>

          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={selectedFruits.includes("Apple")}
              onChange={handleChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="mango"
              value="Mango"
              checked={selectedFruits.includes("Mango")}
              onChange={handleChange}
            />
            <label htmlFor="mango">Mango</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={selectedFruits.includes("Orange")}
              onChange={handleChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={selectedFruits.includes("Banana")}
              onChange={handleChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>

        </fieldset>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultipleCheckbox;
