import {
  Globe,
  Package,
  BarChart3,
  ShoppingCart,
  Cloud,
  Zap,
  TrendingDown,
  TrendingUp,
  Database,
  ScanBarcode,
  Smartphone,
  Store,
  Warehouse,
  Users,
  Building2,
  Briefcase,
  CheckCircle2,
  Code2,
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Websites for Shops & Businesses",
      description:
        "Get a professional, mobile-responsive website that showcases your products, services, and brand identity. Perfect for local businesses looking to establish an online presence and attract more customers.",
      idealFor: "Retail shops, service providers, agencies, consultants",
      includes: [
        "Responsive design",
        "SEO optimization",
        "Fast loading speeds",
        "Contact forms",
        "Google Maps integration",
      ],
    },
    {
      icon: Package,
      title: "Inventory & Billing Web Applications",
      description:
        "Manage your stock, track sales, and generate invoices with a custom-built inventory system. Say goodbye to spreadsheets and manual tracking — automate your operations with real-time updates.",
      idealFor: "Retail stores, wholesalers, traders, stockists",
      includes: [
        "Product catalog management",
        "Stock alerts",
        "Invoice generation",
        "Customer database",
        "Multi-user access",
      ],
    },
    {
      icon: BarChart3,
      title: "Financial Dashboards & Analytics",
      description:
        "Visualize your business performance with interactive dashboards. Track sales, expenses, profits, and cash flow in real time with intuitive charts and reports.",
      idealFor: "Business owners, accountants, financial managers",
      includes: [
        "Real-time data visualization",
        "Profit/loss tracking",
        "Expense categorization",
        "Downloadable reports",
        "Trend analysis",
      ],
    },
    {
      icon: ShoppingCart,
      title: "POS Systems with Barcode Scanning",
      description:
        "Streamline checkout processes with a modern Point-of-Sale system. Scan barcodes, process transactions quickly, and sync data instantly to your inventory.",
      idealFor: "Retail stores, supermarkets, pharmacies, hardware shops",
      includes: [
        "Barcode generation & scanning",
        "Quick billing",
        "Receipt printing",
        "Payment tracking",
        "Offline mode support",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud-Ready Business Automation Tools",
      description:
        "Automate repetitive tasks, integrate third-party services, and deploy your applications to the cloud. Built for reliability, security, and seamless collaboration across teams.",
      idealFor: "Growing businesses, remote teams, multi-location operations",
      includes: [
        "Cloud deployment",
        "Automated backups",
        "API integrations",
        "Secure authentication",
        "Scheduled task automation",
      ],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Real-Time Sales Tracking",
      description:
        "Monitor every transaction as it happens — stay updated on your revenue and best-selling products.",
    },
    {
      icon: TrendingDown,
      title: "Advanced Expense Management",
      description:
        "Categorize costs, track spending patterns, and keep your finances organized in one place.",
    },
    {
      icon: TrendingUp,
      title: "Profit & Cash Flow Analytics",
      description:
        "Understand your margins, forecast trends, and make data-driven decisions with confidence.",
    },
    {
      icon: Database,
      title: "Secure Database & Cloud Deployment",
      description:
        "Your data is protected with industry-standard security practices and hosted on reliable cloud infrastructure.",
    },
    {
      icon: ScanBarcode,
      title: "Barcode Generation & Scanning Support",
      description:
        "Generate unique barcodes for your products and enable fast, error-free scanning at checkout.",
    },
    {
      icon: Smartphone,
      title: "Modern, Responsive & Fast UI",
      description:
        "Beautiful interfaces that work flawlessly on desktop, tablet, and mobile — built for speed and usability.",
    },
  ];

  const industries = [
    {
      icon: Store,
      title: "Local Shops",
      description:
        "Build your online presence and manage daily operations effortlessly",
    },
    {
      icon: Warehouse,
      title: "Wholesale Businesses",
      description:
        "Track bulk orders, suppliers, and stock movements with ease",
    },
    {
      icon: Package,
      title: "Traders & Stockists",
      description:
        "Manage high-volume inventory and financial transactions",
    },
    {
      icon: ShoppingCart,
      title: "Retail Stores",
      description:
        "Streamline checkout, billing, and customer management",
    },
    {
      icon: Users,
      title: "Service Providers",
      description:
        "Automate bookings, invoicing, and client databases",
    },
    {
      icon: Building2,
      title: "Small & Medium Enterprises",
      description:
        "Scale operations with custom software tailored to your workflow",
    },
  ];

  const whyChoose = [
    {
      icon: CheckCircle2,
      title: "Built for Your Business",
      description:
        "Every project is customized to match your specific workflow — no generic templates or one-size-fits-all solutions.",
    },
    {
      icon: Briefcase,
      title: "End-to-End Development",
      description:
        "From initial planning to deployment and support, I handle the entire development lifecycle so you can focus on running your business.",
    },
    {
      icon: TrendingUp,
      title: "Scalable & Future-Proof",
      description:
        "My applications are built to grow with your business — add new features, users, and integrations as you expand.",
    },
    {
      icon: Database,
      title: "Secure & Reliable",
      description:
        "Your data is protected with encryption, secure authentication, and regular backups. Uptime and performance are guaranteed.",
    },
  ];

  const techStack = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TailwindCSS", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "RESTful APIs", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Prisma ORM", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Vercel", category: "Cloud" },
    { name: "AWS", category: "Cloud" },
    { name: "GitHub Actions", category: "DevOps" },
  ];

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transform Your Business With{" "}
            <span className="text-primary">Custom Software Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Empower your operations with cutting-edge web applications, smart
            dashboards, and automation tools built specifically for your
            business needs.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I&apos;m <span className="font-semibold text-foreground">Anirban Madhu</span> — a{" "}
            <span className="font-semibold text-foreground">Software Developer</span> specializing in custom web
            applications that help local businesses scale, track performance,
            and automate operations. From inventory management to real-time
            financial analytics, I build solutions that work seamlessly across
            devices and grow with your business.
          </p>
        </div>

        {/* Services Overview */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What I <span className="text-primary">Offer</span>
          </h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            I design and develop <span className="font-semibold text-foreground">cloud-ready business
            applications</span> tailored for shops, wholesalers, traders, and service
            providers. Every solution is built with performance, security, and
            scalability in mind — giving you complete control over your
            operations.
          </p>
        </div>

        {/* Detailed Service Blocks */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            My <span className="text-primary">Services</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="gradient-border p-6 md:p-8 card-hover"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{service.title}</h4>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Ideal For:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {service.idealFor}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Includes:
                  </p>
                  <ul className="space-y-1">
                    {service.includes.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Key <span className="text-primary">Features</span> of My Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Industries I <span className="text-primary">Serve</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My solutions are designed for businesses that value efficiency,
            accuracy, and growth:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg">{industry.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Why <span className="text-primary">Choose Me?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoose.map((reason, index) => (
              <div key={index} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20 bg-secondary/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <Code2 className="inline-block h-8 w-8 text-primary mr-2 mb-1" />
            Tech <span className="text-primary">Stack</span>
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            I build with modern, industry-standard technologies that ensure
            performance, security, and maintainability
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg text-center hover:bg-primary/10 transition-colors duration-300 border border-transparent hover:border-primary/50"
              >
                <p className="font-semibold text-sm">{tech.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to <span className="text-primary">Automate</span> Your
            Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let&apos;s build software that works for you — not the other way around.
            Whether you need a custom dashboard, an inventory system, or a
            complete business automation solution, I&apos;m here to help you
            modernize your operations and unlock new growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch Today
            </a>
            <a
              href="#projects"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              View My Work
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            <span className="font-semibold text-foreground">Anirban Madhu</span> •
            Software Developer • Web Developer • App Developer
            <br />
            <span className="text-primary">
              Grow Your Business With Custom Software & Smart Dashboards
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
