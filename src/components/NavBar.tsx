"use client";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import tailwind from "./../../public/mark.svg";
import Image from "next/image";
import { ArrowDown, CircleArrowDown, CircleArrowUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"


const navigation = [
  { name: "Home", href: "", current: true },
  { name: "case studies", href: "", current: false },
  { name: "Blog", href: "", current: false },
  { name: "About us", href: "", current: false },
  { name: "Contact us", href: "", current: false },
];

function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {

  return (
    <Disclosure as="nav" className=" backdrop-blur   fixed right-0 left-0 z-50 border-b shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-start">
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-8 w-auto"
                    src={tailwind}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex space-x-4 items-center">
                    <li>
                      <a
                        key={"Home"}
                        href=""
                        className={classNames(
                          " px-5 py-2 text-sm font-medium"
                        )}
                        aria-current={
                          navigation[0].current ? "page" : undefined
                        }
                      >
                        <span
                        //  className="px-2  hover:border-b-2 hover:border-b-blue-400 hover:text-blue-400"
                         className={classNames(
                            navigation[0].current
                              ? "border-b-2 border-b-blue-400 text-blue-400"
                              : "text-black ",
                            " px-2 py-2 text-sm font-medium"
                          )}
                         >
                        {navigation[0].name}
                        </span>
                      </a>
                    </li>

                    <li>
                      <a className=" text-sm font-medium">
                        <DropdownMenu>
                          <DropdownMenuTrigger  className="py-2 px-2 focus-visible:outline-none border-b-2 border-transparent hover:text-blue-400 
                           hover:border-b-2 hover:border-blue-400 flex items-center">
                            
                            Case study 
                            <ArrowDown size={'15'} className={` ml-1`}/> 
                            </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </a>
                    </li>

                    <li>
                      <a
                        key={"Blog"}
                        href=""
                        className={classNames(
                          navigation[2].current
                            ? "border-b-2 border-b-blue-400 text-blue-400"
                            : "text-black ",
                          "px-5  text-sm font-medium"
                        )}
                        aria-current={
                          navigation[2].current ? "page" : undefined
                        }
                      >
                        <span className="hover:border-b-2 hover:border-b-blue-400 hover:text-blue-400 py-2 px-2">
                        {navigation[2].name}
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        key={"About us"}
                        href=""
                        className={classNames(
                          navigation[3].current
                            ? "border-b-2 border-b-blue-400 text-blue-400"
                            : "text-black  ",
                          " pl-2 pr-6  text-sm font-medium"
                        )}
                        aria-current={
                          navigation[3].current ? "page" : undefined
                        }
                      >
                        <span className="hover:border-b-2 hover:border-b-blue-400 hover:text-blue-400 py-2 px-2">
                        {navigation[3].name}
                        </span>
                      </a>
                    </li>

                    <li>
                      <Button 
                        key={"Contact us"}
                        className=
                            {` rounded-full hover:bg-blue-400  shadow-lg shadow-gray-400
                            text-black  bg-blue-400
                           px-7 py-2 text-sm font-medium`}
                        
                      >
                        {navigation[4].name}
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              

              <ul className="flex flex-col space-y-4 items-end text-right  p-2 font-bold ">
                <li>
                  <a
                    key={"Home"}
                    href=""
                    className={classNames(
                      navigation[0].current
                        ? "border-b-2 border-b-blue-400 text-blue-400"
                        : "text-black hover:border-b-2 hover:border-b-blue-400 hover:text-blue-400",
                      " px-1 py-2 text-sm font-medium "
                    )}
                    aria-current={navigation[0].current ? "page" : undefined}
                  >
                    {navigation[0].name}
                  </a>
                </li>

                <li className=" ">
                  <a className=" hover:text-blue-400  hover:border-b-2 hover:border-blue-400 active:border-b-2 active:border-blue-400  active:text-blue-400 px-1 py-2 text-sm font-medium">
                    <DropdownMenu >
                      <DropdownMenuTrigger>Case study</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </a>
                </li>

                <li>
                  <a
                    key={"Blog"}
                    href=""
                    className={classNames(
                      navigation[2].current
                        ? "border-b-2 border-b-blue-400 text-blue-400"
                        : "text-black hover:border-b-2 hover:border-b-blue-400 hover:text-blue-400",
                      "px-1 py-2 text-sm font-medium"
                    )}
                    aria-current={navigation[2].current ? "page" : undefined}
                  >
                    {navigation[2].name}
                  </a>
                </li>

                <li>
                  <a
                    key={"About us"}
                    href=""
                    className={classNames(
                      navigation[3].current
                        ? "border-b-2 border-b-blue-400 text-blue-400"
                        : "text-black hover:border-b-2 hover:border-b-blue-400 hover:text-blue-400",
                      " px-1 py-2 text-sm font-medium"
                    )}
                    aria-current={navigation[3].current ? "page" : undefined}
                  >
                    {navigation[3].name}
                  </a>
                </li>

                <li>
                  <Button
                    key={"Contact us"}
                    className={classNames(
                         ` 
                    text-black  hover:bg-blue-400 
                      px-3 py-2 text-sm font-medium bg-blue-400 shadow-md shadow-gray-400`
                    )}
                    aria-current={navigation[4].current ? "page" : undefined}
                  >
                    {navigation[4].name}
                  </Button>
                </li>
              </ul>


            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
