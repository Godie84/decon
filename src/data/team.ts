export interface TeamMember {
  id: string;
  name: string;
  title: string;
  category: 'Executive Leadership' | 'Senior Management' | 'Quality Assurance' | 'Department Managers';
  imageUrl: string;
  credentials: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: '101',
    name: 'Fulvio Jaramillo, PE',
    title: 'President & CEO / Chief Engineer',
    category: 'Executive Leadership',
    imageUrl: `https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop`,
    credentials: ['PE', 'NCEES Record'],
  },
  {
    id: '106',
    name: 'Felipe Jaramillo, ENV-SP',
    title: 'Operations Manager (COO)',
    category: 'Senior Management',
    imageUrl: `https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=500&auto=format&fit=crop`,
    credentials: ['ENV-SP'],
  },
  {
    id: '114',
    name: 'Sonia Jaramillo',
    title: 'Finance Manager (CFO)',
    category: 'Senior Management',
    imageUrl: `https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=500&auto=format&fit=crop`,
    credentials: [],
  },
  {
    id: '218',
    name: 'Andres Bula',
    title: 'Business Development Manager',
    category: 'Senior Management',
    imageUrl: `https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=500&auto=format&fit=crop`,
    credentials: [],
  },
  {
    id: '158',
    name: 'Adriana Gonzalez',
    title: 'Office Manager',
    category: 'Senior Management',
    imageUrl: `https://images.unsplash.com/photo-1604302779933-cad478e4ba4c?q=80&w=500&auto=format&fit=crop`,
    credentials: [],
  },
  {
    id: '209',
    name: 'Nestor Rubiano, PE, PhD',
    title: 'Director of Quality',
    category: 'Quality Assurance',
    imageUrl: `https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=500&auto=format&fit=crop`,
    credentials: ['PE', 'PhD'],
  },
  {
    id: '128',
    name: 'Camilo Arguelles, EIT',
    title: 'Production Department Manager',
    category: 'Department Managers',
    imageUrl: `https://images.unsplash.com/photo-1627541594242-ac32a39276d8?q=80&w=500&auto=format&fit=crop`,
    credentials: ['EIT'],
  },
  {
    id: '108',
    name: 'Joseph Duron, PE',
    title: 'Bridge Design Department Manager',
    category: 'Department Managers',
    imageUrl: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop`,
    credentials: ['PE'],
  },
  {
    id: '137',
    name: 'David Castellanos, PE',
    title: 'Construction Engineering Services Manager',
    category: 'Department Managers',
    imageUrl: `https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=500&auto=format&fit=crop`,
    credentials: ['PE'],
  },
  {
    id: '177',
    name: 'Matthew Johnson, PE, PTOE, PTP, CFM, ENV-SP',
    title: 'Transportation Department Manager',
    category: 'Department Managers',
    imageUrl: `https://images.unsplash.com/photo-1559548331-f92100a9a1d5?q=80&w=500&auto=format&fit=crop`,
    credentials: ['PE', 'PTOE', 'PTP', 'CFM', 'ENV-SP'],
  },
  {
    id: '172',
    name: 'Gustavo Fuentes, EIT',
    title: 'Building Design Task Leader',
    category: 'Department Managers',
    imageUrl: `https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500&auto=format&fit=crop`,
    credentials: ['EIT'],
  },
];
