import cnc from "../images/services/cnc.jpeg"
import cilindrica from "../images/services/cilindrica.jpg"
import consultoria from "../images/services/consultoria.jpg"
import montagem from "../images/services/montagem.jpg"
import prototipagem from "../images/services/prototipagem.jpeg"

export const services = [
    {
        name: "Torneamento CNC",
        description: "Utilizamos máquinas de última geração para realizar torneamento CNC de alta precisão. Isso inclui torneamento de precisão de diâmetros pequenos a grandes, bem como a fabricação de peças complexas com geometrias variadas.",
        image: cnc
    },
    {
        name: "Retífica Cilíndrica",
        description: "Oferecemos serviços de retífica cilíndrica para garantir que as tolerâncias e acabamentos superficiais sejam alcançados com perfeição em componentes críticos.",
        image: cilindrica
    },
    {
        name: "Prototipagem Rápida",
        description: "A PrecisionTech é ágil na produção de protótipos de alta qualidade para ajudar nossos clientes a testar e aprimorar seus designs antes da produção em larga escala.",
        image: prototipagem
    },
    {
        name: "Montagem e Inspeção",
        description: "Além da usinagem, também oferecemos serviços de montagem e inspeção rigorosa para garantir que cada componente atenda às especificações e padrões exigidos.",
        image: montagem
    },
    {
        name: "Consultoria Técnica",
        description: "Nossa equipe de engenheiros experientes está à disposição para fornecer consultoria técnica, auxiliando nossos clientes na escolha dos materiais adequados, otimização de projetos e resolução de desafios de fabricação.",
        image: consultoria
    },
]