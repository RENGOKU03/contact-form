import Form from "./Form";

const Hero = () => {
  return (
    <div className="mt-4 mx-[20%] ">
      <div>
        <h1 className="text-5xl font-extrabold  ">CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div className="flex h-height">
        <Form />
        <img className="w-[70%]" src="images/hero.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
