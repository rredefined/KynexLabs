'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="relative">
          <div className="text-6xl font-bold text-white animate-pulse tracking-widest">KrinixCloud</div>
          <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-scan"></div>
        </div>
      </div>
    );
  }

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "High Performance",
      description: "Experience blazing fast speeds with our latest generation processors and NVMe storage solutions."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Advanced Security",
      description: "Enterprise-grade protection with DDoS mitigation and automated backup systems."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Scalable Storage",
      description: "Dynamically scale your storage needs with our flexible infrastructure solutions."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Locations",
      description: "Access your resources from anywhere with our globally distributed network infrastructure."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Instant Deployment",
      description: "Get started in seconds with our automated deployment and provisioning system."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Access our expert support team anytime, anywhere with round-the-clock availability."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold tracking-wider group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:from-fuchsia-500 group-hover:to-violet-500 transition-all duration-500">KrinixCloud</span>
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2 focus:outline-none group">
              <div className="relative w-6 h-5">
                <span className={`absolute block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1.5'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transition-opacity duration-500 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out ${menuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-1.5'}`}></span>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="https://billing.is-light.xyz" className="nav-link">Domains</Link>
              <Link href="#" className="nav-link">Hosting</Link>
              <Link href="mailto:support@is-light.xyz" className="nav-link">Email</Link>
              <Link href="https://discord.gg/fuU8FCuJtX" className="nav-link">Security</Link>
              <Link href="https://discord.gg/fuU8FCuJtX" className="nav-link">Explore all</Link>
              
              <div className="flex items-center space-x-6 ml-8 border-l border-white/10 pl-8">
                <button className="hover:text-violet-400 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="relative group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-violet-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[1px] group overflow-hidden">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xs font-medium">IR</div>
                </div>
                <Link href="https://panel.is-light.xyz" className="text-sm hover:text-violet-400 transition-colors">Sign in</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-black/95 backdrop-blur-lg border-t border-white/5`}>
          <div className="px-6 py-4 space-y-4">
            <Link href="https://billing.is-light.xyz" className="block text-lg text-white/70 hover:text-white">Domains</Link>
            <Link href="#" className="block text-lg text-white/70 hover:text-white">Hosting</Link>
            <Link href="mailto:support@is-light.xyz" className="block text-lg text-white/70 hover:text-white">Email</Link>
            <Link href="https://discord.gg/fuU8FCuJtX" className="block text-lg text-white/70 hover:text-white">Security</Link>
            <Link href="https://discord.gg/fuU8FCuJtX" className="block text-lg text-white/70 hover:text-white">Explore all</Link>
            <Link href="https://panel.is-light.xyz" className="block text-lg text-white/70 hover:text-white">Sign in</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-block">
                <p className="text-sm font-medium mb-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">KrinixCloud™</p>
                <div className="h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 animate-scaleX"></div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight mt-6">
                <span className="block opacity-0 animate-fadeInUp">Next-gen</span>
                <span className="block text-gray-400 opacity-0 animate-fadeInUp animation-delay-200">Virtual</span>
                <span className="block opacity-0 animate-fadeInUp animation-delay-400">Machines</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-gray-400 max-w-[600px] mx-auto lg:mx-0 opacity-0 animate-fadeInUp animation-delay-600">
                Select a virtual private server (VPS) with more power,
                flexibility, simplicity, and possibility.
              </p>
              <div className="mt-12 opacity-0 animate-fadeInUp animation-delay-800">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-violet-500/50">
                  <span className="relative z-10">Find your VM</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>

            {/* Right side content */}
            <div className="relative z-10 hidden lg:block">
              <div className="relative w-full aspect-square">
                {/* Main circular elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-spin-slow"></div>
                    
                    {/* Inner rings with glow */}
                    <div className="absolute inset-[15%] rounded-full border border-violet-500/20 animate-spin-reverse">
                      <div className="absolute -inset-1 rounded-full bg-violet-500/10 blur-md"></div>
                    </div>
                    <div className="absolute inset-[30%] rounded-full border border-fuchsia-500/20 animate-spin">
                      <div className="absolute -inset-1 rounded-full bg-fuchsia-500/10 blur-md"></div>
                    </div>

                    {/* Center piece */}
                    <div className="absolute inset-[45%] bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">IR</div>
                    </div>

                    {/* Floating stats */}
                    <div className="absolute inset-0">
                      {/* Top stat */}
                      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span className="text-sm text-white/80">Systems Operational</span>
                        </div>
                      </div>

                      {/* Right stat */}
                      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                        <div className="text-sm text-white/60">Network Speed</div>
                        <div className="text-lg font-medium text-white">10 Gbps</div>
                      </div>

                      {/* Bottom stat */}
                      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                        <div className="text-sm text-white/60">Active VMs</div>
                        <div className="text-lg font-medium text-white">1,429</div>
                      </div>

                      {/* Left stat */}
                      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                        <div className="text-sm text-white/60">Uptime</div>
                        <div className="text-lg font-medium text-white">99.9%</div>
                      </div>
                    </div>

                    {/* Decorative dots */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * 30}deg) translateY(-150px) translate(-50%, -50%)`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Glowing orbs in background */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-fuchsia-500/20 rounded-full blur-[100px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-[20%] w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-block">
              <p className="text-sm font-medium mb-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">Features™</p>
              <div className="h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 animate-scaleX"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6">
              <span className="block">Next Generation</span>
              <span className="block text-gray-500">Infrastructure</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <div className="relative">
                  <div className="w-12 h-12 mb-8 rounded-lg bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 flex items-center justify-center group-hover:from-violet-500/20 group-hover:to-fuchsia-500/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[70%] h-[500px] bg-violet-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[400px] bg-violet-500/5 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-block">
              <p className="text-sm font-medium mb-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">Pricing™</p>
              <div className="h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 animate-scaleX"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6">
              <span className="block">Choose Your</span>
              <span className="block text-gray-500">Infrastructure</span>
            </h2>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {/* Basic Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Starter</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$2</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      2 CPU Cores
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      4GB RAM
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      10GB NVMe
                    </div>
                  </div>
                  <button className="mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Pro</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$4</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      4 CPU Cores
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      8GB RAM
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      16GB NVMe
                    </div>
                  </div>
                  <button className="mt-auto w-full py-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 transition-colors text-sm font-medium">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Business</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$8</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      6 CPU Cores
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      16GB RAM
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      32GB NVMe
                    </div>
                  </div>
                  <button className="mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$16</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      8 CPU Cores
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      32GB RAM
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      64GB NVMe
                    </div>
                  </div>
                  <button className="mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Performance Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Performance</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$24</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      12 CPU Cores
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      48GB RAM
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      96GB NVMe
                    </div>
                  </div>
                  <button className="mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Elite Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Elite</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$32</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      16 CPU Cores
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      64GB RAM
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      128 NVMe
                    </div>
                  </div>
                  <button className="mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Ultimate Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Ultimate</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$64</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      24 CPU Cores
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      128GB RAM
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      256GB NVMe
                    </div>
                  </div>
                  <button className="mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Custom Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Custom</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">Custom</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Custom CPU
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Custom RAM
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Custom Storage
                    </div>
                  </div>
                  <button className="mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 bg-black">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[70%] h-[500px] bg-violet-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[50%] h-[400px] bg-violet-500/5 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-block">
              <p className="text-sm font-medium mb-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">FAQ™</p>
              <div className="h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 animate-scaleX"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6">
              <span className="block">Frequently Asked</span>
              <span className="block text-gray-500">Questions</span>
            </h2>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* FAQ Item 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4">How reliable is your infrastructure?</h3>
                <p className="text-gray-400">Our infrastructure is built on enterprise-grade hardware with 99.9% uptime guarantee. We use redundant systems and backup power to ensure your services remain operational 24/7.</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Can I upgrade my plan anytime?</h3>
                <p className="text-gray-400">Yes, you can seamlessly upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated to reflect the changes.</p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4">What kind of support do you offer?</h3>
                <p className="text-gray-400">We provide 24/7 technical support through multiple channels including live chat, email, and phone. Our expert team is always ready to help you with any issues.</p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4">How secure is your platform?</h3>
                <p className="text-gray-400">Security is our top priority. We implement enterprise-grade encryption, regular security audits, DDoS protection, and automated backup systems to keep your data safe.</p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4">What's your backup policy?</h3>
                <p className="text-gray-400">We perform automated daily backups of all systems and data. Backups are stored in multiple secure locations, and you can restore your data at any time through our control panel.</p>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Do you offer custom solutions?</h3>
                <p className="text-gray-400">Yes, we provide custom infrastructure solutions tailored to your specific needs. Contact our sales team to discuss your requirements and get a personalized quote.</p>
              </div>
            </div>
          </div>

          {/* Contact Support Button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 transition-colors text-sm font-medium group">
              <span>Still have questions? Contact Support</span>
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 bg-black">
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[70%] h-[500px] bg-violet-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[400px] bg-violet-500/5 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-block">
              <p className="text-sm font-medium mb-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">Reviews™</p>
              <div className="h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 animate-scaleX"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6">
              <span className="block">What Our Clients</span>
              <span className="block text-gray-500">Are Saying</span>
            </h2>
          </div>

          {/* Featured Review */}
          <div className="relative mb-16 group">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-10 border border-white/5 group-hover:border-violet-500/30 transition-colors">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[2px]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xl font-semibold">MB</div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold">Michael Bennett</h4>
                    <p className="text-gray-400">CTO at TechFlow</p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="text-2xl font-medium mb-4">"The performance and reliability of KrinixCloud's infrastructure have been game-changing for our business. Their support team is exceptional."</div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[1px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-sm font-semibold">SJ</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-400">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"The scalability and performance of their VMs have exceeded our expectations. Deployment is incredibly smooth."</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[1px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-sm font-semibold">RW</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Robert Wilson</h4>
                    <p className="text-sm text-gray-400">DevOps Lead</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"Their infrastructure security is top-notch. We've never experienced any downtime or security issues."</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-[1px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-sm font-semibold">EA</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Emily Anderson</h4>
                    <p className="text-sm text-gray-400">Product Manager</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"The customer support team is incredibly responsive and knowledgeable. They've helped us optimize our infrastructure."</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Review Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">4.9/5</div>
              <div className="text-gray-400 mt-2">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">10k+</div>
              <div className="text-gray-400 mt-2">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">99.9%</div>
              <div className="text-gray-400 mt-2">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">24/7</div>
              <div className="text-gray-400 mt-2">Support</div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 bg-black">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[70%] h-[500px] bg-violet-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[50%] h-[400px] bg-violet-500/5 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative pt-32 pb-16 overflow-hidden bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Newsletter Section */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-10 border border-white/5">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-gray-400 max-w-lg">Get the latest updates about our products, features, and special offers delivered straight to your inbox.</p>
                </div>
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-black/40 border border-white/5 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50"
                  />
                  <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-200 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
            {/* Company Links */}
            <div className="col-span-2">
              <div className="mb-8">
                <Link href="/" className="text-3xl font-bold tracking-wider inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">KrinixCloud</span>
                </Link>
                <p className="text-gray-400 mt-4 max-w-sm">Next-generation infrastructure for modern applications. Build, deploy, and scale with confidence.</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-violet-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-violet-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-violet-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-violet-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Customer Stories</a></li>
              </ul>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Developer API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Infrastructure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Data Centers</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Resources</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 KrinixCloud™. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Cookie Settings</a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 w-[70%] h-[500px] bg-violet-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute top-0 right-0 w-[50%] h-[400px] bg-fuchsia-500/5 rounded-full blur-[100px]"></div>
        </div>
      </footer>
    </main>
  );
} 