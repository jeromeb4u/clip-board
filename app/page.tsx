"use client";

import { useState } from "react";
import {
  Search,
  Copy,
  Check,
  Sparkles,
  Tags,
  FolderOpen,
  Lightbulb,
  FileText,
  Smartphone,
  ChevronRight,
  CheckCircle2,
  X,
  Menu,
  Zap,
  Users,
  Infinity,
  Star,
} from "lucide-react";

// NavBar Component
function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
            </div>
            <span className="text-xl font-bold text-text">ClipBoard</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted hover:text-text transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted hover:text-text transition-colors">How It Works</a>
            <a href="#pricing" className="text-muted hover:text-text transition-colors">Pricing</a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-muted hover:text-text transition-colors font-medium">
              Login
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border px-4 py-4 space-y-3">
          <a href="#features" className="block text-muted hover:text-text py-2">Features</a>
          <a href="#how-it-works" className="block text-muted hover:text-text py-2">How It Works</a>
          <a href="#pricing" className="block text-muted hover:text-text py-2">Pricing</a>
          <button className="w-full py-2 text-muted hover:text-text font-medium text-left">Login</button>
          <button className="w-full py-2 bg-primary text-white rounded-lg font-medium">Get Started</button>
        </div>
      )}
    </nav>
  );
}

// Button Component
function Button({
  variant = "primary",
  children,
  className = "",
}: {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
}) {
  const base = "px-5 py-2.5 rounded-lg font-medium transition-all duration-200 inline-flex items-center gap-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 active:scale-95",
    secondary: "bg-secondary text-white hover:bg-secondary/90 active:scale-95",
    ghost: "bg-transparent text-text hover:bg-border/50 active:scale-95",
  };
  return <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
}

// Hero Section
function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-up opacity-0">
          <Sparkles size={14} />
          AI-Powered Organization
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text leading-tight mb-6 animate-fade-up opacity-0 animate-delay-100">
          Every great line.
          <br />
          <span className="text-primary">Saved forever.</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 animate-delay-200">
          The AI-organized library for content creators. Stop losing track of hooks, CTAs, bios, and replies scattered across notes apps and documents.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 animate-delay-300">
          <Button variant="primary">
            Start Free <ChevronRight size={18} />
          </Button>
          <Button variant="ghost">
            See Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

// Clipboard Preview Section
function ClipboardPreviewSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const snippets = [
    { id: "1", category: "Hook", tags: ["YouTube", "Engagement"], text: "This changed everything I thought I knew about productivity...", copy: "This changed everything I thought I knew about productivity..." },
    { id: "2", category: "CTA", tags: ["Subscribe", "YouTube"], text: "If you found this valuable, smash that subscribe button and hit the bell...", copy: "If you found this valuable, smash that subscribe button and hit the bell..." },
    { id: "3", category: "Bio", tags: ["Instagram", "Personal"], text: "Building in public | 100K+ followers | DM for collabs", copy: "Building in public | 100K+ followers | DM for collabs" },
    { id: "4", category: "Reply", tags: ["Engagement", "Comment"], text: "Thanks so much! Honestly it took a lot of iterations to get right...", copy: "Thanks so much! Honestly it took a lot of iterations to get right..." },
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-border/30">
      <div className="max-w-5xl mx-auto">
        {/* Search Bar */}
        <div className="bg-surface rounded-xl border border-border p-2 flex items-center gap-3 shadow-sm mb-8">
          <Search size={20} className="text-muted ml-3" />
          <input
            type="text"
            placeholder="Search your snippets... (e.g. 'hook', 'YouTube CTA', 'gaming bio')"
            className="flex-1 bg-transparent text-text placeholder:text-muted outline-none py-2"
          />
          <div className="flex items-center gap-2 pr-3">
            <span className="text-xs text-muted bg-border/70 px-2 py-1 rounded">AI</span>
            <Sparkles size={14} className="text-primary" />
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Hook", "CTA", "Bio", "Description", "Reply"].map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                tag === "All"
                  ? "bg-primary text-white"
                  : "bg-surface border border-border text-muted hover:border-primary hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Snippet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {snippets.map((snippet, i) => (
            <div
              key={snippet.id}
              className="bg-surface rounded-xl border border-border p-4 hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    snippet.category === "Hook" ? "bg-blue-100 text-blue-700" :
                    snippet.category === "CTA" ? "bg-green-100 text-green-700" :
                    snippet.category === "Bio" ? "bg-purple-100 text-purple-700" :
                    "bg-orange-100 text-orange-700"
                  }`}>
                    {snippet.category}
                  </span>
                  <div className="flex gap-1">
                    {snippet.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-border/70 text-muted text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(snippet.id, snippet.copy)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    copied === snippet.id
                      ? "bg-success text-white"
                      : "bg-border/50 text-muted hover:bg-primary hover:text-white"
                  }`}
                >
                  {copied === snippet.id ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              <p className="text-text text-sm leading-relaxed">{snippet.text}</p>
            </div>
          ))}
        </div>

        {/* AI Suggestion Banner */}
        <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
          <Sparkles size={18} className="text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-text">AI Suggestion</p>
            <p className="text-sm text-muted mt-0.5">
              Based on your current project (YouTube thumbnail tutorial), we recommend using Hook #7 for higher engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Grid
const features = [
  {
    icon: Sparkles,
    title: "AI Snippet Organizer",
    desc: "Paste any text and watch AI automatically tag, categorize, and organize it into your library.",
  },
  {
    icon: Search,
    title: "Smart Search",
    desc: "Find the exact snippet you need in seconds. Search by content, tag, category, or platform.",
  },
  {
    icon: Tags,
    title: "Tag-Based Categorization",
    desc: "Create custom tags and categories. Filter by platform, type, mood, or anything you want.",
  },
  {
    icon: Lightbulb,
    title: "Suggested Snippets",
    desc: "AI recommends the best snippets based on what you're currently working on.",
  },
  {
    icon: FileText,
    title: "Import from Anywhere",
    desc: "Import from Notion, Google Docs, Apple Notes, or just paste raw text directly.",
  },
  {
    icon: Smartphone,
    title: "Platform Formatting",
    desc: "Auto-format snippets for TikTok, YouTube, Instagram, Twitter, and more.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-text mb-4">Everything you need to stay organized</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From random hooks you've saved to full CTA libraries, ClipBoard keeps every great line at your fingertips.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works
function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Import Your Snippets",
      desc: "Paste hooks, CTAs, bios, and descriptions. Import from Notion, Google Docs, or just type them in.",
    },
    {
      num: "02",
      title: "AI Organizes Everything",
      desc: "Our AI reads each snippet, auto-tags it, and categorizes it by type, platform, and topic.",
    },
    {
      num: "03",
      title: "Find & Use in Seconds",
      desc: "Search by keyword, tag, or platform. Copy with one click and paste into your content.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-text mb-4">Get started in minutes</h2>
          <p className="text-muted text-lg">Three steps from chaos to clipboard mastery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="bg-surface border border-border rounded-xl p-6">
                <span className="text-5xl font-bold text-primary/10 mb-4 block">{step.num}</span>
                <h3 className="text-xl font-semibold text-text mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight size={24} className="text-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Bar
function StatsSection() {
  const stats = [
    { value: "50K+", label: "Active Creators" },
    { value: "12M+", label: "Snippets Saved" },
    { value: "98%", label: "Time Saved" },
    { value: "4.9/5", label: "Creator Rating" },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I had hooks saved in 7 different places. Now they're all in ClipBoard and I find the perfect one in seconds.",
      name: "Maya Chen",
      handle: "@mayacreates",
      stat: "3 hrs saved/week",
      initials: "MC",
      color: "bg-blue-500",
    },
    {
      quote: "My entire content strategy lives in ClipBoard now. The AI suggestions are scary accurate.",
      name: "James Rodriguez",
      handle: "@jamesrodriguez",
      stat: "40% more engagement",
      initials: "JR",
      color: "bg-green-500",
    },
    {
      quote: "I manage content for 5 clients. ClipBoard keeps everything organized and I never lose a great line again.",
      name: "Sarah Kim",
      handle: "@sarahkim_",
      stat: "5 clients, 1 tool",
      initials: "SK",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-text mb-4">Loved by creators everywhere</h2>
          <p className="text-muted text-lg">Join thousands of creators who've organized their content library.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-text text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{t.name}</p>
                    <p className="text-xs text-muted">{t.handle}</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                  {t.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Perfect for getting started",
      features: ["50 snippets", "Basic search", "3 tags per snippet", "1 category"],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Starter",
      price: "$5",
      period: "/month",
      desc: "For serious content creators",
      features: ["500 snippets", "AI suggestions", "Unlimited tags", "AI auto-categorization", "Priority support"],
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      desc: "For teams and power users",
      features: ["Unlimited snippets", "Import from any source", "Team sharing (5 seats)", "Custom categories", "API access", "Dedicated support"],
      cta: "Go Pro",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-text mb-4">Simple, transparent pricing</h2>
          <p className="text-muted text-lg">Start free, upgrade when you're ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 ${
                plan.highlight
                  ? "bg-primary text-white ring-4 ring-primary/20"
                  : "bg-surface border border-border"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-text"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-text"}`}>
                  {plan.price}
                </span>
                <span className={plan.highlight ? "text-white/70" : "text-muted"}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-white/80" : "text-muted"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-white/90" : "text-text"}`}>
                    <CheckCircle2 size={16} className={plan.highlight ? "text-white/70" : "text-success"} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90 active:scale-95"
                    : "bg-primary text-white hover:bg-primary/90 active:scale-95"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-text">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Stop losing great lines</h2>
        <p className="text-white/70 text-lg mb-10">
          Join 50,000+ creators who never lose a hook, CTA, or caption again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 bg-white text-text rounded-lg font-semibold hover:bg-white/90 transition-colors active:scale-95 flex items-center gap-2">
            <Zap size={18} />
            Start Free — No Credit Card
          </button>
          <button className="px-6 py-3 text-white/80 hover:text-white transition-colors font-medium">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const links = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap"],
    Resources: ["Blog", "Tutorials", "Community", "Support"],
    Company: ["About", "Careers", "Press", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer className="bg-surface border-t border-border py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
              </div>
              <span className="text-lg font-bold text-text">ClipBoard</span>
            </div>
            <p className="text-muted text-sm">Every great line. Saved forever.</p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-text mb-3">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted hover:text-text text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">© 2026 ClipBoard. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted hover:text-text transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-muted hover:text-text transition-colors">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <NavBar />
      <HeroSection />
      <ClipboardPreviewSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}