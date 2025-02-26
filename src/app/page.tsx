import { WaveAnimation } from "../components/wave-animation"
import { Navbar } from "../components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-block px-3 py-1 bg-purple-900/50 backdrop-blur-sm rounded-full text-sm font-medium mb-2">
                Revolutionizing Online Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                AI Virtual Teacher's Assistant
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Streamline classroom management and enhance teaching focus with our intelligent assistant that handles
                routine tasks automatically.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-all">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-transparent border border-purple-600 hover:bg-purple-900/30 rounded-full font-medium transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-2xl h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl" />
                <div className="relative h-full flex items-center justify-center">
                  <WaveAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* What We're Solving Section */}
        <section className="py-20 bg-gray-900" id="features">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We're Solving</h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-800/80 transition-all">
                <div className="w-14 h-14 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Teacher Distraction</h3>
                <p className="text-gray-400">
                  Teachers spend too much time on administrative tasks instead of focusing on teaching and student
                  engagement.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-800/80 transition-all">
                <div className="w-14 h-14 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Classroom Management</h3>
                <p className="text-gray-400">
                  Managing online classroom behavior, participation, and engagement is challenging without proper tools.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-800/80 transition-all">
                <div className="w-14 h-14 bg-cyan-900/50 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Student Engagement</h3>
                <p className="text-gray-400">
                  Ensuring fair participation and promptly addressing student questions in virtual environments is
                  difficult.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-950 relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Classroom Management</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-purple-500">•</div>
                    <div>
                      <span className="font-semibold">Automated Muting/Unmuting:</span>
                      <p className="text-gray-400 mt-1">
                        Detect and manage disruptive behavior with intelligent audio controls.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-purple-500">•</div>
                    <div>
                      <span className="font-semibold">Hand Raise Tracking:</span>
                      <p className="text-gray-400 mt-1">
                        Monitor participation order for fair turn-taking in discussions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-purple-500">•</div>
                    <div>
                      <span className="font-semibold">Breakout Room Management:</span>
                      <p className="text-gray-400 mt-1">
                        Create and manage breakout rooms dynamically based on criteria.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Student Interaction</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-500">•</div>
                    <div>
                      <span className="font-semibold">Chat Monitoring & AI Response:</span>
                      <p className="text-gray-400 mt-1">Answer common questions automatically using advanced NLP.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-500">•</div>
                    <div>
                      <span className="font-semibold">Polls & Quizzes:</span>
                      <p className="text-gray-400 mt-1">
                        Create and manage interactive assessments with real-time results.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-500">•</div>
                    <div>
                      <span className="font-semibold">Alert & Notification System:</span>
                      <p className="text-gray-400 mt-1">Keep teachers informed of important classroom events.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950" id="about">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Solution</h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
              <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                Our AI Virtual Teacher's Assistant transforms online education by handling routine tasks, reducing
                disruptions, and enhancing overall engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Teaching Focus</h3>
                <p className="text-gray-400">
                  Free teachers to concentrate on content delivery and student interaction rather than administrative
                  tasks.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fair Participation</h3>
                <p className="text-gray-400">
                  Ensure all students have equal opportunities to participate and receive attention.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
                <p className="text-gray-400">
                  Works alongside existing platforms like Zoom, Microsoft Teams, and Google Meet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Virtual Classroom?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our early access program and be among the first to experience the future of online teaching.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-all text-lg">
                  Request Early Access
                </button>
                <button className="px-8 py-4 bg-transparent border border-purple-600 hover:bg-purple-900/30 rounded-full font-medium transition-all text-lg">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                EducatorAI
              </h3>
              <p className="text-gray-400 mt-2">Enhancing online education through AI</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EducatorAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

