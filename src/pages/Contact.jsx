import SimpleButton from "../components/SimpleButton";
import '../styles/NotFound.css'
const Contact = () => {
  return(
    <>
      <div className='grid font-BebasNeue text-asphalt-900'>
        <h1 className="mt-2">Error 404</h1>
        <p className="mt-1">Not found page</p>
        <SimpleButton className='ml-156 mt-1 h-15 w-30 bg-asphalt-400 font-BebasNeue rounded-sm hover:bg-asphalt-600 cursor-pointer transition-all duration-300 transform hover:scale-105' redirectTo="/" text="Redirigir al inicio"></SimpleButton>
      </div>
    </>
    
  );
};

export default Contact;