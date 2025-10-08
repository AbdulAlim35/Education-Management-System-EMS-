import React from 'react'
import PageLayout from '@/components/share/PageLayout'
import useStudent from '../hooks/useStudent'
import BasicModel from '@/components/share/BasicModel'
import FormLayout from '@/components/share/FormLayout'
import fields from '../config/fields'
import CardLayout from '@/components/share/CardLayout'
import Card from '../config/Card'

export default function Student() {
  const student = useStudent()
  return (
    <>
    <PageLayout
            title="Student Management"
        description="Manage student information and records"
        buttonLabel="Add Student"
        form={student.form}
    >
   <BasicModel header="Create Student" form={student.form} size='w-[35%]' >
    <FormLayout formData={student}  fields={ () => fields (student.sectinState)}/>
   </BasicModel>
    <CardLayout  subject="koi" CardConfig={student.ref} data={Card(student.action)}/>
    </PageLayout>
    </>
  )
}
