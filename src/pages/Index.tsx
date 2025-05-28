
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Users, Book, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [height, setHeight] = useState("");
  const [reach, setReach] = useState("");
  const [vertical, setVertical] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateDunk = () => {
    const heightInches = parseFloat(height);
    const reachInches = parseFloat(reach);
    const verticalInches = parseFloat(vertical);

    if (!heightInches || !reachInches || !verticalInches) {
      setResult("Please fill in all fields with valid numbers.");
      return;
    }

    const totalReach = reachInches + verticalInches;
    const rimHeight = 120; // 10 feet = 120 inches

    if (totalReach >= rimHeight) {
      setResult(`Yes! With a ${verticalInches}" vertical jump and ${reachInches}" reach, you can dunk! Your total reach is ${totalReach}" which exceeds the 120" rim height.`);
    } else {
      const needed = rimHeight - totalReach;
      setResult(`Not quite yet. You need ${needed}" more total reach to dunk. Consider improving your vertical jump or standing reach through training.`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-orange-600" />
              <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/vertical-jump-training" className="text-gray-600 hover:text-orange-600 transition-colors">Vertical Training</Link>
              <Link to="/basketball-dunk-tips" className="text-gray-600 hover:text-orange-600 transition-colors">Dunk Tips</Link>
              <Link to="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">Blog</Link>
              <Link to="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Dunk Calculator – Find Out If You Can Dunk
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Use our free dunk calculator to instantly determine if your vertical jump is high enough to dunk a basketball. 
            No login required, works on all devices.
          </p>
        </div>

        {/* Calculator Tool */}
        <Card className="max-w-2xl mx-auto mb-16 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Can You Dunk? Use This Dunk Calculator</CardTitle>
            <CardDescription>
              Enter your measurements below to find out if you can dunk
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="height">Height (inches)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="72"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="reach">Standing Reach (inches)</Label>
                <Input
                  id="reach"
                  type="number"
                  placeholder="96"
                  value={reach}
                  onChange={(e) => setReach(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="vertical">Vertical Jump (inches)</Label>
                <Input
                  id="vertical"
                  type="number"
                  placeholder="24"
                  value={vertical}
                  onChange={(e) => setVertical(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={calculateDunk} className="w-full bg-orange-600 hover:bg-orange-700">
              Calculate If You Can Dunk
            </Button>
            {result && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-800">{result}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Calculator className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Instant Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get immediate feedback on your dunking ability based on your current measurements and vertical jump.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>For All Players</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Whether you're a beginner or experienced player, our calculator works for all heights and skill levels.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Book className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Training Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get personalized recommendations and access to vertical jump training programs to improve your game.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Improve Your Vertical Jump?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore our comprehensive training guides and dunk tips to take your game to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vertical-jump-training">
              <Button className="bg-orange-600 hover:bg-orange-700">
                View Training Programs
              </Button>
            </Link>
            <Link to="/basketball-dunk-tips">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Learn Dunk Techniques
              </Button>
            </Link>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-orange-400" />
                <span className="font-bold">Dunk Calculator</span>
              </div>
              <p className="text-gray-400">
                The ultimate tool for basketball players to test their dunking ability and improve their vertical jump.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Dunk Calculator</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Training</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/vertical-jump-training" className="hover:text-white transition-colors">Vertical Jump Training</Link></li>
                <li><Link to="/basketball-dunk-tips" className="hover:text-white transition-colors">Dunk Tips</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dunk Calculator. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Dunk Calculator",
          "description": "Free online dunk calculator to determine if you can dunk a basketball based on your height, reach, and vertical jump.",
          "url": "https://dunkcalculator.com",
          "applicationCategory": "SportsApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
      </script>
    </div>
  );
};

export default Index;
