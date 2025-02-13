import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  ArrowRight, 
  Rocket, 
  Code, 
  Zap, 
  Shield, 
  Layout 
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Rocket className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold">QuickStart</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#features" className="hover:text-primary">Features</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
          <ModeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto mt-16 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Build Amazing Web Apps <br /> 
          <span className="text-primary">Lightning Fast</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A powerful starter template with cutting-edge technologies to accelerate your web development journey.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto mt-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Why Choose QuickStart?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our template provides a robust foundation with best-in-class technologies and developer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Code, 
              title: "Modern Tech Stack", 
              description: "Built with React, TypeScript, and Tailwind CSS for maximum productivity." 
            },
            { 
              icon: Zap, 
              title: "Performance Optimized", 
              description: "Lightning-fast performance with Vite and carefully selected libraries." 
            },
            { 
              icon: Shield, 
              title: "Secure by Design", 
              description: "Integrated security best practices and type-safe development." 
            },
            { 
              icon: Layout, 
              title: "Responsive UI", 
              description: "Beautiful, responsive components that work across all devices." 
            }
          ].map(({ icon: Icon, title, description }) => (
            <Card key={title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto mt-24 text-center bg-primary/10 py-16 rounded-xl">
        <h3 className="text-3xl font-bold mb-4">Ready to Accelerate Your Development?</h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Join thousands of developers who have supercharged their web development workflow.
        </p>
        <Button size="lg" className="group">
          Start Your Project
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 mt-16 border-t">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">© 2024 QuickStart. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}