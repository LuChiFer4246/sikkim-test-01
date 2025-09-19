import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Tag, Clock } from 'lucide-react';
interface OfferProps {
  title: string;
  description: string;
  promoCode: string;
  discount: string;
  validUntil: string;
  imageUrl: string;
  color: string;
}
const Offer: React.FC<OfferProps> = ({
  title,
  description,
  promoCode,
  discount,
  validUntil,
  imageUrl,
  color
}) => {
  return <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-opacity-100 to-opacity-0 p-3 rounded-bl-lg z-10" style={{
        background: `linear-gradient(to bottom left, ${color}, transparent)`
      }}>
          <div className="font-bold text-white text-lg">{discount}</div>
          <div className="text-white text-xs">OFF</div>
        </div>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3 pb-2">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1">
            <Tag size={14} className="text-muted-foreground" />
            <span>Code: <span className="font-mono font-medium">{promoCode}</span></span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-muted-foreground" />
            <span>Valid till: {validUntil}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/booking?promo=${promoCode}`}>Book This Offer</Link>
        </Button>
      </CardFooter>
    </Card>;
};
const SpecialOffers: React.FC = () => {
  return;
};
export default SpecialOffers;