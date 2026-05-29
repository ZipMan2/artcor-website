export type Category = 'Indywidualne' | 'Koncepty' | 'Komercyjne'

export const CATEGORIES: Category[] = ['Indywidualne', 'Koncepty', 'Komercyjne']

export const GALLERY: Record<Category, string[]> = {
  Indywidualne: [
    '/individual-1.jpg',
    '/individual-2.jpg',
    '/individual-3.jpg',
    '/individual-4.jpg',
    '/individual-5.jpg',
    '/individual-6.jpg',
    '/individual-7.jpeg',
    '/individual-8.jpeg',
    '/individual-9.jpeg',
    '/individual-10.jpeg',
    '/individual-11.jpeg',
    '/individual-12.jpeg',
  ],
  Koncepty: [
    '/concept-1.jpg',
    '/concept-2.jpg',
    '/concept-3.jpg',
    '/concept-4.jpg',
    '/concept-5.jpg',
    '/concept-6.jpg',
    '/concept-7.jpg',
    '/concept-8.jpg',
    '/concept-9.jpg',
  ],
  Komercyjne: [
    '/commercial-1.jpg',
    '/commercial-2.jpg',
    '/commercial-3.jpg',
    '/commercial-4.jpg',
    '/commercial-5.jpg',
    '/commercial-6.jpg',
    '/commercial-7.jpeg',
    '/commercial-8.jpeg',
    '/commercial-9.jpg',
    '/commercial-10.jpg',
  ],
}