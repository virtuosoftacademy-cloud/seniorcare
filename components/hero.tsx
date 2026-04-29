"use client";

import { Play, Star, Users, Trophy, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -top-20 bg-black/60">
        <img
          className="absolute bg-cover bg-center bg-no-repeat h-full w-full object-cover"
          src="/Hero.png"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="font-mono font-extralight md:absolute -bottom-22 right-6">
          <div className="flex justify-center items-center flex-col">

            <h1 className="uppercase text-5xl text-center lg:text-8xl text-primary flex flex-col items-center mb-6 leading-tight">
              Ardell
              <span className="text-3xl font-sans tracking-widest">Living</span>
            </h1>

            {/* <img src="/herologo.png" alt="Ardell Living" className="bg-transparent"/> */}
            <div className="w-32 h-1 bg-secondary" />
            <p className="pt-4 w-sm text-center text-2xl text-primary mb-8 leading-relaxed font-mono italic">
              Creating safe, high-quality homes where people can thrive. </p>

            <div className="font-sans flex flex-col sm:flex-row gap-4 mb-12 items-center justify-center">
              <Link href="/contact">
                <Button size={"lg"} className="text-lg">
                  Get Started Today
                  <ArrowRight className="mt-1 size-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant={"secondary"} className="p-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-white">5K+</span>
                </div>
                <p className="text-gray-400">Active Members</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-8 w-8 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-white">15+</span>
                </div>
                <p className="text-gray-400">Expert Trainers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-white">4.9</span>
                </div>
                <p className="text-gray-400">Rating</p>
              </div>
            </div> */}
          </div>

          {/* <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Start Membership
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span className="text-white">Monthly Plan</span>
                  <span className="text-orange-500 font-bold">$49/mo</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-500 rounded-lg">
                  <span className="text-white">Annual Plan</span>
                  <span className="text-white font-bold">$39/mo</span>
                </div>
                <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Get Started Today
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;