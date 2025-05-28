
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Calendar } from 'lucide-react';

interface ProgressEntry {
  date: string;
  verticalJump: number;
  standingReach: number;
  bodyWeight: number;
  notes: string;
}

const TrainingProgressTracker = () => {
  const [entries, setEntries] = useState<ProgressEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<ProgressEntry>({
    date: new Date().toISOString().split('T')[0],
    verticalJump: 0,
    standingReach: 0,
    bodyWeight: 0,
    notes: ''
  });

  const addEntry = () => {
    if (currentEntry.verticalJump > 0) {
      setEntries([...entries, { ...currentEntry }]);
      setCurrentEntry({
        date: new Date().toISOString().split('T')[0],
        verticalJump: 0,
        standingReach: 0,
        bodyWeight: 0,
        notes: ''
      });
    }
  };

  const getProgress = () => {
    if (entries.length < 2) return null;
    
    const latest = entries[entries.length - 1];
    const previous = entries[entries.length - 2];
    
    return {
      jumpImprovement: latest.verticalJump - previous.verticalJump,
      reachChange: latest.standingReach - previous.standingReach,
      weightChange: latest.bodyWeight - previous.bodyWeight
    };
  };

  const progress = getProgress();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <BarChart3 className="w-8 h-8 text-green-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Training Progress Tracker</h2>
          <p className="text-gray-600">Track your vertical jump improvement over time</p>
        </div>
      </div>

      {/* Add New Entry */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Measurement</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={currentEntry.date}
              onChange={(e) => setCurrentEntry({...currentEntry, date: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vertical Jump (inches)</label>
            <input
              type="number"
              value={currentEntry.verticalJump || ''}
              onChange={(e) => setCurrentEntry({...currentEntry, verticalJump: Number(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="e.g., 28"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Standing Reach (inches)</label>
            <input
              type="number"
              value={currentEntry.standingReach || ''}
              onChange={(e) => setCurrentEntry({...currentEntry, standingReach: Number(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="e.g., 95"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Body Weight (lbs)</label>
            <input
              type="number"
              value={currentEntry.bodyWeight || ''}
              onChange={(e) => setCurrentEntry({...currentEntry, bodyWeight: Number(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="e.g., 180"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
          <textarea
            value={currentEntry.notes}
            onChange={(e) => setCurrentEntry({...currentEntry, notes: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="Training notes, how you felt, etc."
            rows={2}
          />
        </div>
        <button
          onClick={addEntry}
          disabled={currentEntry.verticalJump <= 0}
          className="mt-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Add Entry
        </button>
      </div>

      {/* Progress Summary */}
      {progress && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Progress</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-sm text-blue-600 font-medium">Jump Change</p>
              <p className={`text-2xl font-bold ${progress.jumpImprovement >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {progress.jumpImprovement > 0 ? '+' : ''}{progress.jumpImprovement}"
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-sm text-purple-600 font-medium">Reach Change</p>
              <p className={`text-2xl font-bold ${progress.reachChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {progress.reachChange > 0 ? '+' : ''}{progress.reachChange}"
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <p className="text-sm text-orange-600 font-medium">Weight Change</p>
              <p className={`text-2xl font-bold ${progress.weightChange <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {progress.weightChange > 0 ? '+' : ''}{progress.weightChange} lbs
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Entries History */}
      {entries.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Training History</h3>
          <div className="space-y-3">
            {entries.slice(-5).reverse().map((entry, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="font-medium">{new Date(entry.date).toLocaleDateString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-blue-600">{entry.verticalJump}"</span>
                    <span className="text-sm text-gray-500 ml-1">jump</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>Standing Reach: {entry.standingReach}"</div>
                  <div>Weight: {entry.bodyWeight} lbs</div>
                </div>
                {entry.notes && (
                  <div className="mt-2 text-sm text-gray-700 italic">
                    "{entry.notes}"
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {entries.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Target className="w-12 h-12 mx-auto mb-4" />
          <p>Start tracking your progress by adding your first measurement above!</p>
        </div>
      )}
    </div>
  );
};

export default TrainingProgressTracker;
