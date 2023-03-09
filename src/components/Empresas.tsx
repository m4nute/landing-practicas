export default function Empresas() {
    return (
        <div className='w-full text-center mt-32'>
            <h1 className='text-4xl bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200 text-transparent font-bold'>
                Empresas afiliadas
            </h1>
            <ul className='text-[#d4d4d4] mt-5 text-xl w-3/4 mx-auto flex flex-wrap justify-center gap-8'>
                <li className='font-bold hover:cursor-pointer hover:text-white hover:bg-[#212121] transition-colors duration-200 p-4 rounded-lg' onClick={() => window.open('https://www.accenture.com/ar-es', '_blank')}>Accenture</li>
                <li className='font-bold hover:cursor-pointer hover:text-white hover:bg-[#212121] transition-colors duration-200 p-4 rounded-lg' onClick={() => window.open('https://www.espasa.com.ar/', '_blank')}>Espasa S.A.</li>
                <li className='font-bold hover:cursor-pointer hover:text-white hover:bg-[#212121] transition-colors duration-200 p-4 rounded-lg' onClick={() => window.open('https://buenosaires.gob.ar/hospitalpedroelizalde', '_blank')}>Hospital Elizalde</li>
                <li className='font-bold hover:cursor-pointer hover:text-white hover:bg-[#212121] transition-colors duration-200 p-4 rounded-lg' onClick={() => window.open('https://www.knauf.com.ar/', '_blank')}>Knauf Argentina</li>
                <li className='font-bold hover:cursor-pointer hover:text-white hover:bg-[#212121] transition-colors duration-200 p-4 rounded-lg' onClick={() => window.open('https://www.sumasknauf.com.ar/', '_blank')}>Sweet Victorian</li>
                <li className='font-bold hover:cursor-pointer hover:text-white hover:bg-[#212121] transition-colors duration-200 p-4 rounded-lg' onClick={() => window.open('https://larraioz.com/', '_blank')}>Larraioz Elektronika</li>
            </ul>
        </div>
    )
}