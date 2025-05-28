
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Crown, Star, TrendingUp, Target } from "lucide-react";

const FamousDunkers = () => {
  return (
    <>
      <Helmet>
        <title>Famous Dunkers: Secrets & Highlights of NBA Legends (Jordan, Vince Carter, Dr. J)</title>
        <meta name="description" content="Get inspired by the greatest dunkers in basketball history! Learn about the techniques, athleticism & stories of legends like Michael Jordan, Vince Carter, Dr. J & more." />
        <meta name="keywords" content="famous dunkers, Michael Jordan, Vince Carter, Dr J, NBA dunks, basketball legends, slam dunk contest" />
        <link rel="canonical" href="https://dunkcalculator.com/dunking-skills/famous-dunkers/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link 
            to="/dunking-skills/average-vertical-jumps"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Vertical Jump Benchmarks
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Legends of Flight: Analyzing Famous Dunkers and What Made Them Soar
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Study the greatest dunkers in basketball history and discover the secrets behind their legendary athleticism, 
              creativity, and dominance above the rim.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Crown className="w-5 h-5 text-yellow-500" />
              <span>From pioneers to modern masters</span>
            </div>
          </div>

          {/* Michael Jordan */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Crown className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Michael Jordan - "His Airness"</h2>
              <span className="ml-4 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">THE ICON</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What Made Jordan Special:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Unparalleled Hangtime:</strong> Seemed to defy gravity with extended flight time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Body Control:</strong> Incredible mid-air adjustments and contortions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Competitive Drive:</strong> Rose to the occasion in clutch moments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Iconic Moments:</strong> Free throw line dunk, switch-hands layup, cradle dunks</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Signature Athletic Attributes:</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Vertical Jump: 46+ inches (reported)</li>
                    <li>• Height: 6'6" with long wingspan</li>
                    <li>• Large hands with exceptional grip strength</li>
                    <li>• Explosive first step and acceleration</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Jordan's Greatest Dunk Moments:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">1988 Free Throw Line Dunk</h4>
                    <p className="text-yellow-700 text-sm">
                      Won the slam dunk contest with this iconic dunk, taking off from the free throw line 
                      with tongue out - a moment that defined basketball artistry.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">The Cradle Dunk</h4>
                    <p className="text-blue-700 text-sm">
                      Brought the ball down low and "rocked" it like a baby before slamming it home, 
                      showcasing incredible hangtime and flair.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Switch-Hands Layup vs Lakers</h4>
                    <p className="text-green-700 text-sm">
                      Though not a dunk, this move demonstrated the body control and mid-air adjustment 
                      ability that made his dunks so spectacular.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">The Jordan Legacy:</h4>
                  <p className="text-gray-700 text-sm">
                    Jordan didn't just dunk - he created art in the air. His combination of athleticism and competitive fire 
                    set the standard for what it means to be a dominant dunker.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vince Carter */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Vince Carter - "Vinsanity" / "Half Man, Half Amazing"</h2>
              <span className="ml-4 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">THE INNOVATOR</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Carter's Dunking Dominance:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Raw Power:</strong> Explosive leaping ability with incredible force</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Creativity:</strong> Invented new dunks and combinations never seen before</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>In-Game Dunking:</strong> Brought dunk contest moves to actual games</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Showmanship:</strong> Natural entertainer who understood the spectacle</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Physical Attributes:</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Height: 6'6" with exceptional wingspan</li>
                    <li>• Vertical Jump: 43+ inches</li>
                    <li>• Incredible upper body strength</li>
                    <li>• Perfect combination of size and athleticism</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2000 Slam Dunk Contest - The Greatest Ever:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">The Elbow Hang / "Cookie Jar"</h4>
                    <p className="text-orange-700 text-sm">
                      Carter's forearm went through the rim in this physics-defying dunk that left the crowd speechless. 
                      This moment is often considered the greatest dunk of all time.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">360° Windmill</h4>
                    <p className="text-blue-700 text-sm">
                      Combined a full 360° spin with a windmill motion - a move that seemed impossible 
                      until Carter made it look effortless.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Between-the-Legs variations</h4>
                    <p className="text-green-700 text-sm">
                      Carter perfected multiple between-the-legs dunks, including the reverse version 
                      that became his signature move.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">The "Olympic Dunk":</h4>
                  <p className="text-yellow-700 text-sm">
                    Carter jumping over 7'2" Frederic Weis in the 2000 Olympics remains one of the most 
                    shocking displays of athleticism in basketball history.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. J */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Crown className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Julius Erving - "Dr. J"</h2>
              <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">THE PIONEER</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Foundation of Modern Dunking:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Grace and Style:</strong> Brought elegance and artistry to above-rim play</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Cultural Impact:</strong> Made dunking an art form, not just a shot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>ABA Innovation:</strong> Used the ABA's freedom to showcase creativity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Longevity:</strong> Maintained dunking ability throughout long career</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Dr. J's Signature Moves:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• "Rock the Baby" cradle dunk</li>
                    <li>• Baseline reverse dunks</li>
                    <li>• Smooth, effortless one-handers</li>
                    <li>• Creative approach angles</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Historical Significance:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">The ABA Years (1971-1976)</h4>
                    <p className="text-yellow-700 text-sm">
                      Dr. J used the ABA's more open style to develop his aerial artistry. The red, white, 
                      and blue ball became his canvas for athletic expression.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Bringing Dunking to the NBA</h4>
                    <p className="text-green-700 text-sm">
                      When Dr. J joined the Philadelphia 76ers, he brought his dunking artistry to the more 
                      conservative NBA, changing the game forever.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Cultural Impact</h4>
                    <p className="text-purple-700 text-sm">
                      Dr. J's afro, style, and aerial grace made him a cultural icon beyond basketball, 
                      inspiring a generation of future dunkers.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">The Foundation:</h4>
                  <p className="text-gray-700 text-sm">
                    Every modern dunker owes something to Dr. J. He proved that dunking could be both 
                    powerful and beautiful, athletic and artistic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Height Defiers */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Spud Webb & Nate Robinson - Overcoming Height with Heart</h2>
              <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">INSPIRATION</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Spud Webb (5'7") - The Original Giant Killer:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">1986 Slam Dunk Contest Victory</h4>
                    <p className="text-green-700 text-sm">
                      At 5'7", Webb shocked the world by winning the NBA Slam Dunk Contest, proving that 
                      heart and extraordinary leaping ability could overcome any height disadvantage.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">His Secret Weapons:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Estimated 42+ inch vertical jump</li>
                      <li>• Perfect technique and timing</li>
                      <li>• Fearless approach to the rim</li>
                      <li>• Incredible explosiveness and speed</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nate Robinson (5'9") - Three-Time Champion:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">2006, 2009, 2010 Dunk Contest Wins</h4>
                    <p className="text-purple-700 text-sm">
                      Robinson became the first three-time slam dunk contest winner, using creativity, 
                      athleticism, and showmanship to overcome taller competitors.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Signature Moments:</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Jumping over Dwight Howard (6'11")</li>
                      <li>• "Kryptonite" themed dunks</li>
                      <li>• Creative use of props and costumes</li>
                      <li>• Incredible consistency under pressure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">The Inspiration Factor:</h3>
              <p className="text-yellow-700 mb-4">
                Both Webb and Robinson proved that with exceptional vertical jump ability, perfect technique, and 
                unwavering confidence, height becomes just a number. Their success inspired countless shorter athletes 
                to pursue their dunking dreams.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">What They Teach Us:</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Vertical jump trumps height in many situations</li>
                    <li>• Perfect technique can maximize your potential</li>
                    <li>• Confidence and fearlessness are crucial</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Keys to Their Success:</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Exceptional training and conditioning</li>
                    <li>• Study of technique and biomechanics</li>
                    <li>• Mental toughness and preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Common Traits */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Traits and "Secrets" of Great Dunkers</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Physical Attributes:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Exceptional Raw Athleticism</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Extraordinary vertical leap (35+ inches typically)</li>
                      <li>• Lightning-fast first step and acceleration</li>
                      <li>• Superior body control and coordination</li>
                      <li>• Optimal strength-to-weight ratio</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Physical Tools</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Strong core and hip flexors for body control</li>
                      <li>• Excellent proprioception and spatial awareness</li>
                      <li>• Superior flexibility, especially in hips and ankles</li>
                      <li>• Large hands or exceptional grip strength</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mental & Character Traits:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Psychological Advantages</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Fearlessness and willingness to take risks</li>
                      <li>• Supreme confidence in their abilities</li>
                      <li>• Competitive drive and clutch gene</li>
                      <li>• Creative vision and artistic expression</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Work Ethic & Preparation</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Relentless practice and technique refinement</li>
                      <li>• Study of biomechanics and physics</li>
                      <li>• Dedication to strength and conditioning</li>
                      <li>• Mental visualization and preparation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Separates Legends from Good Dunkers:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Innovation</h4>
                  <p className="text-orange-700 text-sm">
                    Legends create new moves and push boundaries rather than just copying existing dunks.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Consistency</h4>
                  <p className="text-yellow-700 text-sm">
                    Great dunkers perform under pressure and deliver spectacular dunks consistently.
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Impact</h4>
                  <p className="text-indigo-700 text-sm">
                    Legendary dunkers change the culture and inspire others to reach new heights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What to Learn */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Can Aspiring Dunkers Learn from These Legends?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Lessons:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Master the Fundamentals First</h4>
                    <p className="text-blue-700 text-sm">
                      Every legend started with basic one and two-handed dunks. Perfect your approach, 
                      takeoff, and timing before attempting advanced moves.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Develop Your Unique Style</h4>
                    <p className="text-green-700 text-sm">
                      Don't just copy others. Study the legends to understand principles, then develop 
                      your own signature moves and personal flair.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Perfect Your Timing</h4>
                    <p className="text-purple-700 text-sm">
                      Great dunkers have impeccable timing. Practice your approach and takeoff until 
                      it becomes second nature.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mental Approach:</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Embrace Fearlessness</h4>
                    <p className="text-orange-700 text-sm">
                      All great dunkers overcome fear of failure, injury, or embarrassment. 
                      Confidence is as important as physical ability.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Dedication to Improvement</h4>
                    <p className="text-red-700 text-sm">
                      Legends are made through countless hours of practice, strength training, 
                      and technique refinement. There are no shortcuts.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Study and Visualize</h4>
                    <p className="text-yellow-700 text-sm">
                      Watch footage of great dunkers, analyze their techniques, and mentally 
                      rehearse your own dunks before attempting them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Remember: Every Legend Started Somewhere</h3>
              <p className="text-gray-600">
                Michael Jordan was cut from his high school basketball team. Vince Carter developed his dunking through years 
                of practice and conditioning. Dr. J honed his craft in smaller leagues before becoming an icon. 
                Your journey to becoming a great dunker starts with the first rim you touch and the first dunk you attempt.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Start Your Own Legendary Journey!</h2>
            <p className="text-xl mb-6">
              Every great dunker started with a dream and took the first step. Use our tools and training to begin your path to dunking greatness.
            </p>
            <div className="space-x-4">
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Target className="w-5 h-5 mr-2" />
                Calculate Your Potential
              </Link>
              <Link 
                to="/dunking-skills/types-of-dunks"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Study Dunk Types →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamousDunkers;
