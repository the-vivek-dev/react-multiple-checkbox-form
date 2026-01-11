import React, { useState } from 'react'

const MultipleCheckbox = () => {
    const [fruitsArray, setFruitsArray] = useState([]);

    const handleChange = (e) => {
        const { value, checked } = e.target;

        setFruitsArray(prev =>
            checked
                ? [...prev, value]
                : prev.filter(item => item !== value)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fruitsArray)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Select Fruits: &nbsp;</label>

                <input type="checkbox" name='fruits' value="Apple" onChange={handleChange} />
                <label htmlFor="">Apple</label>
                &nbsp;
                <input type="checkbox" name='fruits' value="Mango" onChange={handleChange} />
                <label htmlFor="">Mango</label>
                &nbsp;
                <input type="checkbox" name='fruits' value="Orange" onChange={handleChange} />
                <label htmlFor="">Orange</label>
                &nbsp;
                <input type="checkbox" name='fruits' value="Banana" onChange={handleChange} />
                <label htmlFor="">Banana</label>
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MultipleCheckbox
