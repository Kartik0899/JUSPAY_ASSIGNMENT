export const sampleMenuData = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Overview of your payment ecosystem",
    icon: "Home",
    submenu: [],
  },
  {
    id: "payment-products",
    title: "Payment Products",
    description: "Explore our full suite of payment solutions",
    icon: "Package",
    submenu: [
      {
        id: "payment-processing",
        title: "Payment Processing",
        description: "End-to-end transaction processing",
        icon: "CreditCard",
        submenu: [
          {
            id: "online-payments",
            title: "Online Payments",
            description: "Secure web-based payments",
            icon: "Globe",
            submenu: [
              {
                id: "checkout-integration",
                title: "Checkout Integration",
                description: "Hosted & custom checkout flows",
                icon: "Layout",
              },
              {
                id: "payment-gateways",
                title: "Payment Gateways",
                description: "Fast and reliable routing",
                icon: "Server",
              },
              {
                id: "merchant-solutions",
                title: "Merchant Solutions",
                description: "Tools for merchants to accept payments",
                icon: "ShoppingBag",
              },
            ],
          },
          {
            id: "mobile-payments",
            title: "Mobile Payments",
            description: "In-app and mobile wallet payments",
            icon: "Smartphone",
            submenu: [
              {
                id: "apple-pay",
                title: "Apple Pay",
                description: "Native iOS payment experiences",
                icon: "Apple",
              },
              {
                id: "google-pay",
                title: "Google Pay",
                description: "Native Android payment experiences",
                icon: "Smartphone",
              },
              {
                id: "cross-platform-pay",
                title: "Cross-Platform Wallets",
                description: "Hybrid mobile payment solutions",
                icon: "Wallet",
              },
            ],
          },
          {
            id: "enterprise-processing",
            title: "Enterprise Processing",
            description: "High-volume payment infrastructure",
            icon: "Building",
          },
        ],
      },
      {
        id: "cloud-payments",
        title: "Cloud Payments",
        description: "Scalable payment infrastructure in the cloud",
        icon: "Cloud",
        submenu: [
          {
            id: "cloud-hosting",
            title: "Cloud Hosting",
            description: "AWS, Azure, GCP-powered payments",
            icon: "Server",
          },
          {
            id: "infrastructure-migration",
            title: "Infrastructure Migration",
            description: "Move your payment stack to the cloud",
            icon: "ArrowUpCircle",
          },
          {
            id: "cloud-compliance",
            title: "Cloud Compliance",
            description: "PCI-DSS compliant environments",
            icon: "Shield",
          },
        ],
      },
      {
        id: "payment-consulting",
        title: "Consulting",
        description: "Expert financial and payment advisory",
        icon: "Users",
        submenu: [
          {
            id: "fintech-consulting",
            title: "FinTech Consulting",
            description: "Strategic payment technology advice",
            icon: "FinTechConsulting",
          },
          {
            id: "digital-payments-transformation",
            title: "Payments Transformation",
            description: "Modernizing your payment systems",
            icon: "Zap",
          },
          {
            id: "risk-compliance-consulting",
            title: "Risk & Compliance",
            description: "Fraud prevention & regulatory compliance",
            icon: "Lock",
          },
        ],
      },
    ],
  },
  {
    id: "industry-payments",
    title: "Industry Payment Solutions",
    description: "Payment solutions tailored by industry",
    icon: "Building",
    submenu: [
      {
        id: "health-payments",
        title: "Healthcare Payments",
        description: "Payments for healthcare providers",
        icon: "Heart",
      },
      {
        id: "financial-payments",
        title: "Financial Services",
        description: "Banking and financial payment systems",
        icon: "DollarSign",
      },
      {
        id: "retail-payments",
        title: "Retail Payments",
        description: "Solutions for retail and e-commerce",
        icon: "ShoppingCart",
      },
    ],
  },
  {
    id: "company-info",
    title: "Company",
    description: "Learn more about our vision and team",
    icon: "Users",
    submenu: [
      {
        id: "about-company",
        title: "About Us",
        description: "Our mission in payment innovation",
        icon: "Info",
      },
      {
        id: "leadership-team",
        title: "Leadership",
        description: "Meet the executives driving our platform",
        icon: "Award",
      },
      {
        id: "jobs",
        title: "Careers",
        description: "Build the future of payments",
        icon: "Briefcase",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    description: "Documentation, tools, and learning hub",
    icon: "BookOpen",
    submenu: [
      {
        id: "docs",
        title: "Documentation",
        description: "Developer and technical documentation",
        icon: "FileText",
        submenu: [
          {
            id: "api-docs",
            title: "API Documentation",
            description: "Payment API reference",
            icon: "Code",
            submenu: [
              {
                id: "api-intro",
                title: "Getting Started",
                description: "Start integrating payments",
                icon: "PlayCircle",
              },
              {
                id: "api-auth",
                title: "Authentication",
                description: "Secure API keys & tokens",
                icon: "Key",
              },
              {
                id: "api-routes",
                title: "API Endpoints",
                description: "All payment-related endpoints",
                icon: "List",
              },
            ],
          },
          {
            id: "sdk-guides",
            title: "SDK Documentation",
            description: "Payment SDKs for all platforms",
            icon: "Package",
          },
          {
            id: "integration-guides",
            title: "Integration Guides",
            description: "Connect with third-party systems",
            icon: "Link",
          },
        ],
      },
      {
        id: "tutorials",
        title: "Tutorials",
        description: "Learn how to build payment features",
        icon: "Tutorials",
        submenu: [
          {
            id: "beginner-payments",
            title: "Beginner Tutorials",
            description: "Introductory payment guides",
            icon: "BookOpen",
          },
          {
            id: "advanced-payments",
            title: "Advanced Tutorials",
            description: "Deep dive into advanced payment flows",
            icon: "BookMarked",
          },
          {
            id: "video-guides",
            title: "Video Tutorials",
            description: "Watch detailed walkthroughs",
            icon: "Video",
          },
        ],
      },
      {
        id: "blog",
        title: "Blog",
        description: "Insights, updates, and industry news",
        icon: "Newspaper",
        submenu: [
          {
            id: "payment-tech",
            title: "Payments Technology",
            description: "Latest tech developments in payments",
            icon: "Code2",
          },
          {
            id: "company-updates",
            title: "Company News",
            description: "Announcements & updates",
            icon: "Newspaper",
          },
          {
            id: "customer-stories",
            title: "Case Studies",
            description: "Merchant success highlights",
            icon: "FileCheck",
          },
        ],
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    description: "Help and support for your payment needs",
    icon: "HelpCircle",
    submenu: [
      {
        id: "help-center",
        title: "Help Center",
        description: "Answers to common payment questions",
        icon: "MessageCircle",
        submenu: [
          {
            id: "faqs",
            title: "FAQs",
            description: "Frequently asked payment questions",
            icon: "HelpCircle",
            submenu: [
              {
                id: "account-faqs",
                title: "Account FAQs",
                description: "Account and merchant ID questions",
                icon: "User",
              },
              {
                id: "billing-faqs",
                title: "Billing FAQs",
                description: "Disputes, invoices, and fees",
                icon: "CreditCard",
              },
              {
                id: "technical-faqs",
                title: "Technical FAQs",
                description: "API errors, latency, and integration help",
                icon: "Settings",
              },
            ],
          },
          {
            id: "troubleshooting",
            title: "Troubleshooting",
            description: "Resolve common payment issues",
            icon: "AlertCircle",
          },
          {
            id: "knowledge-base",
            title: "Knowledge Base",
            description: "In-depth payment articles",
            icon: "Book",
          },
        ],
      },
      {
        id: "contact-support",
        title: "Contact Support",
        description: "Speak with our support specialists",
        icon: "Phone",
        submenu: [
          {
            id: "email-support",
            title: "Email Support",
            description: "Email our support team",
            icon: "Mail",
          },
          {
            id: "live-chat",
            title: "Live Chat",
            description: "Chat with an agent",
            icon: "MessageSquare",
          },
          {
            id: "phone-support",
            title: "Phone Support",
            description: "Call our help line",
            icon: "Phone",
          },
        ],
      },
      {
        id: "community",
        title: "Community",
        description: "Join the payments developer community",
        icon: "Users",
        submenu: [
          {
            id: "forums",
            title: "Forums",
            description: "Developer and merchant discussions",
            icon: "MessageCircle",
          },
          {
            id: "user-groups",
            title: "User Groups",
            description: "Connect with other FinTech builders",
            icon: "Users",
          },
          {
            id: "events",
            title: "Events",
            description: "Webinars, meetups, and summits",
            icon: "Calendar",
          },
        ],
      },
    ],
  },
  {
    id: "research-payments",
    title: "Payments Research",
    description: "Innovations shaping the future of payments",
    icon: "ResearchPayments",
    submenu: [
      {
        id: "research-projects",
        title: "Research Projects",
        description: "Exploring new payment technologies",
        icon: "FlaskConical",
      },
      {
        id: "innovation-lab",
        title: "Innovation Lab",
        description: "Experimental payment prototypes",
        icon: "InnovationLab",
      },
      {
        id: "partnerships",
        title: "Partnerships",
        description: "Collaborations with banks & fintechs",
        icon: "Handshake",
      },
    ],
  },
  {
    id: "sustainability",
    title: "Sustainable Payments",
    description: "Eco-friendly digital payment initiatives",
    icon: "Sustainability",
    submenu: [
      {
        id: "green-payment-programs",
        title: "Green Programs",
        description: "Energy-efficient payment operations",
        icon: "GreenPrograms",
      },
      {
        id: "carbon-neutral-payments",
        title: "Carbon Neutral",
        description: "Reducing our environmental footprint",
        icon: "Wind",
      },
      {
        id: "sustainable-tech",
        title: "Sustainable Technology",
        description: "Environmentally responsible technology",
        icon: "Recycle",
      },
    ],
  },
  {
    id: "investor-relations",
    title: "Investor Relations",
    description: "Financial insights and investor materials",
    icon: "TrendingUp",
    submenu: [
      {
        id: "financial-reports",
        title: "Financial Reports",
        description: "Quarterly and annual financials",
        icon: "FileSpreadsheet",
      },
      {
        id: "stock-info",
        title: "Stock Information",
        description: "Current stock market performance",
        icon: "BarChart3",
      },
      {
        id: "investor-events",
        title: "Investor Events",
        description: "Earnings calls and investor briefings",
        icon: "Calendar",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    description: "Reach out to our team",
    icon: "Mail",
    submenu: [
      {
        id: "contact-form",
        title: "Contact Form",
        description: "Send us your inquiry",
        icon: "Send",
      },
      {
        id: "locations",
        title: "Locations",
        description: "Our global office locations",
        icon: "MapPin",
      },
      {
        id: "social-media",
        title: "Social Media",
        description: "Follow our payment updates",
        icon: "Share2",
      },
    ],
  },
];
