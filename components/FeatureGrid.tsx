
import React from 'react';
import { ICONS } from '../constants';

const FEATURES = [
  { 
    id: 1, 
    icon: <ICONS.Truck className="w-8 h-8" />, 
    title: 'უფასო მიწოდება', 
    desc: 'თბილისის მასშტაბით' 
  },
  { 
    id: 2, 
    icon: <ICONS.Shield className="w-8 h-8" />, 
    title: '10 წლიანი გარანტია', 
    desc: 'ამერიკული ხარისხი' 
  },
  { 
    id: 3, 
    icon: <ICONS.Layers className="w-8 h-8" />, 
    title: 'პრემიუმ მასალები', 
    desc: 'ინოვაციური მასალები' 
  },
  { 
    id: 4, 
    icon: <div className="p-1 border-2 border-current rounded-full"><ICONS.Star className="w-6 h-6" /></div>, 
    title: 'ენდობა მილიონობით', 
    desc: 'მსოფლიო ბრენდი' 
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {FEATURES.map((feature) => (
        <div key={feature.id} className="bg-[#fcfcfc] border border-gray-50 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white hover:shadow-md transition-all cursor-default">
          <div className="text-[#002855] opacity-80 group-hover:opacity-100 transition-opacity">
            {feature.icon}
          </div>
          <div>
            <h4 className="font-bold text-[#002855] text-sm whitespace-nowrap">{feature.title}</h4>
            <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
