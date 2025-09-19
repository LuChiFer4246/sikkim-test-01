import React from 'react';
import { cn } from '@/lib/utils';
const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+918277385225'; // Updated to use the specified number
  const message = encodeURIComponent("Hi! I'm interested in booking an adventure at Dandeli.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return <div></div>;
};
export default WhatsAppButton;