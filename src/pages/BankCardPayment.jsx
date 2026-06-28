import React , { useState ,useEffect } from 'react'
import banks from '../data'

const BankCardPayment = () => {
    const [cardNum , setCardNum] = useState('')
    const [cvv2 , setCvv2] = useState('')
    const [month , setMonth] = useState('')
    const [year , setYear] = useState('')
    const [bank , setBank] = useState(null)

    const checkBank = () => {
        if(cardNum.length > 5) {
            const bankDigits = cardNum.slice(0,6)
            const mainBank = banks[bankDigits];
            setBank(mainBank)
        } else {
            setBank('')
        }
    }

    useEffect(() => {
        checkBank()
    }, [cardNum]);


  return (

    <>
    <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .payment-page {
          min-height: 100vh;
          background: #e8f0fe;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          font-family: 'Segoe UI', Arial, sans-serif;
          direction : ltr;
        }

        .payment-wrapper {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(66, 103, 212, 0.13);
          width: 100%;
          max-width: 420px;
          overflow: hidden;
          padding-bottom: 1.5rem;
        }

        /* ── Virtual Card Preview ── */
        .card-preview {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 60%, #1e40af 100%);
          margin: 1.25rem 1.25rem 0;
          border-radius: 16px;
          padding: 1.4rem 1.5rem 1.5rem;
          color: #fff;
          position: relative;
          overflow: hidden;
          min-height: 185px;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
          
        }

        .card-preview::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.07);
          
        }

        .card-preview::after {
          content: '';
          position: absolute;
          bottom: -50px;
          left: -30px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .card-amount-row {
          display: flex;
          align-items: baseline;
          justify-content: flex-end;
          gap: 6px;
          margin-bottom: 1.2rem;
          
        }

        .card-amount-label {
          font-size: 0.78rem;
          opacity: 0.85;
          letter-spacing: 0.01em;
        }

        .card-amount-value {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          
        }

        .card-amount-currency {
          font-size: 1rem;
          opacity: 0.95;
          font-weight : 600;
          color : yellow;
        }

        /* Card number field on preview */
        .card-field-label {
          font-size: 0.72rem;
          opacity: 0.8;
          text-align: right;
          margin-bottom: 5px;
          letter-spacing: 0.02em;
          
        }

        .card-field-box {
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 8px;
          height: 38px;
          width: 100%;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          padding: 0 12px;
          letter-spacing: 0.15em;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.5);
        }

        .card-row {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          direction: rtl;
        }

        .card-col {
          flex: 1;
        }

        .card-col-wide {
          flex: 1.6;
        }

        .card-field-box-small {
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 8px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.12em;
        }

        /* ── Form Section ── */
        .form-section {
          padding: 1.4rem 1.25rem 0;
          direction: ltr;
        }

        .form-group {
          margin-bottom: 1.1rem;
        }

        .form-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
          text-align: right;
          direction: rtl;
        }

        .form-input {
          width: 100%;
          height: 46px;
          border: 1.5px solid #D1D5DB;
          border-radius: 10px;
          padding: 0 14px;
          font-size: 0.92rem;
          color: #111827;
          background: #fff;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          text-align: center;
          letter-spacing: 0.12em;
        }

        .form-input::placeholder {
          color: #9CA3AF;
          letter-spacing: 0.08em;
        }

        .form-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        /* ── Buttons ── */
        .btn-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding: 0 1.25rem;
          margin-top: 1.4rem;
        }

        .btn-pay {
          height: 50px;
          border: none;
          border-radius: 12px;
          background: #2563eb;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          letter-spacing: 0.01em;
        }

        .btn-pay:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
        }

        .btn-pay:active {
          transform: translateY(0);
        }

        .btn-cancel {
          height: 50px;
          border: none;
          border-radius: 12px;
          background: #EF4444;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }

        .btn-cancel:hover {
          background: #DC2626;
          transform: translateY(-1px);
        }

        .btn-cancel:active {
          transform: translateY(0);
        }

        /* ── Notice Box ── */
        .notice-box {
          margin: 1.25rem 1.25rem 0;
          background: #FFFBEB;
          border: 1.5px solid #FCD34D;
          border-radius: 12px;
          padding: 1rem 1.1rem;
          direction: rtl;
        }

        .notice-item {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 0.75rem;
          color: #92400E;
          line-height: 1.6;
          margin-bottom: 4px;
        }

        .notice-item:last-child {
          margin-bottom: 0;
        }

        .notice-star {
          color: #D97706;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }

        @media (max-width: 480px) {
          .payment-page { padding: 1rem 0.5rem; }
          .card-preview { margin: 1rem 1rem 0; }
          .form-section { padding: 1.2rem 1rem 0; }
          .btn-row { padding: 0 1rem; }
          .notice-box { margin: 1rem 1rem 0; }
        }
      `}</style>

    <div className="payment-page">
    <div className="payment-wrapper">

      {/* ── Virtual Card Preview ── */}
      <div className="card-preview">
        <div className="card-amount-row">
            {bank ? (
                <span className="card-amount-currency">{bank}</span>

            ) : null}
        </div>

        <div className="card-field-label">Card Number:</div>
        <div className="card-field-box" >{cardNum}</div>

        <div className="card-row">
          <div className="card-col">
            <div className="card-field-label">Exp. Year:</div>
            <div className="card-field-box-small">{year}</div>
          </div>
          <div className="card-col">
            <div className="card-field-label">Exp. Month:</div>
            <div className="card-field-box-small">{month}</div>
          </div>
          <div className="card-col-wide">
            <div className="card-field-label">CVV2:</div>
            <div className="card-field-box-small">{cvv2}</div>
          </div>
        </div>
      </div>

      {/* ── Form ── */}
      <div className="form-section">

        <div className="form-group">
          <label className="form-label">Card Number:</label>
          <input
            className="form-input"
            type="text"
            maxLength={16}
            placeholder="---- ---- ---- ----"
            value={cardNum}
            onChange= {(e) => {
                setCardNum(e.target.value)
                checkBank()
            } }
          />
        </div>

        <div className="form-group">
          <label className="form-label">CVV2:</label>
          <input
            className="form-input"
            type="password"
            maxLength={4}
            placeholder="***"
            value={cvv2}
            onChange= {(e) => setCvv2(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Exp. Month:</label>
            <input
              className="form-input"
              type="num"
              maxLength={2}
              placeholder="**"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Exp. Year:</label>
            <input
              className="form-input"
              type="num"
              maxLength={2}
              placeholder="**"
              value={year}
              onChange= {(e) => setYear(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ── Action Buttons ── */}
      <div className="btn-row">
        <button className="btn-pay" type="button">
          Confirm & Pay
        </button>
        <button className="btn-cancel" type="button">
          Cancel
        </button>
      </div>

      {/* ── Notice Box ── */}
      <div className="notice-box">
        <div className="notice-item">
          <span className="notice-star">*</span>
          <span>All fields are required.</span>
        </div>
        <div className="notice-item">
          <span className="notice-star">*</span>
          <span>To prevent your card from being blocked, enter your information carefully.</span>
        </div>
        <div className="notice-item">
          <span className="notice-star">*</span>
          <span>All information is securely stored by the payment system.</span>
        </div>
      </div>

    </div>
  </div>
  </>

  )
}

export default BankCardPayment