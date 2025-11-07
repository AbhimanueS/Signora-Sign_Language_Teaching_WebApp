import React from 'react';

function ProfilePage() {
  return (
    <main className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        
        {/* --- Page Title --- */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Your Profile
          </p>
        </div>

        {/* --- Profile Card --- */}
        <div className="w-full max-w-lg flex flex-col items-center gap-6 rounded-xl border border-[#dce2e5] bg-white p-8 shadow-sm mx-auto mt-4">
          
          {/* Placeholder Avatar */}
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-[#dce2e5]">
            {/* You can replace this with an <img> tag */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#111518]">Akshay</h2>
            <p className="text-base text-gray-500 mt-1">aks@gmail.com</p>
          </div>

          
        </div>

        {/* --- Statistics Section --- */}
        <div className="w-full max-w-lg mx-auto mt-8">
          <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Learning Statistics
          </h3>
          <div className="grid grid-cols-2 gap-3 p-4">
            <div className="flex flex-col flex-1 gap-2 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
              <span className="text-3xl font-bold text-indigo-600">0</span>
              <span className="text-sm text-gray-600">Signs Learned</span>
            </div>
            <div className="flex flex-col flex-1 gap-2 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
              <span className="text-3xl font-bold text-indigo-600">0</span>
              <span className="text-sm text-gray-600">Lessons Completed</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default ProfilePage;