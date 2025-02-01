import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Check,
  GanttChartSquare,
  ListTodo,
  LockKeyhole,
  Send,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import { useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub" },
    { name: "description", content: "Welcome to TaskHub!" },
  ];
}

export default function Homepage() {
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleScrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <GanttChartSquare className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-primary">TaskHub</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/sign-in"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Log in
            </Link>
            <Link to="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section className="container mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 px-4 md:grid-cols-5 md:px-6">
          <div className="space-y-6 md:col-span-3">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl">
              Get more done with <span className="text-primary">TaskHub</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              The modern task management platform that helps teams organize,
              track, and complete work efficiently.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/sign-up">
                <Button size="lg">Try for Free</Button>
              </Link>
              <Button size="lg" variant="outline" onClick={handleScrollToFeatures}>
                See Features
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <Check className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="h-4 w-4 text-green-500" />
                <span>Free plan available</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="TaskHub Dashboard Preview"
              className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[450px]"
            />
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple process, powerful results
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Get started in minutes and see improved team productivity
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-16 mt-12">
              <div className="grid gap-2 text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <LockKeyhole className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold">Create an account</h3>
                <p className="text-sm text-muted-foreground">
                  Sign up for free and set up your first workspace in seconds.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold">Invite your team</h3>
                <p className="text-sm text-muted-foreground">
                  Add your team members and start collaborating right away.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Send className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold">Get things done</h3>
                <p className="text-sm text-muted-foreground">
                  Create projects, assign tasks, and track progress in
                  real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" ref={featuresRef} className="py-12 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                Our Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything you need to manage tasks effectively
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Our powerful features help teams stay organized and deliver
                projects on time
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-16 mt-12">
              <div className="grid gap-2 text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Work together seamlessly with your team in shared workspaces
                  with real-time updates.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-primary">
                    <ListTodo className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold">Task Management</h3>
                <p className="text-sm text-muted-foreground">
                  Organize tasks with priorities, due dates, comments, and
                  track progress visually.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-primary">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize project progress with beautiful charts and get
                  insights into team productivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to boost your team's productivity?
            </h2>
            <p className="mx-auto max-w-[600px] mt-4 text-gray-300">
              Join thousands of teams that use TaskHub to get more done,
              together.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/sign-up">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
                >
                  Get Started Free
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <GanttChartSquare className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-primary">TaskHub</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Simplify task management and team collaboration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Features</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Use Cases</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} TaskHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
