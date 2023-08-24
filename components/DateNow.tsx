'use client'

import moment from 'moment-mini';
import { useState } from 'react';

export default function index() {
  setInterval(() => setCurrentDate(moment().format('LT [ • ] ddd[,] MMM D')), 30000);
  const [currentDate, setCurrentDate] = useState(moment().format('LT [ • ] ddd[,] MMM D'));
  return (
    <span>{currentDate}</span>
  )
}
