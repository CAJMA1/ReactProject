import SimpleButton from '../components/SimpleButton';
function NotFound() {
  return (
    <div className='flex flex-col font-BebasNeue text-asphalt-900'>
        <h1 className="mt-2">Error 404</h1>
        <p className="mt-1">Not found page</p>
        <SimpleButton className='sm:ml-67 md:ml-83 lg:ml-120 mt-1 h-15 w-30 bg-asphalt-400 font-BebasNeue rounded-sm hover:bg-asphalt-600 cursor-pointer transition-all duration-300 transform hover:scale-105' redirectTo="/" text="Redirigir al inicio"></SimpleButton>
    </div>
  );
}
export default NotFound;