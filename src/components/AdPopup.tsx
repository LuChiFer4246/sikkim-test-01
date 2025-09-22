import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
export function AdPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking the Day Package for ₹799!");
    window.open(`https://wa.me/+918904704234?text=${message}`, '_blank');
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      
    </Dialog>;
}