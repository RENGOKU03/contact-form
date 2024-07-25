import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useRef, useState } from "react";

const Form = () => {
  const [form, setForm] = useState({});
  const username = useRef("");
  const email = useRef("");
  const textarea = useRef("");
  const onClickHandel = (e) => {
    e.preventDefault();
    const newForm = {
      username: username.current.value,
      email: email.current.value,
      textarea: textarea.current.value,
    };
    setForm(newForm);
    username.current.value = "";
    email.current.value = "";
    textarea.current.value = "";
  };
  console.log(form.length);
  return (
    <div className="mt-10 w-[50%] ">
      <div className="flex gap-10">
        <button className="w-48 justify-center gap-3 bg-black rounded-md text-white flex h-9 align-text-top">
          <MdOutlineMarkUnreadChatAlt className="my-auto" />
          <span className="my-auto">VIA SUPPORT CHAT</span>
        </button>
        <button className="w-48 justify-center gap-3 bg-black rounded-md text-white flex h-9 align-text-top">
          <IoMdCall className="my-auto" />
          <span className="my-auto">VIA CALL</span>
        </button>
      </div>
      <button className="w-full mt-4 flex h-9 bg-white rounded-md border-2 border-black justify-center gap-4 ">
        <MdOutlineMarkUnreadChatAlt className="my-auto" />
        <span className="my-auto">VIA EMAIL FORM</span>
      </button>
      <div className="my-5 border-2 relative border-gray-700 h-10 rounded-md">
        <label
          className="text-sm font-normal absolute bg-white top-[-11px] left-4"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full h-full rounded-md outline-none p-4"
          type="text"
          id="name"
          ref={username}
          required
        />
      </div>
      <div className="my-5 border-2 relative border-gray-700 h-10 rounded-md">
        <label
          className="text-sm font-normal absolute bg-white top-[-11px] left-4"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full h-full rounded-md outline-none p-4"
          type="email"
          id="email"
          ref={email}
          required
        />
      </div>
      <div className="my-5 border-2 relative border-gray-700 h-44 rounded-md">
        <label
          className="text-sm font-normal absolute bg-white top-[-11px] left-4"
          htmlFor="text"
        >
          Text
        </label>
        <textarea
          className="w-full h-full rounded-md outline-none resize-none   p-4"
          id="text"
          ref={textarea}
          required
        ></textarea>
      </div>
      <button
        className="w-48 bg-black rounded-md text-white h-9 "
        type="submit"
        onClick={onClickHandel}
      >
        SUBMIT
      </button>
      {form.username && form.email && form.textarea && (
        <div className="bg-gray-300 p-2 rounded-2xl mt-2">
          <p>
            Hi {form.username} you have entered email {form.email} and the query
            is {form.textarea}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
