import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Form = () => {
  const [form, setForm] = useState({});

  const username = useRef("");
  const email = useRef("");
  const textarea = useRef("");
  const dialog = useRef(null);

  const handelOnSubmit = (e) => {
    e.preventDefault();
    if (
      username.current.value &&
      email.current.value &&
      textarea.current.value
    ) {
      const newForm = {
        username: username.current.value.trim(),
        email: email.current.value.trim(),
        textarea: textarea.current.value.trim(),
      };
      setForm(newForm);
      username.current.value = "";
      email.current.value = "";
      textarea.current.value = "";
      if (dialog.current) {
        dialog.current.classList.toggle("hidden", false);
        dialog.current.classList.toggle("flex", true);
      }
    }
  };

  const handelOnClose = () => {
    dialog.current.classList.add("hidden");
  };

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
      <form onSubmit={handelOnSubmit}>
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
        >
          SUBMIT
        </button>
      </form>
      <div
        className="bg-[#7eabf9] p-2 rounded-2xl mt-2 absolute top-1/3 left-1/2 transform -translate-x-1/3 translate-y-1/2 h-20 w-2/5 gap-10 hidden"
        ref={dialog}
      >
        <p className="w-full">
          Hi {form.username} you have entered email {form.email} and the query
          is {form.textarea}
        </p>
        <button className="h-4 w-1/12" onClick={handelOnClose}>
          <IoIosCloseCircle size={"25px"} />
        </button>
      </div>
    </div>
  );
};

export default Form;
