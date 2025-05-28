
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Search, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");

  const glossaryTerms = {
    A: [
      {
        term: "Alley-Oop",
        definition: "A pass thrown near the basket to a teammate who jumps, catches the ball in mid-air, and dunks or lays it in before landing. Requires exceptional timing and coordination between teammates."
      },
      {
        term: "Amortization Phase",
        definition: "The brief transition phase in plyometrics between the eccentric (loading) and concentric (unloading/exploding) muscle action. Minimizing this phase is key to powerful jumps."
      },
      {
        term: "Ape Index",
        definition: "A measure of wingspan relative to height (Wingspan minus Height). A positive Ape Index means wingspan is greater than height, which typically benefits basketball players."
      },
      {
        term: "Athletic Position",
        definition: "A fundamental stance with feet shoulder-width apart, knees slightly bent, weight on balls of feet, and torso upright. The foundation for explosive movements."
      }
    ],
    B: [
      {
        term: "Biomechanics",
        definition: "The study of the mechanical laws relating to the movement or structure of living organisms. Applied to jumping to optimize technique and efficiency."
      },
      {
        term: "Box Jump",
        definition: "A plyometric exercise where one jumps from the floor onto an elevated box or platform. Develops explosive concentric power and confidence."
      },
      {
        term: "Broad Jump",
        definition: "A horizontal jumping test measuring explosive leg power and overall athleticism. Also called the standing long jump."
      }
    ],
    C: [
      {
        term: "Concentric Contraction",
        definition: "The muscle action where the muscle shortens as it generates force (e.g., the upward phase of a squat or jump). The 'power' phase of movement."
      },
      {
        term: "Core Stability",
        definition: "The ability to control the position and motion of the trunk, allowing for efficient force transfer between the lower and upper body during athletic movements."
      },
      {
        term: "Countermovement Jump",
        definition: "A vertical jump test where the athlete performs a quick downward movement before jumping up. More sport-specific than a static jump."
      },
      {
        term: "Creatine Monohydrate",
        definition: "A popular supplement known to enhance strength, power, and high-intensity exercise performance. Particularly effective for explosive activities like jumping."
      }
    ],
    D: [
      {
        term: "Depth Jump",
        definition: "An advanced plyometric exercise where one drops off a box, lands, and immediately explodes into a maximal vertical jump. Develops reactive strength."
      },
      {
        term: "Dorsiflexion (Ankle)",
        definition: "The movement of the top of the foot toward the shin. Essential for proper squatting and jumping mechanics, allowing deeper positions."
      },
      {
        term: "Dunk",
        definition: "A basketball shot where the player jumps high enough to put the ball directly through the hoop from above, often with force."
      }
    ],
    E: [
      {
        term: "Eccentric Contraction",
        definition: "The muscle action where the muscle lengthens under tension as it generates or resists force (e.g., the lowering phase of a squat, or landing from a jump)."
      },
      {
        term: "Explosive Power",
        definition: "The ability to generate maximum force in minimal time. Critical for vertical jumping and athletic performance."
      }
    ],
    F: [
      {
        term: "Fast-Twitch Muscle Fibers",
        definition: "Type II muscle fibers that contract quickly and powerfully but fatigue rapidly. Essential for explosive movements like jumping and sprinting."
      },
      {
        term: "Force-Velocity Curve",
        definition: "The relationship between the force a muscle can produce and the velocity of contraction. Training should address different points on this curve."
      }
    ],
    G: [
      {
        term: "Ground Contact Time",
        definition: "The duration your feet are in contact with the ground during jumping or running. Shorter contact times generally indicate better reactive strength."
      },
      {
        term: "Ground Reaction Force",
        definition: "The force exerted by the ground on a body in contact with it. In jumping, maximizing this force helps achieve greater height."
      }
    ],
    H: [
      {
        term: "Hang Time",
        definition: "The duration an athlete remains airborne during a jump. While often exaggerated, elite athletes can achieve 0.8-1.0 seconds of hang time."
      },
      {
        term: "Hip Flexors",
        definition: "Muscle groups responsible for lifting the thighs toward the abdomen. Critical for knee drive and maximum jump height."
      }
    ],
    I: [
      {
        term: "Impulse",
        definition: "The product of force and time. In jumping, generating impulse efficiently determines how high you can jump."
      },
      {
        term: "Isometric",
        definition: "Muscle contractions where the muscle generates force without changing length. Useful for building strength at specific joint angles."
      }
    ],
    J: [
      {
        term: "Jump Reach",
        definition: "The maximum height you can reach while jumping with one hand. Used to calculate vertical jump (Jump Reach minus Standing Reach)."
      },
      {
        term: "Jump Training",
        definition: "Systematic training designed to improve vertical jumping ability through strength, power, and technique development."
      }
    ],
    K: [
      {
        term: "Kinetic Chain",
        definition: "The interconnected system of body segments that work together to produce movement. Jumping requires efficient kinetic chain function."
      },
      {
        term: "Knee Valgus",
        definition: "Inward collapse of the knees during movement. A common fault that reduces jumping efficiency and increases injury risk."
      }
    ],
    L: [
      {
        term: "Linear Periodization",
        definition: "A training approach where intensity gradually increases while volume decreases over time. Common in strength and power development."
      },
      {
        term: "Load-Velocity Profile",
        definition: "The relationship between the load lifted and the velocity of movement. Different loads train different aspects of power."
      }
    ],
    M: [
      {
        term: "Maximal Vertical Jump",
        definition: "The highest vertical jump an athlete can achieve with unlimited approach and optimal conditions."
      },
      {
        term: "Motor Unit Recruitment",
        definition: "The process by which the nervous system activates muscle fibers. Training improves recruitment patterns for more powerful movements."
      }
    ],
    N: [
      {
        term: "Neural Drive",
        definition: "The ability of the nervous system to activate muscles maximally and coordinate movement patterns efficiently."
      },
      {
        term: "No-Step Vertical",
        definition: "A vertical jump test performed without any horizontal approach steps. Tests pure vertical power without momentum."
      }
    ],
    O: [
      {
        term: "Olympic Lifts",
        definition: "Weightlifting movements (clean, jerk, snatch) that develop explosive power and full-body coordination. Excellent for jump training."
      },
      {
        term: "Overreaching",
        definition: "Short-term excessive training that leads to temporary performance decline. Different from overtraining syndrome."
      }
    ],
    P: [
      {
        term: "Periodization",
        definition: "The systematic planning of athletic training. It involves progressive cycling of various aspects of a training program over specific periods."
      },
      {
        term: "Plyometrics",
        definition: "Exercises involving rapid stretching and contracting of muscles (the stretch-shortening cycle) designed to increase muscular power and explosiveness."
      },
      {
        term: "Progressive Overload",
        definition: "The gradual increase of stress placed upon the body during exercise training to elicit continued adaptation and improvement."
      },
      {
        term: "Power",
        definition: "The rate of doing work, calculated as Force × Velocity. Essential for explosive athletic movements like jumping."
      }
    ],
    Q: [
      {
        term: "Quadriceps",
        definition: "The four-muscle group on the front of the thigh responsible for knee extension. Primary movers in jumping."
      },
      {
        term: "Quick Feet",
        definition: "The ability to move feet rapidly and precisely. Important for optimal positioning before takeoff."
      }
    ],
    R: [
      {
        term: "Rate of Force Development (RFD)",
        definition: "How quickly an athlete can generate force. Crucial for explosive movements like jumping. Measured as the slope of the force-time curve."
      },
      {
        term: "Reactive Strength",
        definition: "The ability to quickly switch from eccentric to concentric muscle action. Essential for plyometric exercises and athletic performance."
      },
      {
        term: "Rim Height",
        definition: "The official height of a basketball rim: 10 feet (120 inches) above the floor in standard play."
      }
    ],
    S: [
      {
        term: "Standing Reach",
        definition: "The maximum height a person can reach with one hand while standing flat-footed, without jumping. Critical measurement for determining dunk potential."
      },
      {
        term: "Stretch-Shortening Cycle (SSC)",
        definition: "An active stretch (eccentric contraction) of a muscle followed by an immediate shortening (concentric contraction) of that same muscle. The basis of plyometric exercises."
      },
      {
        term: "Slam Dunk",
        definition: "A forceful dunk where the ball is thrown down through the hoop with significant power, often bending the rim."
      }
    ],
    T: [
      {
        term: "Takeoff",
        definition: "The phase of jumping where the athlete leaves the ground. Critical for determining jump height and success."
      },
      {
        term: "Triple Extension",
        definition: "Simultaneous extension of the ankle, knee, and hip joints. The key movement pattern for powerful jumping."
      },
      {
        term: "Two-Foot Takeoff",
        definition: "Jumping technique where both feet leave the ground simultaneously. Often used by power jumpers and bigger athletes."
      }
    ],
    U: [
      {
        term: "Unilateral Training",
        definition: "Training one limb at a time. Important for addressing imbalances and developing single-leg strength for jumping."
      },
      {
        term: "Upper Body Power",
        definition: "Explosive strength in the arms, shoulders, and core. Contributes to jumping through arm swing mechanics."
      }
    ],
    V: [
      {
        term: "Vertical Jump",
        definition: "The act of jumping upwards into the air. Measured as the difference between standing reach and jump reach."
      },
      {
        term: "VO2 Max",
        definition: "Maximum oxygen uptake. While not directly related to jumping, good aerobic fitness supports recovery between jump training sessions."
      }
    ],
    W: [
      {
        term: "Wingspan",
        definition: "The distance from fingertip to fingertip when an individual's arms are extended horizontally to the sides. Important for basketball players."
      },
      {
        term: "Work Capacity",
        definition: "The ability to perform and recover from training. Essential for high-volume jump training phases."
      }
    ],
    X: [
      {
        term: "X-Factor",
        definition: "Individual attributes that set elite jumpers apart, such as exceptional limb lengths, muscle fiber composition, or neural efficiency."
      }
    ],
    Y: [
      {
        term: "Yielding Isometric",
        definition: "A type of eccentric exercise where the muscle lengthens under load. Useful for building strength and control."
      }
    ],
    Z: [
      {
        term: "Zone Training",
        definition: "Training within specific intensity ranges to target different energy systems and adaptations."
      }
    ]
  };

  const alphabet = Object.keys(glossaryTerms).sort();

  const filteredTerms = searchTerm 
    ? Object.values(glossaryTerms).flat().filter(item =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : glossaryTerms[selectedLetter] || [];

  return (
    <>
      <Helmet>
        <title>Basketball & Vertical Jump Glossary | Dunking Terms Explained A-Z</title>
        <meta name="description" content="Understand common basketball, vertical jump, strength training, and dunking terminology with our comprehensive A-Z glossary. From 'Plyometrics' to 'Wingspan.'" />
        <meta name="keywords" content="basketball glossary, vertical jump terms, dunking terminology, plyometrics definition, athletic training vocabulary" />
        <link rel="canonical" href="https://dunkcalculator.com/glossary/" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation />

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Glossary of Dunking & Vertical Jump Terminology
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the language of vertical jump training and dunking with our comprehensive A-Z glossary. 
              From basic terms to advanced concepts, understand every aspect of explosive athletic performance.
            </p>
          </div>

          {/* Search and Navigation */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search terms or definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Alphabet Navigation */}
            {!searchTerm && (
              <div className="flex flex-wrap gap-2 justify-center">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                      selectedLetter === letter
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Terms Display */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {searchTerm ? `Search Results for "${searchTerm}"` : `Terms Starting with "${selectedLetter}"`}
              </h2>
              <p className="text-gray-600 mt-2">
                {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredTerms.length > 0 ? (
              <div className="space-y-6">
                {filteredTerms.map((item, index) => (
                  <div key={index} className="border-l-4 border-orange-200 pl-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.term}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No terms found</h3>
                <p className="text-gray-600">
                  Try adjusting your search term or browse by letter above.
                </p>
              </div>
            )}
          </div>

          {/* Related Resources */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/vertical-jump-training"
                className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-2">
                  Training Guide
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn the science behind vertical jump training
                </p>
                <div className="flex items-center text-orange-600 text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>

              <Link
                to="/measurements"
                className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-2">
                  Measurement Guides
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Understand how to measure key attributes
                </p>
                <div className="flex items-center text-orange-600 text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>

              <Link
                to="/"
                className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-2">
                  Dunk Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Test your current dunking potential
                </p>
                <div className="flex items-center text-orange-600 text-sm">
                  Try Now <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Glossary;
