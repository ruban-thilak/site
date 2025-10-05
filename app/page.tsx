"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import HeroSection from "@/components/hero-section"
import { WaitlistForm } from "@/components/waitlist-form"
import {
  Calendar,
  Users,
  BarChart3,
  Shield,
  FileText,
  Award,
  TrendingUp,
  Clock,
  LineChart,
  PieChart,
  Lock,
  Key,
  CheckCircle
} from "lucide-react"

export default function HomePage() {

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative">
      {/* Cosmic Nebula - PatternCraft (Dark Mode) */}
      <div
        className="absolute inset-0 z-0 dark:block hidden"
        style={{
          background: `
            radial-gradient(ellipse 100% 20% at 50% 0%, rgba(123, 76, 232, 0.24), transparent 50%),
rgba(2, 6, 23, 0.63)
          `,
        }}
      />

      {/* Light Gradient Background (Light Mode) */}
      <div
        className="absolute inset-0 z-0 dark:hidden block"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
     repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <Header />

      <main className="relative z-10 text-gray-900 dark:text-white">
        {/* Hero Section from Tailark */}
        <HeroSection />

        {/* Features Section - Bento Grid */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Everything you need to manage your college
              </h2>
              <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
                From attendance tracking to analytics, Classdesk has all the tools
                to modernize your administration.
              </p>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Attendance Management - Spans 2 columns */}
              <motion.div
                className="lg:col-span-2 grid grid-rows-[1fr_auto] gap-y-4 overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative -m-6 p-6 border-x border-white/5 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
                  <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                  <div className="relative flex items-center justify-center py-8 gap-3">
                    <div className="absolute left-8 top-8 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-indigo-500/20 dark:to-blue-500/20 rounded-xl p-4 border border-gray-100 dark:border-white/10 shadow-lg transform -rotate-20">
                      <Users className="h-8 w-8 text-indigo-400" />
                    </div>
                    <div className="absolute top-16 right-16 bg-gradient-to-br from-gray-50 to-white dark:from-indigo-500/20 dark:to-blue-500/20 rounded-xl p-4 border border-gray-100 dark:border-white/10 shadow-lg w-full max-w-[180px] transform rotate-12">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-3.5 h-3.5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-700 dark:text-white/80 font-medium">Today</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="h-1 w-14 rounded bg-gray-300 dark:bg-white/10" />
                          </div>
                          <span className="text-[10px] text-green-400 font-medium">P</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="h-1 w-16 rounded bg-gray-300 dark:bg-white/10" />
                          </div>
                          <span className="text-[10px] text-green-400 font-medium">P</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-full bg-red-400/20 flex items-center justify-center">
                              <svg className="w-2 h-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="h-1 w-12 rounded bg-gray-300 dark:bg-white/10" />
                          </div>
                          <span className="text-[10px] text-red-400 font-medium">A</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="h-1 w-16 rounded bg-gray-300 dark:bg-white/10" />
                          </div>
                          <span className="text-[10px] text-green-400 font-medium">P</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-full bg-red-400/20 flex items-center justify-center">
                              <svg className="w-2 h-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="h-1 w-12 rounded bg-gray-300 dark:bg-white/10" />
                          </div>
                          <span className="text-[10px] text-red-400 font-medium">A</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-8 bottom-8 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-indigo-500/20 dark:to-blue-500/20 rounded-xl p-4 border border-gray-100 dark:border-white/10 shadow-lg transform -rotate-12">
                      <CheckCircle className="h-8 w-8 text-indigo-400" />
                    </div>
                    <div className="absolute left-8 -bottom-48 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-indigo-500/20 dark:to-blue-500/20 rounded-xl p-4 border border-gray-100 dark:border-white/10 shadow-lg transform -rotate-12">
                      <FileText className="h-4 w-4 text-indigo-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Attendance Management</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Track student attendance with ease and generate automated reports.</p>
                </div>
              </motion.div>

              {/* Marksheet Generation - Spans 2 columns */}
              <motion.div
                className="lg:col-span-2 grid grid-rows-[1fr_auto] gap-y-4 overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative -m-6 p-6 border-x border-white/5 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent">
                  <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                  <div className="relative flex items-center justify-center py-8 min-h-[200px]">
                    {/* Overlapping cards layout */}

                    {/* Small card - Left (behind) */}
                    <div className="absolute left-8 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-pink-500/20 dark:to-purple-500/20 rounded-lg p-2 border border-gray-100 dark:border-white/10 shadow-lg transform -rotate-12">
                      <FileText className="h-5 w-5 text-pink-400" />
                    </div>

                    {/* Big card - Center (front) */}
                    <div className="relative z-20 bg-gradient-to-br from-gray-50 to-white dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl p-4 border border-gray-100 dark:border-white/10 shadow-xl transform rotate-4 w-full max-w-[180px]">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-4 w-4 text-purple-400" />
                        <span className="text-[10px] text-gray-700 dark:text-white/80 font-medium">Student Report</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded bg-green-400/10 border-l-2 border-green-400">
                          <span className="text-[10px] text-gray-700 dark:text-white/70">Math</span>
                          <span className="text-xs font-bold text-green-400">A+</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-blue-400/10 border-l-2 border-blue-400">
                          <span className="text-[10px] text-gray-700 dark:text-white/70">Science</span>
                          <span className="text-xs font-bold text-blue-400">A</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-cyan-400/10 border-l-2 border-cyan-400">
                          <span className="text-[10px] text-gray-700 dark:text-white/70">History</span>
                          <span className="text-xs font-bold text-cyan-400">B+</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                        <span className="text-[10px] text-gray-600 dark:text-white/50">Overall GPA</span>
                        <span className="text-sm font-bold text-purple-400">3.8</span>
                      </div>
                    </div>

                    {/* Small card - Right (behind) */}
                    <div className="absolute right-8 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-blue-500/20 dark:to-cyan-500/20 rounded-lg p-2 border border-gray-100 dark:border-white/10 shadow-lg transform rotate-12">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Marksheets & Reports</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Create and manage student marksheets efficiently with built-in validation.</p>
                </div>
              </motion.div>

              {/* Session Planning - Spans 2 columns */}
              <motion.div
                className="lg:col-span-2 grid grid-rows-[1fr_auto] gap-y-4 overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative -m-6 p-6 border-x border-white/5 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
                  <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                  <div className="relative flex items-center justify-center py-8 min-h-[200px]">
                    {/* Medium icon - Right */}
                    <div className="absolute right-8 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-blue-500/20 dark:to-indigo-500/20 rounded-lg p-3 border border-gray-100 dark:border-white/10 shadow-lg transform rotate-12">
                      <Clock className="h-7 w-7 text-blue-400" />
                    </div>

                    {/* Main card - Left */}
                    <div className="absolute top-10 left-16 z-20 bg-gradient-to-br from-gray-50 to-white dark:from-blue-500/20 dark:to-cyan-500/20 rounded-xl p-4 border border-gray-100 dark:border-white/10 shadow-xl w-full max-w-[200px] -rotate-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="h-4 w-4 text-blue-400" />
                        <span className="text-xs text-gray-700 dark:text-white/80 font-medium">Weekly Schedule</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 rounded bg-blue-400/10 border-l-2 border-blue-400">
                          <div className="space-y-0.5">
                            <div className="text-[10px] text-blue-400 font-medium">09:00 AM</div>
                            <div className="h-1 w-16 rounded bg-gray-300 dark:bg-white/20" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded bg-cyan-400/10 border-l-2 border-cyan-400">
                          <div className="space-y-0.5">
                            <div className="text-[10px] text-cyan-400 font-medium">11:00 AM</div>
                            <div className="h-1 w-14 rounded bg-gray-300 dark:bg-white/20" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded bg-indigo-400/10 border-l-2 border-indigo-400">
                          <div className="space-y-0.5">
                            <div className="text-[10px] text-indigo-400 font-medium">02:00 PM</div>
                            <div className="h-1 w-18 rounded bg-gray-300 dark:bg-white/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Session Planning</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Organize academic sessions, timetables, and scheduling seamlessly.</p>
                </div>
              </motion.div>

              {/* Analytics & Insights - Spans 3 columns on large screens */}
              <motion.div
                className="md:col-span-2 lg:col-span-3 grid grid-rows-[1fr_auto] gap-y-4 rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative -m-6 p-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
                  <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                  <div className="relative flex items-center justify-center py-6 min-h-[180px]">
                    {/* Medium icon - Left */}
                    <div className="absolute left-24 bottom-1 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-blue-500/20 dark:to-cyan-500/20 rounded-lg p-3 border border-gray-100 dark:border-white/10 shadow-lg transform -rotate-12">
                      <LineChart className="h-7 w-7 text-blue-400" />
                    </div>

                    {/* Main card - Center */}
                    <div className="absolute top-10 right-20 -rotate-4 z-20 bg-gradient-to-br from-gray-50 to-white dark:from-emerald-500/20 dark:to-green-500/20 rounded-xl p-4 border border-gray-100 dark:border-white/10 shadow-xl w-full max-w-xs">
                      <div className="flex items-center justify-between mb-4">
                        <BarChart3 className="h-5 w-5 text-emerald-400" />
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900 dark:text-white">94.5%</div>
                          <div className="text-[10px] text-gray-600 dark:text-white/60">Avg Attendance</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 to-green-400" />
                          </div>
                          <span className="text-[10px] text-gray-600 dark:text-white/60 w-10">75%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                          </div>
                          <span className="text-[10px] text-gray-600 dark:text-white/60 w-10">80%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                          </div>
                          <span className="text-[10px] text-gray-600 dark:text-white/60 w-10">65%</span>
                        </div>
                      </div>
                    </div>

                    {/* Small icon - Right */}
                    <div className="absolute left-16 top-2 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-purple-500/20 dark:to-pink-500/20 rounded-lg p-6 border border-gray-100 dark:border-white/10 shadow-lg transform rotate-16">
                      <PieChart className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Analytics & Insights</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Get actionable insights into student performance and college operations with real-time dashboards.</p>
                </div>
              </motion.div>

              {/* Role Management - Spans 3 columns on large screens */}
              <motion.div
                className="md:col-span-2 lg:col-span-3 grid grid-rows-[1fr_auto] gap-y-4 overflow-hidden rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="relative -m-6 p-6 border-x border-white/5 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent">
                  <div aria-hidden="true" className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                  <div className="relative flex items-center justify-center py-8">
                    {/* Lock icon - Left */}
                    <div className="absolute left-8 bottom-4 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-amber-500/20 dark:to-yellow-500/20 rounded-lg p-3 border border-gray-100 dark:border-white/10 shadow-lg transform -rotate-12">
                      <Lock className="h-7 w-7 text-amber-400" />
                    </div>

                    {/* Key icon - Right */}
                    <div className="absolute right-8 bottom-4 z-10 bg-gradient-to-br from-gray-50 to-white dark:from-orange-500/20 dark:to-amber-500/20 rounded-lg p-2 border border-gray-100 dark:border-white/10 shadow-lg transform rotate-12">
                      <Key className="h-5 w-5 text-orange-400" />
                    </div>

                    {/* Combined Roles Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/10 rounded-lg p-3 border border-gray-100 dark:border-white/10 shadow-xl transform rotate-6 max-w-xs w-full">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Shield className="h-3 w-3 text-indigo-400" />
                        <span className="text-[10px] text-gray-800 dark:text-white/90 font-semibold">Access Control Matrix</span>
                      </div>

                      <div className="space-y-1.5">
                        {/* Admin Role */}
                        <div className="flex items-center justify-between p-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                          <div className="flex items-center gap-1.5">
                            <div className="p-1 rounded bg-green-500/20">
                              <Shield className="h-2.5 w-2.5 text-green-400" />
                            </div>
                            <div>
                              <p className="text-[10px] text-gray-800 dark:text-white/90 font-medium">Administrator</p>
                              <p className="text-[8px] text-gray-600 dark:text-white/60">Full Access</p>
                            </div>
                          </div>
                          <div className="flex gap-0.5">
                            <div className="w-3 h-3 rounded bg-green-400/40 flex items-center justify-center">
                              <svg className="w-2 h-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="w-3 h-3 rounded bg-green-400/40 flex items-center justify-center">
                              <svg className="w-2 h-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="w-3 h-3 rounded bg-green-400/40 flex items-center justify-center">
                              <svg className="w-2 h-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Faculty Role */}
                        <div className="flex items-center justify-between p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                          <div className="flex items-center gap-1.5">
                            <div className="p-1 rounded bg-blue-500/20">
                              <Shield className="h-2.5 w-2.5 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-[10px] text-gray-800 dark:text-white/90 font-medium">Faculty</p>
                              <p className="text-[8px] text-gray-600 dark:text-white/60">Limited Access</p>
                            </div>
                          </div>
                          <div className="flex gap-0.5">
                            <div className="w-3 h-3 rounded bg-blue-400/40 flex items-center justify-center">
                              <svg className="w-2 h-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="w-3 h-3 rounded bg-blue-400/40 flex items-center justify-center">
                              <svg className="w-2 h-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="w-3 h-3 rounded bg-gray-300 dark:bg-white/10" />
                          </div>
                        </div>

                        {/* Student Role */}
                        <div className="flex items-center justify-between p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                          <div className="flex items-center gap-1.5">
                            <div className="p-1 rounded bg-purple-500/20">
                              <Shield className="h-2.5 w-2.5 text-purple-400" />
                            </div>
                            <div>
                              <p className="text-[10px] text-gray-800 dark:text-white/90 font-medium">Student</p>
                              <p className="text-[8px] text-gray-600 dark:text-white/60">View Only</p>
                            </div>
                          </div>
                          <div className="flex gap-0.5">
                            <div className="w-3 h-3 rounded bg-purple-400/40 flex items-center justify-center">
                              <svg className="w-2 h-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="w-3 h-3 rounded bg-gray-300 dark:bg-white/10" />
                            <div className="w-3 h-3 rounded bg-gray-300 dark:bg-white/10" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Role Management</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Configure user roles and permissions with granular access control.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Join the Waitlist
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-white/70 mb-8">
                  Be among the first to experience an all-in-one college management platform. Get early access, exclusive features, and dedicated support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Early Access</h3>
                      <p className="text-gray-600 dark:text-white/60 text-sm">Be the first to try out beta features and new modules</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Influence the Roadmap</h3>
                      <p className="text-gray-600 dark:text-white/60 text-sm">Your feedback will shape future development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Dedicated Support</h3>
                      <p className="text-gray-600 dark:text-white/60 text-sm">Personalized onboarding for your college</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Form */}
              <motion.div
                className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-white/10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <WaitlistForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 dark:border-white/10 py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-white/60 text-sm">
              © 2025 Classdesk. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="mailto:hello@classdesk.app"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                hello@classdesk.app
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


