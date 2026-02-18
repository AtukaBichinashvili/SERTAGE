
import React from 'react';
import { ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          <div className="space-y-6">
            <div className="inline-block bg-[#002855] text-white px-6 py-3 rounded">
              <span className="text-2xl font-bold tracking-tight italic">Serta</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              მატრასების ინოვაციების ლიდერი 90 წელზე მეტია. კომფორტი და ხარისხი, რომელსაც ენდობით.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">მაღაზია</h5>
            <ul className="space-y-4">
              <li><button className="text-sm font-bold text-[#002855] hover:opacity-70 transition-opacity">ყველა მატრასი</button></li>
              <li><button className="text-sm font-bold text-[#002855] hover:opacity-70 transition-opacity">ჰიბრიდული მოდელები</button></li>
              <li><button className="text-sm font-bold text-[#002855] hover:opacity-70 transition-opacity">მეხსიერების ქაფი</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">მხარდაჭერა</h5>
            <ul className="space-y-4">
              <li><button className="text-sm font-bold text-[#002855] hover:opacity-70 transition-opacity">გარანტია</button></li>
              <li><button className="text-sm font-bold text-[#002855] hover:opacity-70 transition-opacity">მიწოდება და დაბრუნება</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">კონტაქტი</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#002855]">
                <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="font-bold text-sm">+995 555 123 456</span>
              </div>
              <p className="text-gray-400 text-sm pl-11">info@serta.ge</p>
              <div className="flex items-center gap-3 text-gray-300 pt-4 cursor-pointer hover:text-gray-400 transition-colors">
                 <div className="w-5 h-5 flex items-center justify-center">
                    <ICONS.Warranty className="w-4 h-4" />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">ადმინ პანელი</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          <p>© 2024 SERTA GEORGIA. ყველა უფლება დაცულია.</p>
          <div className="flex gap-12">
            <button className="hover:text-[#002855] transition-colors">Facebook</button>
            <button className="hover:text-[#002855] transition-colors">Instagram</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
