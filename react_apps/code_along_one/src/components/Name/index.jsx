
const NameComponent = ({ count, name }) => {
    console.log("I'm the child component! The state is :", count);

    console.log("I'm the name component");
  return (
    <div>My Name is {name} and the count is {count}</div>
  )
}

export default NameComponent