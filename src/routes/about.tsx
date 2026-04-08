import { createFileRoute } from '@tanstack/react-router'
import { BarChart3, Heart, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
        <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl ring-2 ring-white/20">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">About MoneyMirror</h1>
          <p className="text-xl text-gray-400">
            Empowering people to take control of their financial future
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8 border-white/10 bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center ring-2 ring-purple-500/20">
                <Target className="h-4 w-4 text-white" />
              </div>
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-400">
            <p>
              MoneyMirror was created with a simple yet powerful mission: to help people understand
              and manage their personal debt through clear, visual insights.
            </p>
            <p>
              We believe that financial freedom starts with awareness. By providing an intuitive platform
              that aggregates all your debt accounts in one place and presents them through easy-to-understand
              charts and analytics, we empower you to make informed decisions about your financial future.
            </p>
          </CardContent>
        </Card>

        {/* What We Offer */}
        <Card className="mb-8 border-white/10 bg-gray-900/50 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center ring-2 ring-indigo-500/20">
                <Heart className="h-4 w-4 text-white" />
              </div>
              What We Offer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-400">
              <div>
                <h3 className="font-semibold text-white mb-2">Comprehensive Debt Tracking</h3>
                <p>
                  Connect all types of debt accounts including credit cards, personal loans, car loans,
                  mortgages, Klarna, student loans, and medical debt.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Visual Analytics</h3>
                <p>
                  Our dashboard features multiple chart types including pie charts, bar graphs, and
                  line charts to help you visualize your debt from different perspectives.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Payoff Planning</h3>
                <p>
                  See projected payoff timelines based on your minimum payments and understand how
                  interest accumulates across all your accounts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Secure & Private</h3>
                <p>
                  Your financial data is stored securely using industry-standard encryption and 
                  authentication protocols powered by Supabase.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Who We Serve */}
        <Card className="mb-8 border-white/10 bg-gray-900/50 backdrop-blur-sm hover:border-teal-500/30 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center ring-2 ring-teal-500/20">
                <Users className="h-4 w-4 text-white" />
              </div>
              Who We Serve
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-400">
            <p>
              MoneyMirror is designed for anyone who wants to gain better control over their
              personal finances. Whether you're:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Trying to pay off credit card debt</li>
              <li>Managing multiple student loans</li>
              <li>Planning to pay down a mortgage early</li>
              <li>Consolidating various types of debt</li>
              <li>Simply wanting to understand your financial situation better</li>
            </ul>
            <p>
              Our platform provides the tools and insights you need to create a clear path forward.
            </p>
          </CardContent>
        </Card>

        {/* Technology */}
        <Card className="border-white/10 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
          <CardHeader>
            <CardTitle className="text-white">Built with Modern Technology</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400">
            <p className="mb-4">
              MoneyMirror is built using cutting-edge web technologies to ensure a fast,
              secure, and reliable experience:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>React for a responsive, interactive user interface</li>
              <li>Supabase for secure authentication and data storage</li>
              <li>Recharts for beautiful, interactive data visualizations</li>
              <li>Tailwind CSS for a clean, modern design</li>
            </ul>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-gradient-to-r from-amber-950/50 to-orange-950/50 border border-amber-700/30 rounded-lg backdrop-blur-sm">
          <p className="text-sm text-amber-200/80">
            <strong className="text-amber-300">Important Note:</strong> MoneyMirror is a prototyping tool and should not be used
            for storing real, sensitive financial information. For production use with actual financial data,
            additional security measures, compliance certifications, and regulatory approvals would be required.
            This tool is intended for educational and planning purposes only.
          </p>
        </div>
      </div>
    </div>
  )
}