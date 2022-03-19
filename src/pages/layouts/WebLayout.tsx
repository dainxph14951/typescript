import React from 'react'
import { Outlet } from 'react-router-dom';

type Props = {}

const WebLayout = (props: Props) => {
  return (
    <div>
        <header>Header Web</header>
        <main>
        <Outlet />
        </main>

    </div>
  )
}

export default WebLayout