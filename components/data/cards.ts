export interface Card {
  id: string
  type: 'integration' | 'profile'
  name: string
  category?: string
  description?: string
  logo?: string
  image?: string
  color?: string
  textColor?: string
  bgColor?: string
}

export const cards: Card[] = [
  {
    id: 'flatfile',
    type: 'integration',
    name: 'Flatfile',
    category: 'Project Management',
    logo: '/images/flatfile.png',
    color: '#FEE4CB',
    textColor: 'text-white',
  },
  {
    id: 'ariana',
    type: 'profile',
    name: 'Ariana',
    description: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercombots.',
    image: '/images/ariana.png',
    bgColor: '#242059',
  },
  {
    id: 'namecheap',
    type: 'integration',
    name: 'Name Cheap',
    category: 'Project Management',
    logo: '/images/namecheap.png',
    color: '#FF5301',
    textColor: 'text-white',
  },
  {
    id: 'jack-mark-1',
    type: 'profile',
    name: 'Jack Mark',
    description: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercombots.',
    image: '/images/jackmark.png',
    bgColor: '#FF9CA8',
  },
  {
    id: 'chatgpt',
    type: 'integration',
    name: 'ChatGPT',
    category: 'Project Management',
    logo: '/images/chatgpt.png',
    color: '#10A37F',
    textColor: 'text-white',
  },
  {
    id: 'kate',
    type: 'profile',
    name: 'Kate',
    description: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercombots.',
    image: '/images/kate.png',
    bgColor: '#D2B7FF',
  },
  {
    id: 'qb',
    type: 'integration',
    name: 'QB',
    category: 'Project Management',
    logo: '/images/qbi.png',
    color: '#2CA01C',
    textColor: 'text-white',
  },
  {
    id: 'notion',
    type: 'integration',
    name: 'Notion',
    category: 'Project Management',
    logo: '/images/notion.png',
    color: '#000000',
    textColor: 'text-white',
  },
  {
    id: 'andrew',
    type: 'profile',
    name: 'Andrew',
    description: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercombots.',
    image: '/images/andrew.png',
    bgColor: '#242059',
  },
  {
    id: 'skype',
    type: 'integration',
    name: 'Skype',
    category: 'Project Management',
    logo: '/images/skype.png',
    color: '#0098E3',
    textColor: 'text-white',
  },
  {
    id: 'jack-mark-2',
    type: 'profile',
    name: 'Jack Mark',
    description: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercombots.',
    image: '/images/jackmark.png',
    bgColor: '#FF9CA8',
  },
  {
    id: 'linkedin',
    type: 'integration',
    name: 'LinkedIn',
    category: 'Project Management',
    logo: '/images/linkedIn.png',
    color: '#0A66C2',
    textColor: 'text-white',
  },
  {
    id: 'paul',
    type: 'profile',
    name: 'Paul',
    description: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercombots.',
    image: '/images/paul.png',
    bgColor: '#595959',
  },
  {
    id: 'aws',
    type: 'integration',
    name: 'AWS',
    category: 'Project Management',
    logo: '/images/aws.png',
    color: '#262E3B',
    textColor: 'text-white',
  },
  {
    id: 'canva',
    type: 'integration',
    name: 'Canva',
    category: 'Project Management',
    logo: '/images/canva.png',
    color: '#24BECA',
    textColor: 'text-white',
  },
  {
    id: 'jane-mary',
    type: 'profile',
    name: 'Jane Mary',
    description: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercombots.',
    image: '/images/janymarry.png',
    bgColor: '#FF9CA8',
  },
  {
    id: 'chimpmonk',
    type: 'integration',
    name: 'Chimp Monk',
    category: 'Project Management',
    logo: '/images/chipmonkey.png',
    color: '#FFE002',
    textColor: 'text-white',
  },
  {
    id: 'jack-mark-3',
    type: 'profile',
    name: 'Jack Mark',
    description: 'We automatically resolve 25% of customer queries across desktop and mobile using Intercombots.',
    image: '/images/jackmark.png',
    bgColor: '#FF9CA8',
  },
]
