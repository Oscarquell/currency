import React, {useEffect, useState} from 'react';
import {axiosInstance} from "../../utils/API/API";
import {showError, showSuccess} from "../../utils/alert/alert";
import './currency.css'

const Currency = () => {

  const [currencyData, setCurrencyData] = useState([])
  const getCurrency = async () => {
    try {
      const response = await axiosInstance.get('/current')
      const filteredCurrencyData = response.data.filter(item => item.id < 20 && item)
      setCurrencyData(filteredCurrencyData)
      showSuccess('Успешно', 'Курсы валют загружены')
    } catch (e) {
      showError('Ошибка запроса', 'Повторите попытку позже')
    }
  }

  console.log(currencyData)

  useEffect(() => {
    getCurrency()
  }, []);

  return (
    <div>
      <div className='table table-color'>
        <span>№</span>
        <span className='test'>Название</span>
        <span>USD</span>
        <span>RUB</span>
        <span>EURO</span>
      </div>
      {currencyData.map((item, idx) => {
        return (
          <div
            key={idx}
            className='table'
          >
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.rates[0]?.sell_usd ? item.rates[0]?.sell_usd : 'Нет данных...'}</span>
            <span>{item.rates[0]?.sell_rub ? item.rates[0]?.sell_rub : 'Нет данных...'}</span>
            <span>{item.rates[0]?.sell_eur ? item.rates[0]?.sell_eur : 'Нет данных...'}</span>
          </div>
        )
      })}
    </div>
  );
};

export default Currency;