export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechFlow Inc.',
    content: 'ADmyBRAND AI Suite transformed our marketing campaigns. We saw a 300% increase in ROI within the first quarter. The AI automation is incredible!',
    rating: 5,
    avatar: '/avatars/sarah.jpg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'GrowthStart',
    content: 'The real-time optimization feature alone paid for itself. Our ad spend efficiency improved by 150% while maintaining the same conversion rates.',
    rating: 5,
    avatar: '/avatars/michael.jpg'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Digital Marketing Manager',
    company: 'E-commerce Plus',
    content: 'Finally, a tool that actually understands our business needs. The audience targeting is spot-on and the analytics are incredibly detailed.',
    rating: 5,
    avatar: '/avatars/emily.jpg'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'VP of Marketing',
    company: 'ScaleUp Solutions',
    content: 'We tried many marketing tools before, but ADmyBRAND is the first one that truly delivers on its promises. Our team productivity increased by 200%.',
    rating: 5,
    avatar: '/avatars/david.jpg'
  }
] 