
import './App.css'

function App() {
  const handleAdd = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const department = form.department.value;
    const friend = { name, department }
    // console.log(friend);
    fetch('http://localhost:5000/friends', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friend),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert("Congratulations data added successfully!")
          form.reset()
        }
        console.log(data);
      })

  }

  return (
    <>
      <h1>Simple CRUD client friends</h1>
      <form onSubmit={handleAdd}>
        <input type="text" name="name" id="" required placeholder="Friend's name" />
        <br />
        <input type="text" name="department" id="" required placeholder="Friend's department" />
        <br />
        <input type="submit" value="Add Friend" />
      </form>
    </>
  )
}

export default App
