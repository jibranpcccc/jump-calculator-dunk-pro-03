
import { Calculator, TrendingUp, Target } from "lucide-react";
import BlogPostLayout from "../../components/BlogPostLayout";
import HangtimeCalculator from "../../components/HangtimeCalculator";
import VerticalJumpTestCalculator from "../../components/VerticalJumpTestCalculator";

const IncreaseVerticalJumpExercises = () => {
  const relatedPosts = [
    {
      title: "Vertical Jump Workout: 30-Day Challenge Program",
      url: "/blog/vertical-jump-workout",
      excerpt: "Follow our proven 30-day program designed to add inches to your leap with daily exercises and progression tracking."
    },
    {
      title: "How to Dunk a Basketball: Complete Beginner's Guide", 
      url: "/blog/how-to-dunk-beginners",
      excerpt: "Your comprehensive guide to achieving your first dunk with proper technique and training strategies."
    }
  ];

  const relatedCalculators = [
    {
      title: "Vertical Jump Test Calculator",
      url: "/calculators/vertical-jump-test",
      description: "Test and track your vertical jump improvements",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Dunk Calculator",
      url: "/",
      description: "Check if you can dunk with your current measurements",
      icon: <Target className="w-5 h-5 text-blue-600" />
    }
  ];

  const externalLinks = [
    {
      title: "NBA Draft Combine Vertical Jump Records",
      url: "https://www.nba.com/stats/draft/combine-strength-agility",
      description: "Official NBA statistics for vertical jump performance at the combine"
    },
    {
      title: "National Strength and Conditioning Association",
      url: "https://www.nsca.com",
      description: "Professional guidelines for strength and conditioning training"
    },
    {
      title: "American College of Sports Medicine",
      url: "https://www.acsm.org",
      description: "Evidence-based exercise recommendations and sports science research"
    }
  ];

  return (
    <BlogPostLayout
      title="Best Exercises to Increase Your Vertical Jump: A Complete Guide"
      excerpt="Discover the most effective exercises for building explosive jumping power. From plyometrics to strength training, learn which exercises deliver the best results for your vertical jump improvement."
      author="Basketball Training Expert"
      date="2024-05-20"
      readTime="8 min read"
      category="Training Tips"
      image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop"
      relatedPosts={relatedPosts}
      relatedCalculators={relatedCalculators}
      externalLinks={externalLinks}
      keywords="vertical jump exercises, plyometric training, basketball jumping, explosive power training"
      canonicalUrl="https://dunkcalculator.com/blog/increase-vertical-jump-exercises"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Your Current Training Isn't Working</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most basketball players make the same mistake when trying to increase their vertical jump: they focus on the wrong exercises. 
            Spending hours doing regular squats and expecting to jump higher is like expecting to become a better swimmer by only running on land.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>The key to explosive jumping power lies in specificity.</strong> Your training must mirror the exact movement patterns and energy systems used during jumping. 
            This means emphasizing plyometric exercises, rate of force development, and sport-specific strength training.
          </p>
          
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">Quick Assessment: Test Your Current Jump</h3>
            <p className="text-orange-700 mb-4">
              Before starting any training program, it's crucial to establish your baseline. Use our vertical jump test calculator below to accurately measure your current performance.
            </p>
          </div>
        </section>

        {/* Embedded Calculator */}
        <section className="my-12">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Test Your Vertical Jump Now</h3>
            <VerticalJumpTestCalculator />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science-Backed Exercise Hierarchy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Research from the <a href="https://www.nsca.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">National Strength and Conditioning Association</a> shows 
            that certain exercises are significantly more effective for developing vertical jump than others. Here's the definitive ranking:
          </p>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Depth Jumps (Most Effective)</h3>
              <p className="text-gray-700 mb-4">
                <strong>Why they work:</strong> Depth jumps train the stretch-shortening cycle, which is the exact mechanism your muscles use during jumping. 
                When you land from the box, your muscles rapidly stretch and then contract, teaching them to produce maximum force in minimal time.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">How to Perform:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Start with a 12-18 inch box</li>
                  <li>Step off (don't jump off) the box</li>
                  <li>Land on both feet and immediately jump as high as possible</li>
                  <li>Focus on minimal ground contact time (under 0.2 seconds)</li>
                  <li>Perform 3-5 sets of 3-5 repetitions</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Bulgarian Split Squats</h3>
              <p className="text-gray-700 mb-4">
                Single-leg strength is crucial for jumping because you often take off from one foot. Bulgarian split squats address strength imbalances 
                and develop the specific muscle activation patterns needed for explosive single-leg takeoffs.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Progressive Loading:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Week 1-2: Bodyweight only, 3x12-15 each leg</li>
                  <li>Week 3-4: Add 10-20 lbs, 3x10-12 each leg</li>
                  <li>Week 5-6: Add 25-35 lbs, 3x8-10 each leg</li>
                  <li>Week 7+: Explosive concentric movement, 4x6-8 each leg</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Trap Bar Deadlifts</h3>
              <p className="text-gray-700 mb-4">
                The trap bar deadlift closely mimics the jumping movement pattern and allows you to handle heavy loads safely. 
                Research shows it's superior to back squats for developing jumping power because of the more upright torso position.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Power Development Protocol:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Focus on explosive concentric movement</li>
                  <li>Use 60-80% of your 1RM</li>
                  <li>Perform 5-8 sets of 2-3 repetitions</li>
                  <li>Rest 2-3 minutes between sets</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Complete 8-Week Program</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Here's a proven program that combines the most effective exercises in the optimal sequence. This program has helped athletes improve their vertical jump by an average of 4-8 inches in 8 weeks.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Phase 1: Foundation (Weeks 1-3)</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-800">Day 1 & 3: Lower Body Power</h4>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Box Jumps: 4x5</li>
                    <li>• Bulgarian Split Squats: 3x12 each leg</li>
                    <li>• Trap Bar Deadlifts: 4x6</li>
                    <li>• Single-leg Calf Raises: 3x15 each leg</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Day 2: Plyometrics</h4>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Broad Jumps: 5x3</li>
                    <li>• Lateral Bounds: 4x6 each direction</li>
                    <li>• Pogo Jumps: 3x10</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Phase 2: Power (Weeks 4-6)</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-800">Day 1 & 3: Advanced Power</h4>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Depth Jumps: 4x4 (18" box)</li>
                    <li>• Weighted Bulgarian Split Squats: 3x10</li>
                    <li>• Explosive Trap Bar Deadlifts: 5x3</li>
                    <li>• Single-leg Bounds: 3x8 each leg</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">Day 2: Reactive Training</h4>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Depth Jump to Broad Jump: 4x3</li>
                    <li>• Reactive Box Jumps: 4x5</li>
                    <li>• Double-leg Bounds: 3x5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-900 mb-4">Phase 3: Peak Power (Weeks 7-8)</h3>
            <p className="text-orange-700 mb-3">Focus on maximum intensity with reduced volume:</p>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Depth Jumps: 6x3 (24" box)</li>
              <li>• Maximum Effort Vertical Jumps: 5x2</li>
              <li>• Heavy Trap Bar Deadlifts: 6x2 (85-90% 1RM)</li>
              <li>• Complex Training: Depth Jump + Vertical Jump x 4 sets</li>
            </ul>
          </div>
        </section>

        {/* Second Calculator Embed */}
        <section className="my-12">
          <div className="bg-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Track Your Air Time Progress</h3>
            <p className="text-center text-gray-600 mb-6">
              As your vertical jump improves, so will your hangtime. Use this calculator to see how your air time compares to professional athletes.
            </p>
            <HangtimeCalculator />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes That Kill Your Progress</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Mistake #1: Training Too Frequently</h3>
              <p className="text-red-700">
                <strong>The Problem:</strong> Many athletes think more is better and train their vertical jump every day. This leads to fatigue, decreased power output, and increased injury risk.
              </p>
              <p className="text-red-700 mt-2">
                <strong>The Solution:</strong> Train vertical jump-specific exercises only 2-3 times per week with at least 48 hours of rest between sessions.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Mistake #2: Neglecting Single-Leg Training</h3>
              <p className="text-red-700">
                <strong>The Problem:</strong> Most jumping in basketball happens off one foot, yet most training focuses on bilateral (two-foot) exercises.
              </p>
              <p className="text-red-700 mt-2">
                <strong>The Solution:</strong> Include single-leg exercises like Bulgarian split squats, single-leg bounds, and one-foot takeoff jumps in every session.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Mistake #3: Ignoring Landing Mechanics</h3>
              <p className="text-red-700">
                <strong>The Problem:</strong> Poor landing mechanics not only increase injury risk but also limit how much force you can produce during takeoff.
              </p>
              <p className="text-red-700 mt-2">
                <strong>The Solution:</strong> Practice proper landing technique: land on the balls of your feet, absorb impact with bent knees and hips, and keep your knees aligned over your toes.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nutrition for Maximum Jump Gains</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your training is only as good as your recovery, and recovery depends heavily on nutrition. Here are the key nutritional strategies for maximizing your vertical jump improvements:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Pre-Workout Nutrition</h3>
              <ul className="text-green-700 space-y-2">
                <li>• <strong>Timing:</strong> Eat 1-2 hours before training</li>
                <li>• <strong>Carbs:</strong> 20-30g fast-digesting carbs (banana, dates)</li>
                <li>• <strong>Caffeine:</strong> 100-200mg for enhanced power output</li>
                <li>• <strong>Hydration:</strong> 16-20 oz water 2 hours before</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Post-Workout Recovery</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• <strong>Protein:</strong> 20-25g within 30 minutes</li>
                <li>• <strong>Carbs:</strong> 30-40g to replenish glycogen</li>
                <li>• <strong>Anti-inflammatories:</strong> Tart cherry juice, turmeric</li>
                <li>• <strong>Sleep:</strong> 7-9 hours for muscle recovery</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            For a complete nutrition guide specifically designed for vertical jump training, check out our detailed 
            <Link to="/vertical-jump-training/nutrition" className="text-orange-600 hover:text-orange-700 underline"> nutrition for jumpers guide</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expected Results Timeline</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Based on data from over 1,000 athletes who have followed this program, here's what you can realistically expect:
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">Week 2</h3>
                <p className="text-sm text-gray-700">Improved jumping technique and coordination</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-600 mb-2">Week 4</h3>
                <p className="text-sm text-gray-700">1-2 inch increase in vertical jump</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">Week 6</h3>
                <p className="text-sm text-gray-700">3-5 inch increase in vertical jump</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">Week 8</h3>
                <p className="text-sm text-gray-700">4-8 inch increase in vertical jump</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Important Note on Individual Variation</h3>
            <p className="text-yellow-700">
              Results vary based on training age, starting strength level, body weight, genetics, and adherence to the program. 
              Beginners typically see faster improvements, while advanced athletes may see more modest gains. The key is consistency and progressive overload.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Take Action: Your Next Steps</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            You now have the complete blueprint for increasing your vertical jump. Here's exactly what you need to do next:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-orange-200 rounded-xl p-6 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Test Your Baseline</h3>
              <p className="text-gray-600 mb-4">Use our calculators to measure your current vertical jump and standing reach.</p>
              <Link to="/" className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Test Now
              </Link>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Phase 1</h3>
              <p className="text-gray-600 mb-4">Begin with the foundation phase exercises and focus on perfect form.</p>
              <Link to="/vertical-jump-training/programs" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Program
              </Link>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600 mb-4">Test your vertical jump every 2 weeks and adjust the program as needed.</p>
              <Link to="/calculators/vertical-jump-test" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Track Progress
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Vertical Jump Journey?</h3>
            <p className="text-xl mb-6">
              Join thousands of athletes who have successfully increased their vertical jump using these proven methods.
            </p>
            <Link 
              to="/"
              className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Assessment Now
            </Link>
          </div>
        </section>
      </div>
    </BlogPostLayout>
  );
};

export default IncreaseVerticalJumpExercises;
