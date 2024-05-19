export default function ({todos, onClear }) {
  const complited = todos.filter((todo)=>{
    return todo.isComplited;
  })
  return(
    <div>
      <span>{complited.length}/{todos.length} Complited</span>
      <button onClick={(onClear)}>Clear complitedd</button>
    </div>
  )
}