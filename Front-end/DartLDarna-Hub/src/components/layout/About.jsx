import React from "react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import { LuUsers, LuGlobe, LuShieldCheck, LuTrendingUp } from "react-icons/lu";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
          About <span className="text-indigo-600">Dart l'Darna</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We connect people with their dream properties and help communities
          save together. Secure, simple, and collaborative—your financial future
          starts here.
        </p>
      </section>   

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="flex flex-col items-center p-6 border rounded-lg bg-white shadow-sm text-center">
          <LuUsers className="w-10 h-10 text-indigo-600 mb-3" />
          <h3 className="font-bold text-lg mb-1">Community Driven</h3>
          <p className="text-sm text-muted-foreground">
            Join thousands of users building wealth and finding homes together.
          </p>
        </Card>
        <Card className="flex flex-col items-center p-6 border rounded-lg bg-white shadow-sm text-center">
          <LuShieldCheck className="w-10 h-10 text-green-600 mb-3" />
          <h3 className="font-bold text-lg mb-1">Secure & Trusted</h3>
          <p className="text-sm text-muted-foreground">
            Your data and transactions are protected with industry-leading
            security.
          </p>
        </Card>
        <Card className="flex flex-col items-center p-6 border rounded-lg bg-white shadow-sm text-center">
          <LuTrendingUp className="w-10 h-10 text-purple-600 mb-3" />
          <h3 className="font-bold text-lg mb-1">Real Growth</h3>
          <p className="text-sm text-muted-foreground">
            Build real wealth through smart property investments and savings.
          </p>
        </Card>
        <Card className="flex flex-col items-center p-6 border rounded-lg bg-white shadow-sm text-center">
          <LuGlobe className="w-10 h-10 text-teal-600 mb-3" />
          <h3 className="font-bold text-lg mb-1">Global Access</h3>
          <p className="text-sm text-muted-foreground">
            Access our platform from anywhere and connect with communities
            worldwide.
          </p>
        </Card>
      </section>

      {/* Team Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We are a passionate group of developers, designers, and product
          managers committed to making real estate and collective savings
          simple, transparent, and secure.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="p-6 border rounded-lg bg-white shadow-sm">
            <img src="https://media.licdn.com/dms/image/v2/D4E35AQEi51xAjntXBg/profile-framedphoto-shrink_200_200/B4EZY91.9QHcAY-/0/1744794284387?e=1764000000&v=beta&t=t5G17DqX5QNVXaWT-MIP-PIelEAFhRNjzTzbOX8Q9ps" className="w-24 h-24 rounded-full mx-auto mb-3" />
            <h3 className="font-bold text-lg">Omar</h3>
            <p className="text-sm text-muted-foreground">Fullstack Developer</p>
            <p className="text-sm text-muted-foreground">Safi, Maroc</p>
          </Card>
          <Card className="p-6 border rounded-lg bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" className="w-24 h-24 rounded-full mx-auto mb-3"/>
            <h3 className="font-bold text-lg">Sara</h3>
            <p className="text-sm text-muted-foreground">UI/UX Designer</p>
            <p className="text-sm text-muted-foreground">Toronto, Canada</p>
          </Card>
          <Card className="p-6 border rounded-lg bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="w-24 h-24 rounded-full mx-auto mb-3" />
            <h3 className="font-bold text-lg">Youssef</h3>
            <p className="text-sm text-muted-foreground">Product Manager</p>
            <p className="text-sm text-muted-foreground">London, England</p>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Get Started Today</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Join Dart l'Darna and start your journey towards finding your dream
          property and growing your savings with a community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Get Started
          </Link> 
          <Link
            to="/savings"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Explore Savings Groups
          </Link>
        </div>
      </section>
    </div>
  );
}
