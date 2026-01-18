
import { Service, GalleryItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'starter',
    title: 'Starter Locs',
    description: 'Begin your journey with professional sections and methods tailored to your hair texture.',
    price: 'From $150',
    duration: '3-4 hours',
    image: 'https://picsum.photos/seed/locs1/600/400'
  },
  {
    id: 'retwist',
    title: 'Maintenance & Retwist',
    description: 'Keep your locs neat and healthy with our signature palm-rolling or interlocking techniques.',
    price: '$85 - $120',
    duration: '2 hours',
    image: 'https://picsum.photos/seed/locs2/600/400'
  },
  {
    id: 'repair',
    title: 'Loc Repair & Reconstruction',
    description: 'Saving thinning locs and reattaching fallen ones with seamless crochet methods.',
    price: 'Consultation required',
    duration: 'Varies',
    image: 'https://picsum.photos/seed/locs3/600/400'
  },
  {
    id: 'detox',
    title: 'ACV Herbal Detox',
    description: 'Deep cleansing to remove buildup, lint, and residue for refreshed, lightweight locs.',
    price: '$45',
    duration: '45 mins',
    image: 'https://picsum.photos/seed/locs4/600/400'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', url: 'https://picsum.photos/seed/g1/800/800', category: 'Traditional', description: 'Mature traditional locs' },
  { id: '2', url: 'https://picsum.photos/seed/g2/800/800', category: 'Styling', description: 'Updo for special occasion' },
  { id: '3', url: 'https://picsum.photos/seed/g3/800/800', category: 'Sisterlocks', description: 'Micro-loc installation' },
  { id: '4', url: 'https://picsum.photos/seed/g4/800/800', category: 'Color', description: 'Ombre blonde tips' },
  { id: '5', url: 'https://picsum.photos/seed/g5/800/800', category: 'Freeform', description: 'Natural freeform growth' },
  { id: '6', url: 'https://picsum.photos/seed/g6/800/800', category: 'Starter', description: 'Two-strand twist starters' },
];
