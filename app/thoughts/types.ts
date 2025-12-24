export interface Thought {
  id: string;
  content: string;
  image_url?: string | null;
  created_at: string; // ISO 8601 format
}
