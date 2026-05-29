export const TAGLINES = [
  { prefix: 'Ciência como ', emphasis: 'encontro' },
  { prefix: 'Comunicação como ', emphasis: 'vínculo' },
  { prefix: 'Ecossistema como ', emphasis: 'transformação' },
] as const;

export const TOPIC_TAGS = ['Ciência', 'Gênero', 'Comunicação', 'Inovação'] as const;

export const VALUES = ['Aberto', 'Colaborativo', 'Inclusivo', 'Expansível'] as const;

export const PLATFORM_NAME = 'Ciência Comunicada';
export const PLATFORM_SUBTITLE = 'ECOSSISTEMA CRIATIVO DE COMUNICAÇÃO DA CIÊNCIA';
export const PLATFORM_TAGLINE = 'Ecossistema criativo de comunicação da ciência voltado para mulheres cientistas no Brasil.';

export const CENTRAL_CONCEPT = 'Ecologia Sociotécnica da Comunicação da Ciência';
export const CENTRAL_CONCEPT_TAGS = ['Ensino', 'Pesquisa', 'Extensão', 'Prática Relacional'] as const;

export const API_NOTE = 'API / Novos hubs integrados de forma transparente via protocolos padrão';
export const CONTENT_DB_LABEL = 'Banco de Dados de Conteúdo';

export type ModuloColorKey = 'purple' | 'pink' | 'teal';

export interface ModuloData {
  id: string;
  title: string;
  description: string;
  moduleCount: number;
  students: number;
  certs: number;
  iconName: 'Radio' | 'Presentation' | 'BookOpen';
  colorKey: ModuloColorKey;
}

export const MODULOS: ModuloData[] = [
  {
    id: 'jornalismo',
    title: 'Jornalismo para mulheres cientistas',
    description: 'Desenvolva habilidades para transformar sua pesquisa em pautas jornalísticas atrativas e construa relacionamentos com a mídia.',
    moduleCount: 5,
    students: 450,
    certs: 230,
    iconName: 'Radio',
    colorKey: 'purple',
  },
  {
    id: 'relacoes-publicas',
    title: 'Relações Públicas para mulheres cientistas',
    description: 'Estratégias de posicionamento, gestão de imagem e criação de autoridade em diferentes espaços públicos e digitais.',
    moduleCount: 4,
    students: 382,
    certs: 189,
    iconName: 'Presentation',
    colorKey: 'pink',
  },
  {
    id: 'formacao',
    title: 'Formação de Cientistas Comunicadoras',
    description: 'Trilha completa que integra técnicas narrativas, mídias sociais e divulgação científica acessível e inclusiva.',
    moduleCount: 8,
    students: 408,
    certs: 312,
    iconName: 'BookOpen',
    colorKey: 'teal',
  },
];

export interface ExperienceStep {
  num: string;
  action: string;
  tool: string;
  iconName: 'BookOpen' | 'UserCheck' | 'Play' | 'LineChart';
}

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  { num: '1', action: 'Formar & qualificar', tool: 'LMS Dashboard / Painel do Aluno', iconName: 'BookOpen' },
  { num: '2', action: 'Assessorar & preparar', tool: 'CRM / Ferramenta de Consultoria', iconName: 'UserCheck' },
  { num: '3', action: 'Divulgar & visibilizar', tool: 'Fluxo de conteúdo CMS com feed de mídia', iconName: 'Play' },
  { num: '4', action: 'Retroalimentar & avaliar', tool: 'Painel de Análise', iconName: 'LineChart' },
];

export type HubType = 'Identidade' | 'Território' | 'Instituição';

export interface HubData {
  id: string;
  name: string;
  desc: string;
  count: number;
  suffix?: string;
  iconName: 'Users' | 'Palette' | 'Accessibility' | 'Rainbow' | 'MapPin' | 'Building2';
  colorKey: 'purple' | 'pink' | 'teal' | 'indigo' | 'amber' | 'dark';
  type: HubType;
}

export const HUBS: HubData[] = [
  { id: 'cientistas-negras', name: 'Cientistas negras', desc: 'Comunidade focada no fomento, financiamento e visibilidade da pesquisadora negra.', count: 147, iconName: 'Users', colorKey: 'purple', type: 'Identidade' },
  { id: 'cientistas-indigenas', name: 'Cientistas indígenas', desc: 'Conectando saberes originários e academia, ampliando vozes das mulheres indígenas.', count: 38, iconName: 'Palette', colorKey: 'pink', type: 'Identidade' },
  { id: 'pcds', name: 'PcDs na ciência', desc: 'Acessibilidade na infraestrutura de pesquisa e visibilidade de cientistas PcD.', count: 62, iconName: 'Accessibility', colorKey: 'teal', type: 'Identidade' },
  { id: 'lgbtqipna', name: 'LGBTQIPNA+ na ciência', desc: 'Políticas afirmativas, acolhimento e dados representativos de gênero e sexualidade.', count: 89, iconName: 'Rainbow', colorKey: 'indigo', type: 'Identidade' },
  { id: 'periferias', name: 'Ciência nas periferias', desc: 'Projetos de extensão e inovação sediados em territórios e favelas do Brasil.', count: 74, iconName: 'MapPin', colorKey: 'amber', type: 'Território' },
  { id: 'ifes', name: 'IFES RS · Brasil · Mundo', desc: 'Mapeamento e integração com Instituições Federais de Ensino Superior parceiras.', count: 18, suffix: 'IFEs', iconName: 'Building2', colorKey: 'dark', type: 'Instituição' },
];

export const HUB_FILTERS = ['Todos', 'Identidade', 'Território', 'Instituição'] as const;

export type PillarStatus = 'Operacional' | 'Em expansão' | 'Sincronizando';
export type PillarColorKey = 'purple' | 'pink' | 'teal' | 'dark' | 'grape';

export interface PillarData {
  id: string;
  title: string;
  desc: string;
  status: PillarStatus;
  iconName: 'Database' | 'Wrench' | 'Globe' | 'Archive' | 'MessagesSquare';
  colorKey: PillarColorKey;
}

export const PILLARS: PillarData[] = [
  { id: 'banco-talentos', title: 'Banco de Talentos', desc: 'Banco de Dados de Perfis', status: 'Operacional', iconName: 'Database', colorKey: 'purple' },
  { id: 'toolkits', title: 'Toolkits', desc: 'Treinamento de Mídia & Histórias', status: 'Em expansão', iconName: 'Wrench', colorKey: 'pink' },
  { id: 'plataforma', title: 'Plataforma Digital', desc: 'cienciacomunicada.com.br', status: 'Operacional', iconName: 'Globe', colorKey: 'teal' },
  { id: 'repositorio', title: 'Repositório', desc: 'Dados Abertos, Arquivos', status: 'Operacional', iconName: 'Archive', colorKey: 'dark' },
  { id: 'eventos', title: 'Eventos & Redes', desc: 'Fórum Comunitário, Conexões', status: 'Operacional', iconName: 'MessagesSquare', colorKey: 'grape' },
];

export const PLATFORM_SLOGAN = 'Ecossistema colaborativo de comunicação da ciência.';

export interface MainPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'GraduationCap' | 'Radio' | 'Network';
}

export const MAIN_PILLARS: MainPillar[] = [
  {
    id: 'formacao',
    number: '01',
    title: 'Formação',
    description: 'Trilhas de aprendizagem, cursos, oficinas e materiais educativos para desenvolver competências em comunicação científica.',
    iconName: 'GraduationCap',
  },
  {
    id: 'comunicacao',
    number: '02',
    title: 'Comunicação Científica',
    description: 'Ferramentas para criar, publicar e distribuir conteúdo: artigos, vídeos, podcasts, campanhas e divulgação de pesquisas.',
    iconName: 'Radio',
  },
  {
    id: 'rede',
    number: '03',
    title: 'Rede Colaborativa',
    description: 'Conexão entre pesquisadoras, comunicadores e comunidades por meio de perfis, grupos, hubs temáticos e eventos.',
    iconName: 'Network',
  },
];
