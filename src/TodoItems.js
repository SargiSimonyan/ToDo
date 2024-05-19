export default function TodoItem ({todo}) {
  return(
    <div>
      <lable>
        <input type="checkbox" />
          {todo.text}
        <button>X</button>
      </lable>
    </div>
  )
}