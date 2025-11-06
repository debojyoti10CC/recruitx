export interface MonitoringData {
  eyeTracking: 'good' | 'warning' | 'alert';
  faceVisibility: 'complete' | 'partial' | 'not_visible';
  faceCount: number;
}

export type UserProfile = 'normal_user' | 'user_distracted' | 'user_cheats' | 'user_technical_issues';

/**
 * Parameterized monitoring test sequences for different user behaviors
 * This allows for reproducible testing scenarios
 */
export const monitoringTestSequences: Record<UserProfile, MonitoringData[]> = {
  normal_user: [
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'warning', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'good', faceVisibility: 'partial', faceCount: 1 },
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'warning', faceVisibility: 'complete', faceCount: 1 }
  ],
  user_distracted: [
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'warning', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'alert', faceVisibility: 'partial', faceCount: 1 },
    { eyeTracking: 'alert', faceVisibility: 'not_visible', faceCount: 0 },
    { eyeTracking: 'warning', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'alert', faceVisibility: 'partial', faceCount: 1 },
    { eyeTracking: 'warning', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'alert', faceVisibility: 'not_visible', faceCount: 0 }
  ],
  user_cheats: [
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'alert', faceVisibility: 'complete', faceCount: 2 },
    { eyeTracking: 'warning', faceVisibility: 'partial', faceCount: 1 },
    { eyeTracking: 'alert', faceVisibility: 'complete', faceCount: 3 },
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'alert', faceVisibility: 'complete', faceCount: 2 },
    { eyeTracking: 'warning', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'alert', faceVisibility: 'complete', faceCount: 4 }
  ],
  user_technical_issues: [
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'good', faceVisibility: 'not_visible', faceCount: 0 },
    { eyeTracking: 'warning', faceVisibility: 'partial', faceCount: 1 },
    { eyeTracking: 'good', faceVisibility: 'not_visible', faceCount: 0 },
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 },
    { eyeTracking: 'warning', faceVisibility: 'not_visible', faceCount: 0 },
    { eyeTracking: 'good', faceVisibility: 'partial', faceCount: 1 },
    { eyeTracking: 'good', faceVisibility: 'complete', faceCount: 1 }
  ]
};

/**
 * Creates a parameterized monitoring function for testing
 * @param profile - The user behavior profile to simulate
 * @returns A function that returns monitoring data based on elapsed time
 */
export const createParameterizedMonitoringTest = (profile: UserProfile) => {
  const sequence = monitoringTestSequences[profile];
  
  return (elapsedTime: number): MonitoringData => {
    const sequenceIndex = Math.floor(elapsedTime / 5000) % sequence.length; // Change every 5 seconds
    return sequence[sequenceIndex];
  };
};