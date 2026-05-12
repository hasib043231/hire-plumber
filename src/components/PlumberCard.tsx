import { CheckCircle, Clock, MapPin, Star } from 'lucide-react';
import { PlumberProfile } from '../types';

interface PlumberCardProps {
  profile: PlumberProfile;
  onBook: () => void;
}

export default function PlumberCard({ profile, onBook }: PlumberCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-32 h-32 md:h-auto bg-slate-100">
          <img 
            src={profile.imageUrl} 
            alt={profile.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-4 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">{profile.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{profile.specialty}</p>
            </div>
            <div className="bg-blue-50 px-2 py-1 rounded flex items-center gap-1">
              <Star size={14} className="fill-blue-600 text-blue-600" />
              <span className="text-xs font-bold text-blue-800">{profile.rating}</span>
            </div>
          </div>
          
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{profile.experience} Exp</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle size={14} />
              <span>{profile.reviews} reviews</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-slate-900">{profile.baseRate}<span className="text-xs font-normal text-slate-500">/hr</span></span>
            <button 
              onClick={onBook}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
