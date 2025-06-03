import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Users, Target, TrendingUp, Award } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AverageVerticalJumps = () => {
  return (
    <>
      <Helmet>
        <title>Average Vertical Jump by Age, Sport & Position: Complete Benchmarks 2025</title>
        <meta name="description" content="Compare your vertical jump to average benchmarks by age, basketball position, and sport. See where you stand and set realistic improvement goals." />
        <meta name="keywords" content="average vertical jump, vertical jump benchmarks, basketball vertical jump average, vertical jump by age, athletic benchmarks" />
        <link rel="canonical" href="https://dunkcalculator.com/dunking-skills/average-vertical-jumps/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link 
            to="/dunking-skills/types-of-dunks"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Types of Dunks
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Do You Stack Up? Average Vertical Jump Benchmarks
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare your vertical jump to athletes across different age groups, genders, and competitive levels. 
              Find out where you stand and set realistic improvement goals.
            </p>
          </div>

          {/* Why Compare */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why Bother Comparing Your Vertical Jump to Averages?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Benchmarking:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Motivation:</strong> See how much room for improvement you have</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Realistic Goal Setting:</strong> Set achievable targets based on your demographic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Athletic Potential:</strong> Understand your natural gifts and areas to develop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Training Focus:</strong> Identify if you're above/below average for targeted improvement</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Reminders:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Individual Progress Matters Most</h4>
                    <p className="text-blue-700 text-sm">
                      While comparisons are useful, focus primarily on your personal improvement journey rather than competing with others.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Genetics vs. Training</h4>
                    <p className="text-green-700 text-sm">
                      These averages reflect both genetic potential and training. With dedicated work, almost anyone can significantly improve.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Context Matters</h4>
                    <p className="text-purple-700 text-sm">
                      Training background, nutrition, and measurement methods all influence these numbers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Male Averages */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Average Vertical Jump for Males</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Age Group</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Below Average</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Average</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Good</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Excellent</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Elite/Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">13-14 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;12"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">12-16"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">17-20"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">21-24"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">25+"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">15-16 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;14"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">14-18"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">19-22"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">23-26"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">27+"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">17-18 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;16"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">16-20"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">21-24"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">25-28"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">29+"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">19-22 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;18"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">18-22"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">23-26"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">27-30"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">31+"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">23-30 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;16"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">16-20"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">21-24"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">25-28"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">29+"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">30+ years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;14"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">14-18"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">19-22"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">23-26"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">27+"</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Understanding Male Vertical Jump Patterns:</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Peak jumping ability typically occurs in late teens to early twenties</li>
                <li>• Training can maintain and even improve jumps into the 30s</li>
                <li>• Elite male athletes often exceed 30+ inches with dedicated training</li>
                <li>• Recreational athletes should focus on the "Good" to "Excellent" ranges</li>
              </ul>
            </div>
          </div>

          {/* Female Averages */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Average Vertical Jump for Females</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-pink-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Age Group</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Below Average</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Average</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Good</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Excellent</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Elite/Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">13-14 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;8"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">8-12"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">13-16"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">17-20"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">21+"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">15-16 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;10"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">10-14"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">15-18"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">19-22"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">23+"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">17-18 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;12"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">12-16"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">17-20"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">21-24"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">25+"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">19-22 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;12"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">12-16"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">17-20"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">21-24"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">25+"</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">23-30 years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;10"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">10-14"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">15-18"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">19-22"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">23+"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">30+ years</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">&lt;8"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">8-12"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">13-16"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">17-20"</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-purple-600">21+"</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-pink-50 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">Understanding Female Vertical Jump Patterns:</h4>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• Female athletes show excellent relative power considering body composition differences</li>
                <li>• Elite female athletes can achieve 25+ inch verticals with dedicated training</li>
                <li>• Power training and plyometrics are especially effective for female athletes</li>
                <li>• Many factors beyond raw numbers determine athletic success and dunking ability</li>
              </ul>
            </div>
          </div>

          {/* Organized Basketball Standards */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Vertical Jump Standards in Organized Basketball</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">High School Averages:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Boys' Varsity Basketball</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• <strong>Average:</strong> 20-24 inches</li>
                      <li>• <strong>Starters:</strong> 22-26 inches</li>
                      <li>• <strong>Elite players:</strong> 28+ inches</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">Girls' Varsity Basketball</h4>
                    <ul className="text-pink-700 text-sm space-y-1">
                      <li>• <strong>Average:</strong> 16-20 inches</li>
                      <li>• <strong>Starters:</strong> 18-22 inches</li>
                      <li>• <strong>Elite players:</strong> 24+ inches</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">College (NCAA) Averages:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Men's Division I</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• <strong>Average:</strong> 26-30 inches</li>
                      <li>• <strong>Guards:</strong> 28-32 inches</li>
                      <li>• <strong>Forwards/Centers:</strong> 24-28 inches</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Women's Division I</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• <strong>Average:</strong> 19-23 inches</li>
                      <li>• <strong>Guards:</strong> 20-24 inches</li>
                      <li>• <strong>Forwards/Centers:</strong> 18-22 inches</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Combine Data:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">NBA Draft Combine</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Standing Vertical Average:</strong> 28.5 inches</li>
                    <li>• <strong>Max Vertical Average:</strong> 35.5 inches</li>
                    <li>• <strong>Top Performers:</strong> 40+ inches (max vertical)</li>
                    <li>• <strong>Guards vs. Bigs:</strong> Guards typically jump higher</li>
                  </ul>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">WNBA Draft Combine</h4>
                  <ul className="text-indigo-700 text-sm space-y-1">
                    <li>• <strong>Standing Vertical Average:</strong> 20.5 inches</li>
                    <li>• <strong>Max Vertical Average:</strong> 26.5 inches</li>
                    <li>• <strong>Top Performers:</strong> 30+ inches (max vertical)</li>
                    <li>• <strong>Position variation:</strong> Similar to men's patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Goal Setting */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use These Benchmarks to Set Your Own Realistic Goals</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Goal Setting Approach:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Step 1: Know Your Starting Point</h4>
                    <p className="text-green-700 text-sm">
                      Accurately measure your current vertical jump using consistent methods. 
                      This becomes your baseline for tracking progress.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Step 2: Set Incremental Targets</h4>
                    <p className="text-blue-700 text-sm">
                      Aim for 2-4 inch improvements over 3-6 month periods rather than massive jumps. 
                      Realistic progress builds sustainable motivation.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Step 3: Consider Your Context</h4>
                    <p className="text-purple-700 text-sm">
                      Factor in your age, training background, available time, and natural athleticism 
                      when setting expectations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Realistic Improvement Expectations:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Beginner Athletes (0-6 months training)</h4>
                    <p className="text-orange-700 text-sm">
                      Can typically gain 3-6 inches with consistent, proper training. 
                      Focus on movement quality and basic strength building.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Intermediate Athletes (6+ months training)</h4>
                    <p className="text-yellow-700 text-sm">
                      May gain 2-4 inches per year with advanced programming. 
                      Requires more sophisticated training approaches.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Advanced Athletes (2+ years training)</h4>
                    <p className="text-red-700 text-sm">
                      Gains become smaller (1-2 inches annually) but still possible. 
                      Focus on optimizing weaknesses and peak performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Remember: You're Competing With Yourself</h3>
              <p className="text-gray-600 mb-4">
                While these benchmarks provide useful context, your primary focus should be on consistent personal improvement. 
                Many factors influence jumping ability beyond raw numbers:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Technique and timing</li>
                  <li>• Body control and coordination</li>
                  <li>• Consistency under pressure</li>
                </ul>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Injury history and mobility</li>
                  <li>• Training consistency and quality</li>
                  <li>• Nutrition and recovery habits</li>
                </ul>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Mental confidence and fearlessness</li>
                  <li>• Sport-specific application</li>
                  <li>• Individual biomechanics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">See Where YOUR Vertical Stands!</h2>
            <p className="text-xl mb-6">
              Use our calculator to get personalized feedback on how your jump compares to your age group and set improvement goals.
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Test Your Vertical Now
              </Link>
              <Link 
                to="/vertical-jump-training/programs"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Start Training Program →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AverageVerticalJumps;
