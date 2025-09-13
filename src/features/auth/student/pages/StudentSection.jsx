import React from 'react'
import { Outlet } from 'react-router-dom'
import PageLayout from '@/components/share/PageLayout'
import TableLayout from '@/components/share/TableLayout'
import tableConfig from './tableConfig'

export default function StudentSection() {
  return (
   <>
<PageLayout title="students" description="Manage student information and records" buttonLabel="Add Student">
<TableLayout filter={false}  columns={tableConfig} data={tableConfig} />
</PageLayout>
   </>
  )
}
