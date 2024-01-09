import React, { useState } from "react";

const TodoList = () => {
  // Definir el estado para las tareas y el valor del campo de entrada
  const [tareas, setTareas] = useState([]);
  const [inputVariable, setInputVariable] = useState("");

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (inputVariable.trim() !== "") {
      setTareas([...tareas, inputVariable]);
      setInputVariable("");
    }
  };

  // Función para eliminar una tarea por su índice
  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Mi lista de tareas</h1>
      <ul>
        <li>
          <input
            type="text"
            value={inputVariable}
            onChange={(e) => setInputVariable(e.target.value)}
            placeholder="Agrega una nueva tarea"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                agregarTarea();
              }
            }}
          />
        </li>
        {tareas.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i
              className="fas fa-trash"
              onClick={() => eliminarTarea(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
