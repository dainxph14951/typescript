import React from 'react'
import { Outlet } from 'react-router-dom';
type Props = {}

function AdminLayout({}: Props) {
  return (

    <div>
              <header>Header Admin</header>
        
        <main>
        <Outlet />
        </main>
        </div>
  )
}

export default AdminLayout