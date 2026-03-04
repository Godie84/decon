export interface Project {
  id: string;
  title: string;
  category: string;
  publishDate: string;
  imageUrl: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'I-35 NEX Central Project',
    category: 'Bridge Design',
    publishDate: '2024-07-01',
    imageUrl: 'https://images.unsplash.com/photo-1621948482015-816b6f849f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'A massive highway expansion project under construction with multiple overpasses.',
    shortDescription: 'Providing bridge design services for the $1.59 billion I-35 upgrade in Texas, expanding it to 12-16 lanes with elevated HOV lanes.',
    description:
      'DECON is providing bridge design services for bridges 503-507 on this $1.59 billion I-35 upgrade project in Bexar, Comal & Guadalupe Counties, TX. The design includes foundations, bridge widening, 3D modeling, and retaining wall analysis, expanding a 6-10 lane facility to 12-16 lanes with elevated HOV and general purpose lanes.',
    tags: ['Bridge Design', 'Highway Expansion', '3D Modeling', 'TxDOT'],
  },
  {
    id: '2',
    title: 'I-285 & SH-400 Interchange',
    category: 'Bridge Design',
    publishDate: '2024-06-15',
    imageUrl: 'https://images.unsplash.com/photo-1559966422-a53942fd245a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'A complex multi-level highway interchange in a major city.',
    shortDescription: 'A complex multi-level interchange reconstruction project in Atlanta, GA, requiring advanced structural engineering solutions.',
    description:
      'A complex multi-level interchange reconstruction project in Atlanta, GA, requiring advanced structural engineering solutions and innovative design approaches for heavily trafficked urban corridors.',
    tags: ['Bridge Design', 'Interchange', 'Structural Engineering', 'Urban Infrastructure'],
  },
  {
    id: '3',
    title: 'SH 99 Grand Parkway',
    category: 'Roadway & Drainage',
    publishDate: '2024-05-20',
    imageUrl: 'https://images.unsplash.com/photo-1614269414921-fc6145321689?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'A wide, curving expanse of a new multi-lane tollway.',
    shortDescription: 'Part of a $1.3 billion, 52.8-mile Grand Parkway project, including new lanes, modernized tolling, and extensive drainage structures.',
    description:
      'As part of the $1.3 billion, 52.8-mile Grand Parkway project, DECON designed the Kingwood Drive crossing and served on the construction team. The project spans four counties and includes new lanes, modernized tolling, and extensive drainage structures.',
    tags: ['Roadway & Drainage', 'Highway', 'New Construction', 'Tolling'],
  },
  {
    id: '4',
    title: 'Cameron Bear Lane Warehouse',
    category: 'Building Design',
    publishDate: '2024-04-30',
    imageUrl: 'https://images.unsplash.com/photo-1583160401400-08b532723c39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'A large, modern industrial fabrication warehouse and office building.',
    shortDescription: 'A 150,000 SF office and fabrication warehouse in Corpus Christi, TX, featuring comprehensive structural and foundation design.',
    description:
      'A two-story, 150,000 SF office and fabrication warehouse in Corpus Christi, TX. Our work included comprehensive structural design, foundation engineering, steel frame design, and integration of industrial requirements with modern office space.',
    tags: ['Building Design', 'Industrial', 'Structural Design', 'Steel Frame'],
  },
  {
    id: '5',
    title: 'Sam Houston Tollway AET',
    category: 'Roadway & Drainage',
    publishDate: '2024-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1626294285099-906f36195a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'An All-Electronic Tolling (AET) gantry over a busy tollway.',
    shortDescription: 'Conversion of the East Toll Plaza on the Sam Houston Tollway to an Ultimate All-Electronic Tolling (AET) system for HCTRA.',
    description:
      'Conversion of the East Toll Plaza on the Sam Houston Tollway to an Ultimate All-Electronic Tolling (AET) system. The project for HCTRA involved roadway design, drainage optimization, and traffic control planning.',
    tags: ['Roadway & Drainage', 'AET', 'Tolling', 'HCTRA'],
  },
  {
    id: '6',
    title: 'Kaua Residential Tower',
    category: 'Building Design',
    publishDate: '2024-02-18',
    imageUrl: 'https://images.unsplash.com/photo-1582236368243-c4087a452a22?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageAlt: 'A modern 18-floor residential tower in a city.',
    shortDescription: 'A 110,000 SF, 18-floor residential building in Cartagena, Colombia, featuring comprehensive structural analysis and BIM-compliant systems.',
    description:
      'A 110,000 SF, 18-floor residential building in Cartagena, Colombia, featuring comprehensive structural analysis and design. The project utilized BIM-compliant systems (LOD 100-500) for enhanced building efficiency.',
    tags: ['Building Design', 'Residential', 'High-Rise', 'BIM'],
  }
];