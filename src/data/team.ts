import engenheira from "../images/engenheira.jpg"
import tecnico from "../images/tecnico.jpg"
import gerente from "../images/gerenteDeControle.jpg"
import logistica from "../images/logistica.jpg"

export type TeamType = {
    name: string,
    position: string,
    qualifications: string,
    image: string
}

export const team: TeamType[] = [
    {
        name: "Maria Silva",
        position: "Engenheira de Produção",
        qualifications: "Com mestrado em Engenharia de Produção e mais de 10 anos de experiência na otimização de processos de usinagem, Ela é especializada em identificar melhorias de eficiência e redução de custos em projetos complexos de fabricação",
        image: engenheira
    },
    {
        name: "Luís Mendes",
        position: "Técnico em Máquinas CNC",
        qualifications: "Com mais de 15 anos de experiência, ele é especialista em operação de máquinas CNC de última geração e conhecido por sua habilidade excepcional em ajustes finos de equipamentos para garantir a precisão máxima.",
        image: tecnico
    },
    {
        name: "Ana Santos",
        position: "Gerente de Controle de Qualidade",
        qualifications: "Com um diploma em Engenharia de Qualidade e uma vasta experiência em implementação de sistemas de controle de qualidade. Ela lidera nossa equipe de inspeção, garantindo que cada peça atenda aos mais altos padrões antes de ser entregue aos clientes.",
        image: gerente
    },
    {
        name: "Ricardo Oliveira",
        position: " Especialista em Logística",
        qualifications: "Ricardo é responsável pela coordenação eficiente da logística de produção e entrega. Com experiência em logística global, ele garante que os prazos de entrega sejam cumpridos de maneira confiável, atendendo às necessidades dos clientes.",
        image: logistica
    }
]