import { useState } from "react"

export default function TodoApp() {

    const [title, setTitle] = useState("Hola");

    function handleClick(e) {
        e.preventDefault();
        setTitle("Marcos");
    }

    function handleChange(e){
        const value = e.target.value;
        setTitle(value)
    }

    return <div className="todoContainer">
        <form className="todoContainer">
            <input onChange={handleChange} className="todoInput" value={title} />
            <input
                onClick={handleClick}
                type="submit"
                value='create todo'
                className="bottonCreate" />
            {title}
        </form>
    </div>
}