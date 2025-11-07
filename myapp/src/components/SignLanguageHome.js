import React from 'react';
import { Link } from 'react-router-dom'; // Keep this import!

function SignLanguageHome() {
  return (
    // We remove the outer <div> and <header>...
    // The <main> content starts here:
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Sign Language Basics
          </p>
        </div>
        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Greetings
        </h3>
        {/* ... (rest of your Greetings grid) ... */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* --- Added Link wrapper here --- */}
          <Link to="/Hello" className="flex flex-1">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF5GhFzMZde_vflC4wB32XprwOG_aR6p6hyauOGN45mx3l9wO403e-YOm1Ac7-qoN4OgrJkByOt5gbWspGv555PvtQ6fh8F-m9IAlkz_V0gpR_oz0eQ5Al9nfUD7AFZ8IPibJW9J4OV123ZhXnqeUBZvjSLhiftw3Eo4N--5cS8i4jXIScGtpwXTY3tRywpfFscZX7ZcEHRzbiRLUq3dEM4vnGyPr3T0kp_BnZ0YnPNlORozBNaxlx71uAF8S0kDn4gleoyGujy0k")' }}></div>
              <h2 className="text-[#111518] text-base font-bold leading-tight">Hello</h2>
            </div>
          </Link>
          
          {/* ... other greetings ... */}

          {/* --- Added Link wrapper here --- */}
          <Link to="/Thankyou" className="flex flex-1">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrUOaWUll69YrQEeIqUd5I-rAd-74GvT2AEc4dNIU9mBbGzMY9PMJKjWjPgobLuO6g6sDm_Rm9MI2qh5CKW1vllIpUA2TvvdooKyXxEah9KscHqA92wQbXBkpnz4B_n0YZ4GAxBq-vFjBCNDFezheyaMC163a6EW1aeEQBgWNy0Xw7Ani-__b7FQViVh0REzTTqnJbwjGcaGWfVevwFl308dASh_PsdtJp3-ax5NGCBda9zeP51s7KxeEAyAFufLogQxqU52Y-NxA")' }}></div>
              <h2 className="text-[#111518] text-base font-bold leading-tight">Thank you</h2>
            </div>
          </Link>
        </div>

        <h3 className="text-[#1118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Alphabets (A-E)
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <Link to="/A" className="flex flex-1"> {/* Link is already correct! */}
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzxOhmnK-61ErbUDpjkFfyO8-DoIeodfTmaU4yIOqNWEUmIzdSv_zIe8_9SYaU8z89H17TezIIrW2YHP1QBBiMTg3CA2bsi2XggdUI7NirCMzY-AEQIWivXWvTJrqtsLXNKL2hhtvoy4ywvjwLERGIFOn__1pJ6HtbRL-ndkdAgN8TmtdNi0EPxsXp6EV58OrsNVOZOM0AHF0MUzqrn_2xzIbfL6qrQXJ0Cs2RSuWAcNBvOvQK0I2oPj6kwACrz2HWt1SHemqfv7M")'}}></div>
              <h2 className="text-[#1118] text-base font-bold leading-tight">A</h2>
            </div>
          </Link>
          <Link to="/B" className="flex flex-1">
             <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
               <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZJPgBo-HacvpwoN6WQNYnSGwVF0ztMqISjS22PgFXv3maAtiYb3QdgKWKVZbqoOGs_gy-cFbGtmyUkmlABKypmFJ-Y0LZTgdU0BER3PA20qQrAcK1wiCm9orWV_FL6V-cuBb2sro6tIpoogb4I72DaY9cfKhWcL3LJSITmbqiH8GykOrDbx201p2htGJu--kaDumNgBVkSMERRdlUHpdwZcmPh9MFJcPxhhTWFgJ9JZiX3YeHplvvE8Jkd64go1m4NsuUE2xNzVo")'}}></div>
               <h2 className="text-[#1118] text-base font-bold leading-tight">B</h2>
             </div>
           </Link>
           <Link to="/C" className="flex flex-1">
             <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
               <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBl2GtYmiVTnnvtfIo-mPtTegdX8h4HVBCz7mTF_hmKVdgE2WyqGhvPdDMj7L6fLzMtN574_0VhUC3b8-AIuvCDNviNfNhvv4vsSELuzMDbaAXalKvq1UltL36KX-qCDCy5VT7c8SztfqTzI_YXLDWhKaHSXkwI6CVoV9GYnzJS7Tmk1t1__cISzUzRz08MQoA_CVU8TSfvpX1v8bCNFugog3ZqKLYqIZ3ta39nalOuxGy5W9xFoRN8IrjbQVU3w_fsHtXOOute2fQ")'}}></div>
               <h2 className="text-[#1118] text-base font-bold leading-tight">C</h2>
             </div>
           </Link>
           <Link to="/D" className="flex flex-1">
             <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
               <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1k_abVv7Spxvyd7kIeMwpT1rKUqdZp0JV_Q_WEj9ArGhuc7A3iE7P0r8rA1oxyQDxGPneTVDf5C1ffzwxPj74XwI4mutznJP9B4GNncogfz1KhDqWjR_SEIjK8b2ZUVvs9hcsbf2dH2wP4LEi5QvxW6qVRQZ2pX36XE2sZqw8oN2jrwqV6hwNep5RvgBZBPEZugbOgszaLf8axqCwM8AqMjoaeACGrnZcIoIdn30_6fA2OVZD0myTUisi29culLUpnMqos56bgHk")'}}></div>
               <h2 className="text-[#1118] text-base font-bold leading-tight">D</h2>
             </div>
           </Link>
           <Link to="/E" className="flex flex-1">
             <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
               <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABTJ7X-ZYqpdcL1_uGF4FDGiYW0McNEFuoZ4YNe6xNax2mKOWeEEN28gnUYeO79CMgF6JGdESm_2qokQIPrN8pln3Nd6J3iAMG_52MvfreBzyPoVKqrI3e-p_JSN1T62NFlWz9aUeuqeabBNXQmIDYj2a9zpPGt4gds_qcAO3nwo9sGYwfoVcaPDxPJcxLl7CltF8uy2NRDfQMWmZ6fwzr1kgU7C5MW6Smqm_JKKLXftub2EZVRMhzKI8V52E8pHkH5wklQYqCUm4")'}}></div>
               <h2 className="text-[#1118] text-base font-bold leading.tight">E</h2>
             </div>
           </Link>
        </div>

        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Responses
        </h3>
        {/* ... (rest of your Responses grid) ... */}
 
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
           {/* --- Added Link wrapper here --- */}
           <Link to="/yes" className="flex flex-1">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByDblZXDG9ZpiMTpkLvg-_unAT7K5m1pLon2u9xRsf-XPptg8flsCO5rfvQuMYI1Qs-EcNRIVmdcImdIrQGg5roo8S36VBP-NbL42SrLoQPI1tc7K4axXWpS5goT8YgJ1xvOJcg09Y80Q-S0TL_46cirbMvoz3CkD8R8KX8eRZuI5fzwXDWXI91hZjt66H5o75au24GQjml4BnqsKIbGxfnm0kaR-opxmUoQOoTBAuF_W2m2HEeXcO1GMsoIUNjL8l8bQSnvSCBuw")'}}></div>
              <h2 className="text-[#111518] text-base font-bold leading-tight">Yes</h2>
            </div>
           </Link>

           {/* ... other responses ... */}

           {/* --- Added Link wrapper here --- */}
           <Link to="/DontKnow" className="flex flex-1">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtF4EXb2xokQI35zxYNCMSIaF1IHOl0zu7AVz42BymmUnVaIXbRhtpSbKGrzvy407vm1wQVvYqAp4t0WAqa5rj4IQy0ZlDHhTUslRqaAEZItD5GY7ot7XLjJbJdYAekT0SqInJNV5vr-HQYPqsxn2MQsHyngBWsJxB0VkJ-D8IWSEwg2lBY_2tbTYXcHkHg9_Gb4P5-HeaUrsBO1e7O7HuK84zri0ttkc5JmGHW0M2qZTw4OWwRNgSLH_Xv31CPAgOm3WT4h5uNBk")'}}></div>
              <h2 className="text-[#111518] text-base font-bold leading-tight">I don't know</h2>
            </div>
           </Link>
         </div>
      </div>
    </div>
  );
}

export default SignLanguageHome;