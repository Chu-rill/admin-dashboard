import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <div className="flex justify-between w-full py-[10px] px-[15px] bg-[#191e3a] shadow-md shadow-black absolute top-0">
      <RxHamburgerMenu className=" w-[33px] h-[33px]" />
      <div className=" flex w-[250px] justify-between items-center">
        <IoSearchOutline className=" w-[33px] h-[33px]" />
        {/* flag */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src="./ca.png" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="flex p-2 justify-between items-center">
                <img src="./de.png" alt="" />
                <p>Germany</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
              <div className="flex p-2 justify-between items-center w-full">
                <img src="./jp.png" alt="" />
                <p>Japanese</p>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem>
              {" "}
              <div className="flex p-2 justify-between items-center w-full">
                <img src="./fr.png" alt="" />
                <p>French</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <div className="flex p-2 justify-between items-center w-full">
                <img src="./ca.png" alt="" />
                <p>English</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* email */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span class="badge bg-[#2196f3] text-white absolute top-1">3</span>
            {/* <CiMail className=" w-[33px] h-[33px]" /> */}
          </DropdownMenuTrigger>
          {/* body */}
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <div className="flex p-2 justify-between items-center w-[230px] mb-2">
                  <div className=" bg-[#3b3f5c] rounded-md w-[50px] h-[50px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-message-square"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className=" text-[14px] font-semibold">
                      5 messages fof group
                    </p>
                    <p className=" text-[#888ea8]">Kelly,Amy,Shaun</p>
                    <p className=" text-[14px] font-semibold text-[#25d5e4]">
                      Yesterday
                    </p>
                  </div>
                </div>
                <p className=" w-full h-[1px] bg-gray-50"></p>
              </div>
            </DropdownMenuLabel>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <div className="flex flex-col">
                <div className="flex p-2 justify-between items-center w-[230px] mb-2">
                  <div className=" w-14 h-14 border border-gray-500 rounded-full flex justify-center items-center">
                    <h1>KY</h1>
                  </div>

                  <div className=" w-[150px]">
                    <p className=" text-[14px] font-semibold">Kara Young</p>
                    <p className=" text-[#888ea8]">
                      Some quick example text to build the notification ..
                    </p>
                    <p className=" text-[14px] font-semibold text-[#25d5e4]">
                      2 hours ago
                    </p>
                  </div>
                </div>
                <p className=" w-full h-[1px] bg-gray-50"></p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col">
                <div className="flex p-2 justify-between items-center w-[230px] mb-2">
                  <div className=" bg-[#3b3f5c] rounded-md w-[50px] h-[50px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className=" w-[150px]">
                    <p className=" text-[14px] font-semibold">1 new email</p>
                    <p className=" text-[#888ea8]">Anderson.Daisy@mail.com</p>
                    <p className=" text-[14px] font-semibold text-[#25d5e4]">
                      Yesterday
                    </p>
                  </div>
                </div>
                <p className=" w-full h-[1px] bg-gray-50"></p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* notification */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span class="badge bg-[#25d5e4] absolute top-1"></span>
          </DropdownMenuTrigger>
          {/* body */}
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <div className="flex p-2 justify-between items-center w-[230px] mb-2">
                  <div className="  w-[50px] h-[50px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-message-square"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#506690] text-[14px] font-semibold">
                      <span className=" text-[#e0e6ed] font-bold">
                        {" "}
                        Shaun Park
                      </span>{" "}
                      commented on your post.
                    </p>
                    <p className=" text-[#888ea8]">5 mins ago</p>
                  </div>
                </div>
                <p className=" w-full h-[1px] bg-gray-50"></p>
              </div>
            </DropdownMenuLabel>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <div className="flex flex-col">
                <div className="flex p-2 justify-between items-center w-[230px] mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-thumbs-up"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>

                  <div className=" w-[150px]">
                    <p className=" text-[14px] font-semibold">
                      <span className=" text-[#e0e6ed] font-bold mr-1">
                        Kelly Young
                      </span>
                      likes your photo
                    </p>

                    <p className=" text-[13px] font-semibold text-[#bfc9d4]">
                      8 mins ago
                    </p>
                  </div>
                </div>
                <p className=" w-full h-[1px] bg-gray-50"></p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col">
                <div className="flex p-2 justify-between items-center w-[230px] mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-send"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <div className=" w-[150px]">
                    <p className=" text-[14px] text-[#506690] font-semibold">
                      Invitation successfully sent to
                      <span className="text-[#e0e6ed] font-bold ml-1">
                        Amy Diaz
                      </span>
                    </p>

                    <p className=" text-[13px] font-semibold text-[#bfc9d4]">
                      10 mins ago
                    </p>
                  </div>
                </div>
                <p className=" w-full h-[1px] bg-gray-50"></p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* user */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span class="badge bg-[#25d5e4] absolute top-1"></span>
          </DropdownMenuTrigger>
          {/* body */}
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <div className="flex p-2 justify-between items-center w-[230px] mb-2">
                  <div className="  w-[50px] h-[50px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-message-square"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#506690] text-[14px] font-semibold">
                      <span className=" text-[#e0e6ed] font-bold">
                        {" "}
                        Shaun Park
                      </span>{" "}
                      commented on your post.
                    </p>
                    <p className=" text-[#888ea8]">5 mins ago</p>
                  </div>
                </div>
                <p className=" w-full h-[1px] bg-gray-50"></p>
              </div>
            </DropdownMenuLabel>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <div className="flex flex-col">
                <div className="flex p-2 justify-between items-center w-[230px] mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-thumbs-up"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>

                  <div className=" w-[150px]">
                    <p className=" text-[14px] font-semibold">
                      <span className=" text-[#e0e6ed] font-bold mr-1">
                        Kelly Young
                      </span>
                      likes your photo
                    </p>

                    <p className=" text-[13px] font-semibold text-[#bfc9d4]">
                      8 mins ago
                    </p>
                  </div>
                </div>
                <p className=" w-full h-[1px] bg-gray-50"></p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col">
                <div className="flex p-2 justify-between items-center w-[230px] mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-send"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <div className=" w-[150px]">
                    <p className=" text-[14px] text-[#506690] font-semibold">
                      Invitation successfully sent to
                      <span className="text-[#e0e6ed] font-bold ml-1">
                        Amy Diaz
                      </span>
                    </p>

                    <p className=" text-[13px] font-semibold text-[#bfc9d4]">
                      10 mins ago
                    </p>
                  </div>
                </div>
                <p className=" w-full h-[1px] bg-gray-50"></p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <FaUserCheck className=" w-[33px] h-[33px]" />
      </div>
    </div>
  );
}

export default Header;
