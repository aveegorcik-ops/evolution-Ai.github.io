export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: 'foundations' | 'growth' | 'winter' | 'boom' | 'modern';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  year: number;
}
