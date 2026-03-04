export interface Service {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  stats: { value: string; label: string }[];
  featured: string[];
}

export const services: Service[] = [
    {
        id: "bridge",
        title: "Bridge Design & Engineering",
        description: "DECON provides comprehensive bridge design and structural engineering services, from initial concept studies to final construction plans. We specialize in creating safe, economical, and durable structures, including steel and concrete bridges, interchanges, and pedestrian crossings, compliant with AASHTO, TxDOT, and other state standards.",
        capabilities: [
            "Complex Bridge & Interchange Design",
            "Bridge Widening & Rehabilitation",
            "Steel & Concrete Girder Design",
            "Foundation Design (Drilled Shafts, Piling)",
            "3D Finite Element Modeling (FEM)",
            "Retaining Wall Design",
            "Construction Sequencing",
            "Load Rating & Analysis",
        ],
        stats: [
            { value: "250+", label: "Bridges Designed" },
            { value: "$2B+", label: "In Construction Value" },
        ],
        featured: [
            "I-35 NEX Central Project",
            "I-285 & SH-400 Interchange",
            "Transform I-66 P3 Project"
        ]
    },
    {
        id: "roadway",
        title: "Roadway & Drainage Design",
        description: "Our team delivers complete roadway design solutions for urban and rural environments. We focus on optimizing traffic flow, enhancing safety, and integrating sustainable drainage systems. Our services cover everything from major highway corridors to local street redevelopment and multi-use trail connectivity.",
        capabilities: [
            "Highway & Interchange Geometry",
            "Urban Arterial & Collector Design",
            "Traffic Control & Phasing Plans",
            "Pavement Marking & Signage",
            "Hydraulic & Hydrologic Modeling",
            "Storm Sewer Systems Design",
            "Culvert & Detention Pond Design",
            "Erosion & Sedimentation Control",
        ],
        stats: [
            { value: "500+", label: "Miles of Roadway" },
            { value: "HCTRA & TxDOT Trusted", label: "Partner" },
        ],
        featured: [
            "SH 99 Grand Parkway",
            "Sam Houston Tollway AET",
            "Harris County Trails Connectivity"
        ]
    },
    {
        id: "building",
        title: "Building Structural Design",
        description: "We provide expert structural engineering for a wide range of building types, including commercial, residential, industrial, and institutional facilities. Our designs prioritize structural integrity, efficiency, and architectural vision, from high-rise towers to large-scale industrial warehouses.",
        capabilities: [
            "Mid-Rise & High-Rise Structures",
            "Post-Tensioned Concrete Design",
            "Steel Frame & Composite Structures",
            "Industrial & Warehouse Facilities",
            "Podium & Mixed-Use Buildings",
            "Foundation Engineering",
            "Seismic & Wind Analysis",
            "BIM-Compliant Modeling (LOD 100-500)",
        ],
        stats: [
            { value: "5M+", label: "Square Feet Designed" },
            { value: "18-Floor", label: "Tallest Structure" },
        ],
        featured: [
            "Kaua Residential Tower",
            "Museum BLVD Residential",
            "Cameron Bear Lane Warehouse"
        ]
    }
];

export const precertCategories = {
    "Bridge & Structural": [
        "4.2.1 Major Bridge Design",
        "4.4.1 Major Bridge Layout",
        "5.1.1 Minor Bridge Design",
        "5.2.1 Minor Bridge Layout",
        "5.3.1 Multi-Level Interchange Design",
    ],
    "Roadway Design": [
        "3.2.1 Major Roadway Design",
        "3.4.1 Minor Roadway Design",
        "7.1.1 Traffic Engineering Studies",
        "7.3.1 Traffic Signal Timing",
        "8.1.1 Signing, Pavement Marking, & Channelization",
    ],
    "Hydraulic & Environmental": [
        "10.1.1 Hydrologic Studies",
        "10.2.1 Basic Hydraulic Design",
        "10.3.1 Complex Hydraulic Design",
        "2.4.1 Nationwide Permit",
        "2.12.1 Socio-Economic & Community Impact",
    ],
     "Construction & Field Services": [
        "11.1.1 Roadway Construction Management",
        "11.2.1 Bridge Construction Management",
        "12.1.1 Asphaltic Concrete",
        "12.1.2 Portland Cement Concrete",
        "12.2.1 Plant Inspection & Testing",
    ],
};