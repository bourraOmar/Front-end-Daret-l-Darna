import { Link } from "react-router-dom";
import { LuBuilding2, LuPiggyBank, LuUsers, LuLock, LuTrendingUp } from "react-icons/lu";


const Card = ({ className = "", children }) => (
  <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

const Button = ({ className = "", size = "md", children }) => {
  const sizeClass = size === "lg" ? "px-4 py-3 text-base" : "px-4 py-2 text-sm";
  return (
    <button className={`inline-flex items-center justify-center font-medium transition ${sizeClass} ${className}`}>
      {children}
    </button>
  );
};

const ArrowRight = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Home = () => {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12">
      <section className="relative pt-20 pb-12 px-4 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 md:space-y-12">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Welcome to <span className="text-blue-600 dark:text-blue-400">Darna</span>
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">& Dart</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose your path: Find your dream property or grow your wealth through collective savings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto pt-12">
              {/* Real Estate Platform */}
              <Card className="group relative overflow-hidden border-2 border-border hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 p-8">
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center">
                    <LuBuilding2 className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-left space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">Real Estate</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Discover premium properties, connect with sellers, and find your perfect home or investment opportunity.
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                      <span>Multi-criteria property search</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                      <span>Interactive property maps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                      <span>Direct seller communication</span>
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full group/btn mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    Enter Real Estate Platform
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>

              {/* Collective Savings Platform */}
              <Card className="group relative overflow-hidden border-2 border-border hover:border-emerald-600 dark:hover:border-emerald-400 transition-all duration-300 p-8">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-transparent dark:from-emerald-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-emerald-600 flex items-center justify-center">
                    <LuPiggyBank className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-left space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">Collective Savings</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Join savings groups, manage contributions, and achieve financial goals together with your community.
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">•</span>
                      <span>Create or join savings groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">•</span>
                      <span>Track contributions & payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">•</span>
                      <span>Community chat & support</span>
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full group/btn mt-6 bg-emerald-600 hover:bg-emerald-700 text-white"
                    size="lg"
                  >
                    Enter Savings Platform
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-12">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">15K+</p>
                <p className="text-sm text-muted-foreground">Properties</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">8K+</p>
                <p className="text-sm text-muted-foreground">Savings Groups</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose PropertyHub?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-0 bg-background">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mx-auto mb-4">
                <LuUsers className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Community Driven</h3>
              <p className="text-sm text-muted-foreground">Join thousands of users building wealth and finding homes together.</p>
            </Card>

            <Card className="p-6 text-center border-0 bg-background">
              <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center mx-auto mb-4">
                <LuLock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure & Trusted</h3>
              <p className="text-sm text-muted-foreground">Your data and transactions are protected with industry-leading security.</p>
            </Card>

            <Card className="p-6 text-center border-0 bg-background">
              <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mx-auto mb-4">
                <LuTrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Real Growth</h3>
              <p className="text-sm text-muted-foreground">Build real wealth through smart investments and community collaboration.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Build your financial future with Daret L'Darna
        </h1>
        <p className="text-base text-gray-600 sm:text-lg">
          Discover secure property investments, join community savings groups, and
          manage contributions in one intuitive platform.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/register"
            className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 sm:w-auto"
          >
            Get Started
          </Link>
          <Link
            to="/savings"
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto"
          >
            Explore Savings Groups
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Property listings</h2>
          <p className="mt-2 text-sm text-gray-600">
            Browse curated properties tailored for community-driven investments.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Transparent savings</h2>
          <p className="mt-2 text-sm text-gray-600">
            Track contributions and payouts for every daret cycle in real time.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Secure messaging</h2>
          <p className="mt-2 text-sm text-gray-600">
            Stay connected with members through built-in chat and notifications.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
