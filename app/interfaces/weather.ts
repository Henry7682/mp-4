export interface Weather {
    datetime: string; // e.g., "2024-03-24"
    conditions: string; // e.g., "Partially cloudy"
    description: string; // Detailed description, e.g., "Partly cloudy throughout the day"
    tempmin: number; // Minimum temperature, e.g., 27.2
    tempmax: number; // Maximum temperature, e.g., 42.2
  }