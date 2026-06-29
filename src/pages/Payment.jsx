import React from 'react'
import ProjectLayout from '../layout/ProjectLayout'
import BankCardPayment from '../components/BankCardPayment'

const Payment = ({text}) => {

  return (
    <ProjectLayout text={'شش رقم اول کارت بانکی, مبدا بانک شما رو مشخص میکنه'} className="">
        <BankCardPayment />
    </ProjectLayout>
  )
}

export default Payment