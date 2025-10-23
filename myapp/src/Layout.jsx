import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* This is your shared header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-10 py-3">
          <Link to="/" className="flex items-center gap-4 text-[#111518]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">Signora</h2>
          </Link>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link to="/" className="text-[#111518] text-sm font-medium leading-normal">
                Home
              </Link>
            </div>
            <Link
              to="/profile"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f3f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Profile</span>
            </Link>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWe8VJfSudkc_2SiOgz9owvMgMCoEPrxnFUJRgeSwgyKGCz15ec-8Oi6k5rQhAgQ2yYIOOp93OvWy3qwEnQxKav1K_hSPWQDZ1AgbJf60jAMBX1ZUHONOpTUVBqD5CmMY7azxUfJtlYEZfLo9qTfm2WpV9U0xDlG-zU-7zN-H-bDShkt8MOj7Gvo1-8FzD4GPPbda4nbkdNMXAzM9bK_6N6DYKz__Xl643KHPOuUPh_lMCRe3Wn-ZEMOCAh-4a3x-SL9o1BSn-Oa0")' }}
            ></div>
          </div>
        </header>

        {/* This Outlet renders the current page's content */}
        <Outlet />
        
      </div>
    </div>
  );
}

export default Layout;