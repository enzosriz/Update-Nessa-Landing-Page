import React from "react";
import { Button } from "./ui/button";
import logo from "figma:asset/cd128a7669cbc75f423f8d9957e70db8f1e05dcc.png";
import clientsImage from "figma:asset/0cbfc32100297c5f09128f5baf23563e3d1eca63.png";
import ctaBanner from "figma:asset/d366d10f74e4b56b6ee85ff4f7f79f08d38bdf13.png";
import { ArrowRight, Calendar, MapPin as MapPinIcon, Phone, Mail, Instagram, Facebook, MessageCircle, Download, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-x-hidden font-sans selection:bg-purple-500/30 flex flex-col">
      {/* Background Gradients - Fixed position to stay while scrolling */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-purple-400 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-pink-400 rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
      </div>

      {/* Header */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="MS Logo"
            className="h-10 w-auto object-contain brightness-0"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Portfólio
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Serviços
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Como Funciona
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Contato
          </a>
        </div>

        <div>
          <Button
            variant="secondary"
            className="rounded-full px-6 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border-none"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:py-20 w-full min-h-[calc(100vh-100px)]">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl lg:pr-12 text-center lg:text-left flex flex-col justify-center">
          <h2 className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase mb-4">
            EVENTOS CORPORATIVOS SEM COMPROMISSO
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900">
            Sua Visão Em Destaque. <br />
            Execução Impecável. <br />
            Resultado Premium.
          </h1>
          <p className="text-base lg:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Design que impressiona, instalação limpa, entrega no
            prazo. Deixe sua marca no próximo evento.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto shadow-lg shadow-blue-600/20"
            >
              Solicitar Orçamento Agora
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-8 h-12 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 w-full sm:w-auto"
            >
              Ver Portfólio
            </Button>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="flex-1 w-full mt-10 lg:mt-0 relative group flex items-center justify-center">
          <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            {/* Grid Pattern inside the placeholder */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-semibold text-slate-300 tracking-widest">
                1400 x 900px
              </span>
            </div>

            {/* Glowing effect behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section (Formerly Testimonials) */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Nossos Projetos Recentes
            </h2>
            <p className="text-slate-600 max-w-xl">
              Confira alguns dos eventos que ajudamos a realizar,
              entregando excelência técnica e visual.
            </p>
          </div>
          <div className="flex gap-2">
            {/* Decorative dots */}
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Project Card 1 */}
          <div className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-blue-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1764874299006-bf4266427ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwc3BlYWtlcnxlbnwxfHx8fDE3NjUwMDM0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="TechSummit 2024"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm">
                Corporativo
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-slate-50 to-white">
              <p className="text-base text-slate-700 font-medium mb-6 leading-relaxed">
                Convenção Anual de Vendas para 500 colaboradores com transmissão ao vivo para filiais em todo o Brasil. Cenografia imersiva e painéis de LED curvos.
              </p>
              <div className="mt-auto border-t border-slate-100 pt-4 space-y-2">
                <p className="font-bold text-slate-900">
                  TechCorp Solutions
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Março 2024</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  <span>TechSummit 2024 - São Paulo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-purple-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1660796115883-5e2ba15b34ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBoYXBweSUyMGF0dGVuZGVlc3xlbnwxfHx8fDE3NjUwMDM0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Future Launch"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-600 shadow-sm">
                Lançamento
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-slate-50 to-white">
              <p className="text-base text-slate-700 font-medium mb-6 leading-relaxed">
                Lançamento de produto com experiência sensorial completa. Projeção mapeada, iluminação cênica e sonorização 360º para convidados VIP.
              </p>
              <div className="mt-auto border-t border-slate-100 pt-4 space-y-2">
                <p className="font-bold text-slate-900">
                  Innovation Ltd
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Novembro 2023</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  <span>Future Launch - Rio de Janeiro</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-pink-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1614886204085-cbfe07505e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHNldHVwJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MDAzNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Awards Night"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-pink-600 shadow-sm">
                Premiação
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-slate-50 to-white">
              <p className="text-base text-slate-700 font-medium mb-6 leading-relaxed">
                Gala de premiação corporativa. Design de palco sofisticado, produção de conteúdo visual e gestão completa de palco para cerimônia.
              </p>
              <div className="mt-auto border-t border-slate-100 pt-4 space-y-2">
                <p className="font-bold text-slate-900">
                  Global Events
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Setembro 2023</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  <span>Awards Night - Curitiba</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            className="rounded-full border-slate-200 bg-white hover:bg-slate-50 text-slate-700 gap-2 group shadow-sm"
          >
            Ver todo portfólio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-6">
            <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Soluções Completas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Service 1: Audiovisual */}
          <div className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8 bg-slate-100 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1760437864364-1cfdddc5cf08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb3VuZCUyMG1peGVyJTIwYXVkaW8lMjBjb25zb2xlfGVufDF8fHx8MTc2NTAwNDM0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Audiovisual"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-blue-600 p-2 rounded-lg text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
                  <path d="M12 5.5V2" />
                  <path d="M12 22v-3.5" />
                  <path d="M18.5 12H22" />
                  <path d="M2 12h3.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
              Audiovisual High-End
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Sonorização cristalina e projeção de alta
              definição. Equipamentos de ponta para garantir que
              sua mensagem seja ouvida e vista com perfeição.
            </p>
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-200 bg-transparent text-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all h-12"
            >
              Ver mais detalhes
            </Button>
          </div>

          {/* Service 2: Cenografia */}
          <div className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8 bg-slate-100 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1734961183047-8708f318f177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGRlc2lnbiUyMGNvcnBvcmF0ZSUyMGNvbmZlcmVuY2UlMjBlbXB0eSUyMHN0YWdlfGVufDF8fHx8MTc2NTAwNDM0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cenografia"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-purple-600 p-2 rounded-lg text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4 8 4v14" />
                  <path d="M17 21v-8.5a2.5 2.5 0 0 0-5 0V21" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-purple-600 transition-colors">
              Cenografia Personalizada
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Transformamos espaços vazios em ambientes
              imersivos. Palcos, backdrops e estruturas que
              refletem a identidade da sua marca.
            </p>
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-200 bg-transparent text-slate-700 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all h-12"
            >
              Ver mais detalhes
            </Button>
          </div>

          {/* Service 3: Transmissão */}
          <div className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-pink-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8 bg-slate-100 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1578920040242-fa9c1ccbe5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNhbWVyYSUyMG9wZXJhdG9yJTIwc3RyZWFtaW5nfGVufDF8fHx8MTc2NTAwNDM0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Streaming"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-pink-600 p-2 rounded-lg text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect
                    width="15"
                    height="14"
                    x="1"
                    y="5"
                    rx="2"
                    ry="2"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-pink-600 transition-colors">
              Transmissão Híbrida
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Conecte sua audiência presencial e remota.
              Streaming multiplataforma com qualidade televisiva
              e interatividade em tempo real.
            </p>
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-200 bg-transparent text-slate-700 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all h-12"
            >
              Ver mais detalhes
            </Button>
          </div>

          {/* Service 4: Iluminação */}
          <div className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8 bg-slate-100 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1753030722011-c50785aa569b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdGFnZSUyMGxpZ2h0aW5nJTIwY29uY2VydCUyMGNvcnBvcmF0ZSUyMGV2ZW50fGVufDF8fHx8MTc2NTAwNDM0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Iluminação"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-green-600 p-2 rounded-lg text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7Z" />
                  <path d="M9 21h6" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-green-600 transition-colors">
              Iluminação Cênica
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Crie o clima perfeito. Projetos de iluminação que
              valorizam a cenografia, destacam palestrantes e
              energizam o público.
            </p>
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-200 bg-transparent text-slate-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all h-12"
            >
              Ver mais detalhes
            </Button>
          </div>

          {/* Service 5: Credenciamento */}
          <div className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8 bg-slate-100 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1703489583255-08312a4f4f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHJlZ2lzdHJhdGlvbiUyMGRlc2slMjBiYWRnZXN8ZW58MXx8fHwxNzY1MDA1NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Credenciamento"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-yellow-600 p-2 rounded-lg text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-yellow-600 transition-colors">
              Gestão & Credenciamento
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Primeira impressão impecável. Sistemas ágeis de
              check-in, impressão de crachás e controle de
              acesso para um fluxo organizado.
            </p>
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-200 bg-transparent text-slate-700 hover:bg-yellow-600 hover:border-yellow-600 hover:text-white transition-all h-12"
            >
              Ver mais detalhes
            </Button>
          </div>

          {/* Service 6: Entretenimento */}
          <div className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8 bg-slate-100 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1598347281727-507ed88bae96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHxpdmUlMjBiYW5kJTIwZW50ZXJ0YWlubWVudCUyMHN0YWdlfGVufDF8fHx8MTc2NTAwNTUzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Entretenimento"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-orange-600 p-2 rounded-lg text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors">
              Entretenimento & Shows
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Momentos inesquecíveis. Curadoria artística,
              bandas, DJs e atrações performáticas que elevam a
              experiência do seu evento.
            </p>
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-200 bg-transparent text-slate-700 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all h-12"
            >
              Ver mais detalhes
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-900/20">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              Transforme Sua Visão em Realidade
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Produções completas, instalação profissional e suporte dedicado. Tudo para o seu evento ser inesquecível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-base font-semibold bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Solicitar Orçamento Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-14 text-base font-semibold bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas sobre produção, prazos e instalação.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Cards */}
          <div className="flex flex-col gap-4 lg:w-1/3 min-w-[300px]">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Dúvida Urgente?</h3>
                <p className="text-sm text-slate-600">Fale com nosso consultor no WhatsApp agora.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="p-3 bg-slate-50 rounded-xl">
                <Download className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Guia de Fechamento</h3>
                <p className="text-sm text-slate-600">Baixe nosso manual de como enviar arquivos.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="p-3 bg-slate-50 rounded-xl">
                <Calendar className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Agendar Visita Técnica</h3>
                <p className="text-sm text-slate-600">Precisa que avaliemos o local? Clique aqui.</p>
              </div>
            </div>
          </div>

          {/* Right Side Accordion */}
          <div className="flex-1">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="hover:no-underline py-4 px-6 bg-slate-50 hover:bg-slate-100 rounded-xl data-[state=open]:bg-blue-50 data-[state=open]:text-blue-700 transition-colors [&[data-state=open]>svg]:text-blue-600">
                  Vocês fazem a instalação ou apenas a impressão?
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-4 text-slate-600 leading-relaxed">
                  Oferecemos a solução completa. Nossa equipe técnica vai ao local, realiza a montagem e, se necessário, a desmontagem pós-evento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-0">
                <AccordionTrigger className="hover:no-underline py-4 px-6 bg-slate-50 hover:bg-slate-100 rounded-xl data-[state=open]:bg-blue-50 data-[state=open]:text-blue-700 transition-colors [&[data-state=open]>svg]:text-blue-600">
                  Qual é o prazo de entrega? Atendem urgências?
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-4 text-slate-600 leading-relaxed">
                  Trabalhamos com prazos de urgência e entregas programadas de 24h a 72h. Entre em contato para verificar a disponibilidade imediata.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b-0">
                <AccordionTrigger className="hover:no-underline py-4 px-6 bg-slate-50 hover:bg-slate-100 rounded-xl data-[state=open]:bg-blue-50 data-[state=open]:text-blue-700 transition-colors [&[data-state=open]>svg]:text-blue-600">
                  Como garantem que a cor da marca sairá correta?
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-4 text-slate-600 leading-relaxed">
                  Utilizamos gerenciamento de cor profissional. Para projetos críticos, podemos enviar uma prova de cor física antes da produção final.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b-0">
                <AccordionTrigger className="hover:no-underline py-4 px-6 bg-slate-50 hover:bg-slate-100 rounded-xl data-[state=open]:bg-blue-50 data-[state=open]:text-blue-700 transition-colors [&[data-state=open]>svg]:text-blue-600">
                  Em qual formato devo enviar os arquivos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-4 text-slate-600 leading-relaxed">
                  Preferimos PDF ou .jpg com fontes em curvas. Nossa equipe faz uma análise gratuita do arquivo para garantir a qualidade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b-0">
                <AccordionTrigger className="hover:no-underline py-4 px-6 bg-slate-50 hover:bg-slate-100 rounded-xl data-[state=open]:bg-blue-50 data-[state=open]:text-blue-700 transition-colors [&[data-state=open]>svg]:text-blue-600">
                  Vocês emitem Nota Fiscal e atendem grandes empresas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-4 text-slate-600 leading-relaxed">
                  Sim. Somos 100% regularizados e seguimos todas as normas de compliance e segurança do trabalho exigidas por grandes corporações.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer - Based on Image 3 */}
      <footer className="relative z-10 w-full mt-auto border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Final CTA Section */}
          <div className="mb-16 rounded-3xl bg-gradient-to-br from-purple-50 via-blue-50 to-white border border-slate-200 p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Pronto Para Criar Algo Extraordinário?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Receba uma proposta personalizada para o seu próximo evento corporativo. Sem compromisso, sem custos ocultos.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              Solicitar Orçamento Gratuito
            </Button>
          </div>

          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <img
                src={logo}
                alt="MS Logo"
                className="h-10 w-auto object-contain mb-6 brightness-0"
              />
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Transformando eventos corporativos em experiências memoráveis há mais de 25 anos.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-slate-500">
                  <MapPinIcon className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p>Av. Paulista, 1000</p>
                    <p>São Paulo, SP 01310-100</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <Phone className="w-5 h-5 flex-shrink-0 text-blue-600" />
                  <p>(11) 3000-0000</p>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <Mail className="w-5 h-5 flex-shrink-0 text-blue-600" />
                  <p>contato@msproducoes.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Links Rápidos</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Nossos Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Serviços</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Audiovisual
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Cenografia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Transmissão Híbrida
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Iluminação Cênica
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Credenciamento
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Entretenimento
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Redes Sociais</h4>
              <div className="flex gap-4 mb-8">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
              <h4 className="font-semibold text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-400">
              © 2024 MS Produções. Todos os direitos reservados. Excelência em eventos corporativos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};