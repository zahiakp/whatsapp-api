import React from 'react'
import SideMenu from '../common/SideMenu';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section >
        <div><SideMenu/></div>
        {children}
      </section>
  );
}