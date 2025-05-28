
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Dunk Calculator</title>
        <meta name="description" content="Privacy Policy for Dunk Calculator. Learn how we collect, use, and protect your personal information when using our basketball dunk calculator tool." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dunkcalculator.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-orange-600" />
                <h1 className="text-xl font-bold text-gray-900">Dunk Calculator</h1>
              </Link>
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-orange-600">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Calculator</span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Privacy Policy</CardTitle>
                <p className="text-gray-600">Last updated: January 15, 2024</p>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                  <p className="mb-4">
                    Dunk Calculator is designed to respect your privacy. We collect minimal information to provide our services:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Calculator inputs (height, reach, vertical jump) - processed locally in your browser</li>
                    <li>Basic analytics data (page views, general usage patterns) - anonymized</li>
                    <li>Technical information (browser type, device type) - for optimization purposes</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                  <p className="mb-4">
                    Your calculator inputs are processed entirely in your browser and are not stored on our servers. We use aggregated, anonymous data to:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Improve our calculator accuracy and user experience</li>
                    <li>Understand which features are most helpful to users</li>
                    <li>Optimize website performance and loading times</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
                  <p className="mb-4">
                    We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                  <p className="mb-4">
                    We may use third-party analytics services to help us understand how our website is used. These services may collect information sent by your browser as part of a web page request.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us through our <Link to="/contact" className="text-orange-600 hover:underline">contact page</Link>.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;
