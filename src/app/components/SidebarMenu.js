import React from "react";
import Image from "next/image";
import Link from "next/link";

export const SidebarMenu = () => {
  return (
    <div>
      <div className="flex flex-col gap-[1rem]">
        <div className="logo-name-section pb-[2rem] border-b border-slate-300">
          <div className="flex items-center justify-center gap-[0.625rem]">
            <div className="logo-container w-[60px] h-[48px] bg-[#FFBF3F] rounded-[8px] flex items-center justify-center">
              <Image
                src="/logo.svg" // Path to your image
                alt="Description of tpxhe image"
                width={35} // Desired height of the image
                height={35}
                className=""
              />
            </div>
            <div className="name-container font-passion leading-none text-[2rem] font-bold">
              School Space
            </div>
          </div>
        </div>
        <div className="links-container flex flex-col font-montserrat text-[1rem] mt-[2.125rem]">
          <Link
            href="/"
            className="flex items-center justify-start gap-[1.25rem] hover:bg-[#2CA4D8] hover:font-bold hover:text-[#2CA4D8] hover:bg-opacity-10 hover:rounded-[10px] px-[.85rem] py-[11px]"
          >
            <Image
              src="/dashboard.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
            <p>Dashboard</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start gap-[1.25rem] hover:bg-[#2CA4D8] hover:font-bold hover:text-[#2CA4D8] hover:bg-opacity-10 hover:rounded-[10px] px-[.85rem] py-[11px]"
          >
            <Image
              src="/menulogo.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
            <p>Courses</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start gap-[1.25rem] bg-[#2CA4D8] font-bold text-[#2CA4D8] bg-opacity-10 rounded-[10px] px-[.85rem] py-[11px]"
          >
            <Image
              src="/students.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
            <p>Student</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start gap-[1.25rem] hover:bg-[#2CA4D8] hover:font-bold hover:text-[#2CA4D8] hover:bg-opacity-10 hover:rounded-[10px] px-[.85rem] py-[11px]"
          >
            <Image
              src="/exam.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
            <p>Exams</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start gap-[1.25rem] hover:bg-[#2CA4D8] hover:font-bold hover:text-[#2CA4D8] hover:bg-opacity-10 hover:rounded-[10px] px-[.85rem] py-[11px]"
          >
            <Image
              src="/result.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
            <p>Results</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start gap-[1.25rem] hover:bg-[#2CA4D8] hover:font-bold hover:text-[#2CA4D8] hover:bg-opacity-10 hover:rounded-[10px] px-[.85rem] py-[11px]"
          >
            <Image
              src="/black-board.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
            <p>Notice Board</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start gap-[1.25rem] hover:bg-[#2CA4D8] hover:font-bold hover:text-[#2CA4D8] hover:bg-opacity-10 hover:rounded-[10px] px-[.85rem] py-[11px]"
          >
            <Image
              src="/live-streaming.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
            <p>Live Classes</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-start gap-[1.25rem] hover:bg-[#2CA4D8] hover:font-bold hover:text-[#2CA4D8] hover:bg-opacity-10 hover:rounded-[10px] px-[.85rem] py-[11px]"
          >
            <Image
              src="/notification.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
            <p>Notifications</p>
          </Link>
          <div className="profile-container flex flex-col mt-[5rem] md:mt-[8rem] lg:mt-[13rem] xl:mt-[17 rem]">
            <div className="picture">
            <Image
              src="/Ellipse.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
              
            </div>
            <div className="name">
            Andy Samberg
            </div>
            <div className="email font-[#7F878A] text-[12px]">
            andy.samberg@gmail.com
            </div>
            <div className="button-container mt-[1rem] px-[1.5rem] py-[0.5rem] text-[12px] border border-[#2CA4D8] text-center text-[#2CA4D8] hover:bg-[#2CA4D8] hover:bg-opacity-85 hover:text-white rounded-[10px]">
              VIEW PROFILE
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
