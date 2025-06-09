import SimpleButton from '../components/SimpleButton';
function NotFound() {
  return (
    <div className='min-h-screen flex-col justify-center font-BebasNeue'>
        <h1>Error 404</h1>
        <p>Not found page</p>
        <SimpleButton className='h-15 w-30 bg-asphalt-300 font-BebasNeue rounded-sm hover:bg-asphalt-400 cursor-pointer transition-all duration-300 transform hover:scale-105' redirectTo="/" text="Redirigir al inicio"></SimpleButton>
    </div>
  );
}
export default NotFound;