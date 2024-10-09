import { assets } from "../assets/assets_frontend/assets";

function About() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          SOBRE <span className="text-gray-700 font_medium">NOS</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Bem-vindo à Prescripto, seu parceiro de confiança no gerenciamento
            de suas necessidades de saúde de forma conveniente e eficiente. Na
            Prescripto, entendemos os desafios que os indivíduos enfrentam
            quando se trata de agendar consultas médicas e gerenciar seus
            registros de saúde.
          </p>
          <p>
            A Prescripto está comprometida com a excelência em tecnologia de
            saúde. Nós nos esforçamos continuamente para aprimorar nossa
            plataforma, integrando os últimos avanços para melhorar a
            experiência do usuário e fornecer um serviço superior. Quer você
            esteja agendando sua primeira consulta ou gerenciando cuidados
            contínuos, a Prescripto está aqui para apoiá-lo em cada etapa do
            caminho.A Prescripto está comprometida com a excelência em
            tecnologia de saúde. Nós nos esforçamos continuamente para aprimorar
            nossa plataforma, integrando os últimos avanços para melhorar a
            experiência do usuário e fornecer um serviço superior. Quer você
            esteja agendando sua primeira consulta ou gerenciando cuidados
            contínuos, a Prescripto está aqui para apoiá-lo em cada etapa do
            caminho.
          </p>
          <b className="text-gray-800">Nossa Visão</b>
          <p>
            Nossa visão na Prescripto é criar uma experiência de saúde perfeita
            para cada usuário. Nosso objetivo é preencher a lacuna entre
            pacientes e provedores de saúde, facilitando o acesso ao cuidado que
            você precisa, quando você precisa.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          POR QUE{" "}
          <span className="text-gray-700 font-semibold">NOS ESCOLHER</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Eficiência:</b>
          <p>
            Agendamento de consultas simplificado que se adapta ao seu estilo de
            vida agitado.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Conveniência:</b>
          <p>
            Acesso a uma rede de profissionais de saúde confiáveis ​​em sua
            área.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalização:</b>
          <p>
            Recomendações e lembretes personalizados para ajudar você a ficar em
            dia com sua saúde.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
