import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*left section*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            No Prescripto, facilitamos o acesso à saúde de qualidade. Nossa
            plataforma permite que você agende consultas com profissionais de
            saúde qualificados de forma prática e rápida. Com uma ampla
            variedade de especialistas, garantimos que você encontre o
            atendimento certo para suas necessidades. Comprometidos com a sua
            saúde e bem-estar, nossa missão é simplificar o processo de
            agendamento, oferecendo informações claras e suporte dedicado. Cuide
            de sua saúde com confiança e conveniência!
          </p>
        </div>

        {/*Center section*/}
        <div>
          <p className="text-xl font-medium mb-5">EMPRESA</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Inicio</li>
            <li>Sobre nós</li>
            <li>Contate-nos</li>
            <li>Política de Privacidade</li>
          </ul>
        </div>
        {/*Right section*/}
        <div>
          <p className="text-xl font-medium mb-5">ENTRE EM CONTATO</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>rafa123839@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright Text*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 GreatStack - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
