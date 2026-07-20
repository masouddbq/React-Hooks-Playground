import React from 'react'
import ProjectLayout from '../layout/ProjectLayout'
import BankCardPayment from './BankCardPayment'

const Payment = ({text}) => {

  return (
    <ProjectLayout text={'The first six digits of your bank card identify your bank of origin.'} className="">
        <BankCardPayment />
    </ProjectLayout>
  )
}

export default Payment