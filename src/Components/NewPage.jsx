import React, { useState } from "react";
// import "./App.css";
function NewPage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [create, setCreate] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(-1);

  React.useEffect(() => {
    const storedBlogs = [JSON.parse(localStorage.getItem("blogs"))];
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Desc: ${desc}`);
    console.log(`Create: ${create}`);
    const newBlog = { name, desc, create };
    // localStorage.setItem('Name', name);
    // localStorage.setItem('Desc',desc);
    // localStorage.setItem('Create',create);
    const newBlogs = [...blogs];
    if (index === -1) {
      newBlogs.push(newBlog);
    } else {
      newBlogs[index] = newBlog;
      setIndex(-1);
    }
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setName("");
    setDesc("");
    setCreate("");
  };
  const handleEdit = (index) => {
    const blog = blogs[index];
    // setIndex(index);
    setName(blog.name);
    setDesc(blog.desc);
    setCreate(blog.create);
    setIndex(index);
  };

const handleDelete = (index) => {
  const newBlogs = [...blogs];
  newBlogs.splice(index, 1);
  setBlogs(newBlogs);
  localStorage.setItem('blogs', JSON.stringify(newBlogs)) 
};

  return (
    <div className="conteiner">
      <div>
        <h1>Create New Blog</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Your Name"
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            placeholder="Enter Description"
          />
        </label>
        <br />
        <label>
          Create by:
          <input
            type="text"
            value={create}
            onChange={(event) => setCreate(event.target.value)}
            placeholder="Enter Name"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Blogs:</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <p>{blog.name}</p>
          <p>{blog.desc}</p>
          <p>{blog.create}</p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default NewPage;
