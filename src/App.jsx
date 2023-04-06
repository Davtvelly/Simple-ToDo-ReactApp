import React from "react";
import "./App.css"
const App = () => {
  //const image_link = "https://v1.tailwindcss.com/img/card-top.jpg"
  return (
    <div className="page-wrapper">
      <div className="card-component">
        <img
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt=""
          className="card-image"
        />
        <div className="card-content">
          <h1>The coldest sunset</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            expedita facilis labore. Earum nobis placeat vitae? Perferendis eum
            laudantium, maiores molestiae mollitia aspernatur officia dicta,
            debitis ab similique reiciendis unde?
          </p>
          <div className="tags">
            <span className="tag">#Photography</span>
            <span className="tag">#Travel</span>
            <span className="tag">#Winter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
