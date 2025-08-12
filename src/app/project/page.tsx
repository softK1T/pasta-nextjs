import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Shield,
  Zap,
  Users,
  GitBranch,
  Package,
  Github,
} from "lucide-react";

export default function ProjectInfo() {
  const technologies = [
    { name: "Next.js 15", icon: Code, color: "bg-black text-white" },
    { name: "TypeScript", icon: Code, color: "bg-blue-600 text-white" },
    { name: "Tailwind CSS", icon: Code, color: "bg-cyan-500 text-white" },
    { name: "Prisma", icon: Database, color: "bg-gray-800 text-white" },
    { name: "PostgreSQL", icon: Database, color: "bg-blue-700 text-white" },
    { name: "SWR", icon: Zap, color: "bg-orange-500 text-white" },
    { name: "shadcn/ui", icon: Package, color: "bg-slate-900 text-white" },
  ];

  const features = [
    {
      title: "Modern Tech Stack",
      description:
        "Built with Next.js 15, TypeScript, and modern web technologies for optimal performance and developer experience.",
      icon: Zap,
    },
    {
      title: "Real-time Data",
      description:
        "Live statistics and metrics from Telegram channels, providing up-to-date information about creepypasta popularity.",
      icon: Database,
    },
    {
      title: "Advanced Filtering",
      description:
        "Powerful search and filtering capabilities to find specific stories, tags, or content based on various criteria.",
      icon: Globe,
    },
    {
      title: "Responsive Design",
      description:
        "Fully responsive interface that works seamlessly across desktop, tablet, and mobile devices.",
      icon: Users,
    },
    {
      title: "Dark Mode Support",
      description:
        "Beautiful dark and light themes with automatic system preference detection and manual toggle.",
      icon: Shield,
    },
    {
      title: "Translation Support",
      description:
        "Built-in translation features to make creepypastas accessible to international audiences.",
      icon: Globe,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Project Information
        </h1>
        <p className="text-muted-foreground text-lg">
          A comprehensive creepypasta database and reader built with modern web
          technologies
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              About This Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              <strong>Pasta Vault</strong> is a modern web application designed
              to collect, organize, and present creepypastas from various
              Telegram channels and communities. The project aims to create a
              centralized platform for discovering and reading horror stories
              while providing detailed analytics and insights.
            </p>
            <p className="text-muted-foreground">
              Built as a university project, this application demonstrates
              modern web development practices, including responsive design,
              real-time data integration, and user-friendly interfaces. The
              project showcases the intersection of technology and digital
              folklore.
            </p>
            <p className="text-muted-foreground">
              The application aggregates data from multiple Telegram channels,
              processes statistics such as views, forwards, and reactions, and
              presents them in an intuitive and visually appealing interface.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Technical Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <Badge key={tech.name} className={tech.color}>
                  <tech.icon className="h-3 w-3 mr-1" />
                  {tech.name}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              The project utilizes cutting-edge web technologies to ensure fast
              performance, excellent user experience, and maintainable codebase.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Key Features
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <feature.icon className="h-4 w-4" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Data Sources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <strong className="text-foreground">
                    Telegram Channels:
                  </strong>
                  <p className="text-muted-foreground text-sm">
                    Multiple creepypasta-focused channels
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <strong className="text-foreground">Telegraph:</strong>
                  <p className="text-muted-foreground text-sm">
                    Archived stories and content
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <strong className="text-foreground">
                    Community Contributions:
                  </strong>
                  <p className="text-muted-foreground text-sm">
                    User-submitted content and stories
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy & Ethics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This project respects user privacy and content creators&apos;
              rights. All data is collected from publicly available sources and
              used for educational and research purposes.
            </p>
            <p className="text-muted-foreground">
              The application includes content warnings and age-appropriate
              filtering to ensure responsible consumption of horror content.
              Users are encouraged to exercise discretion when reading
              creepypastas.
            </p>
            <p className="text-muted-foreground">
              The project follows ethical guidelines for data collection and
              presentation, ensuring transparency about data sources and usage.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              Development & Contributing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This is an academic project developed as part of university
              coursework. The codebase is designed to demonstrate modern web
              development practices and may be used for educational purposes.
            </p>
            <p className="text-muted-foreground">
              The project showcases various web development concepts including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Modern React patterns and hooks</li>
              <li>Server-side rendering and static generation</li>
              <li>Database design and optimization</li>
              <li>API development and integration</li>
              <li>Responsive design and accessibility</li>
              <li>Performance optimization and caching</li>
            </ul>
            <p className="text-muted-foreground">
              For more information about the technical implementation or to
              contribute to the project, please refer to the project
              documentation and source code.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
