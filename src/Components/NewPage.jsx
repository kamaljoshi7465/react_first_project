// import React from "react";
// // import "./App.css";

// const NewPage = () => {
//   return (
//     <>
//       <div className="main-form">
//         <form>
//           <label>
//             <h1>New Blog</h1>
//             Name:
//             <input type="text" name="name" placeholder="Enter Name" />
//             <br />
//             Description:
//             <textarea name="desc" placeholder="Enter Description" />
//             <br />
//             Created By:
//             <input type="text" name="create" placeholder="Enter Your Name" />
//             <br />
//           </label>
//           <button type="submit">SUBMIT</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default NewPage;

import React, { useState } from "react";
function NewPage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [create, setCreate] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Desc: ${desc}`);
    console.log(`Create: ${create}`);
  };
  return (
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
        Desc:
        <input
          type="text"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
          placeholder="Enter Description"
        />
      </label>
      <br />
      <label>
        create
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
  );
}
export default NewPage;
