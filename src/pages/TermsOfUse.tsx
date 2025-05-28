
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - Dunk Calculator</title>
        <meta name="description" content="Terms of Use for Dunk Calculator. Read our terms and conditions for using our free basketball dunk calculator and training resources." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dunkcalculator.com/terms-of-use" />
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
                <CardTitle className="text-3xl">Terms of Use</CardTitle>
                <p className="text-gray-600">Last updated: May 28, 2025</p>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                  <p className="mb-4">
                    By accessing and using the Dunk Calculator website, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Use of the Service</h2>
                  <p className="mb-4">
                    Dunk Calculator is provided as a free educational and entertainment tool. The calculations provided are estimates based on general biomechanical principles and should not be considered medical or professional advice.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                  <p className="mb-4">
                    The information and calculations provided by Dunk Calculator are for informational purposes only. Results may vary based on individual factors not accounted for in our calculations.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                  <p className="mb-4">
                    Dunk Calculator shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the website or services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                  <p className="mb-4">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <p className="mb-4">
                    For questions about these Terms of Use, please contact us through our <Link to="/contact" className="text-orange-600 hover:underline">contact page</Link>.
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

export default TermsOfUse;
