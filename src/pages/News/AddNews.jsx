import React, { useState } from "react";

import axios from "axios";

const AddNews = () => {
    const [time, setTime] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const handleImageChange = (e) => {
        const selectedImg = e.target.files[0];
        setImg(selectedImg);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("time", time);
        formData.append("title", title);
        formData.append("text", text);
      
        if (img) {
            formData.append("img", img);
          } 
      
        try {
          const response = await axios.post("https://anita-impex.onrender.com/createNews",formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
          if (response.status === 201) {
            console.log("News created successfully!");
            setTime("");
            setTitle("");
            setText("");
            setImg(null);
            window.location.reload();
          } else {
            console.error("Error:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
    };

  return (
    <section
      style={{ overflow: "hidden" }}
      className={`fade-in w-full bg-black justify-center items-center flex flex-col`}
    >
      <div className="sm:w-[80%] h-[650px] w-[500px] flex justify-center items-center relative top-11">
        <div className="pm:p-5 bg-white w-full flex flex-col gap-4 justify-center items-center p-10 rounded-lg">
          <input
            className="pm:p-1 w-[90%] p-3 border-2 border-black rounded-lg"
            placeholder="Time to read"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
          <input
            className="pm:p-1 w-[90%] p-3 border-2 border-black rounded-lg"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
              className="pm:p-1 w-[90%] p-3 border-2 border-black rounded-lg"
                        placeholder="Text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        rows={5}
                    />
          <input
            type="file"
            name="img"
            accept="image/*"
            className="pm:p-1 w-[90%] p-3 border-2 border-black rounded-lg"
            onChange={handleImageChange}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="pm:p-1 w-[90%] p-3 bg-yellow-400 text-white ease-linear duration-200 hover:text-white hover:bg-black border-black rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddNews;
