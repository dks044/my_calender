import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import logo from "../assets/images/calendar_21_2x.png";
import profile from "../assets/images/profile.jpg";

const Nav = () => {
  return (
    <nav className="h-16 px-4 py-2 bg-[#f8fafd]">
      <div className="flex justify-between items-center h-full">
        {/* 왼쪽 섹션 */}
        <section className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <div className="my-auto">
              <RxHamburgerMenu className="text-2xl" />
            </div>
            <img src={logo} alt="캘린더 로고" className="w-10 h-10" />
            <span className="text-xl font-semibold my-auto">캘린더</span>
          </div>

          <button className="px-7 py-3 border rounded-full hover:bg-gray-100 text-sm font-semibold my-auto">
            오늘
          </button>

          <div className="flex items-center gap-1">
            <IoIosArrowBack className="text-xl cursor-pointer" />
            <IoIosArrowForward className="text-xl cursor-pointer" />
          </div>

          <span className="ml-2 text-md font-medium text-gray-700">
            2025년 4월 – 5월
          </span>
        </section>

        {/* 오른쪽 섹션 */}
        <section className="flex items-center gap-4">
          <FiSearch className="text-xl cursor-pointer" />
          <FaRegQuestionCircle className="text-xl cursor-pointer" />
          <FiSettings className="text-xl cursor-pointer" />

          {/* 사용자 프로필 */}
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Nav;
