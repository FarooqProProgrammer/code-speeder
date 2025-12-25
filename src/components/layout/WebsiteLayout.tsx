"use client";

import React from 'react'
import { Navbar } from '../ui/navbar';

interface WebsiteLayoutProps {
    children?: React.ReactNode
}

const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
  return (
     <div
      className="flex min-h-screen  font-sans bg-[#f5f5dc] bg-[radial-gradient(#707070_1px,transparent_1px)] bg-[length:20px_20px] dark:bg-[#2d2d2d] dark:bg-[radial-gradient(#a0a0a0_1px,transparent_1px)]"
    >
      <Navbar />
      {children}
    </div>
  )
}

export default WebsiteLayout