import React from 'react'
import styled from 'styled-components'

const CreditCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${({bgColor}) => bgColor || '#000'};
    padding: 10px;
    color: ${({color}) => color || 'black'};
    width: 300px;
    height: 180px;
    border-radius: 10px;
    img {
        width: 45px;
    }
    .number {
        margin: 50px 0 20px 0;
        text-align: center;
        font-size: 1.5rem;
    }
`

function CreditCard({type, bgColor, color, number, expirationMonth, expirationYear, bank, owner}) {
    return (
        <CreditCardStyle bgColor={bgColor} color={color}>
            <img src={(type==='Visa' ? '/img/visa.png' : '/img/master-card.svg')} height="20"/>
            <div className="number">**** **** **** {number.split('').splice(12,4).join('')}</div>
            <div>Expires: {expirationMonth}/{expirationYear.toString().split('').splice(2,2).join('')}  {bank}</div>
            <div>{owner}</div>
        </CreditCardStyle>
    )

}

export default CreditCard