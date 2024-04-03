const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const assembledBatteries = [
    { type: 'AA', quantity: 10 },
    { type: 'AAA', quantity: 12 },
  ];
  
   
  function reducer(accumulator, currentValue) {
    return accumulator + currentValue.quantity;
  }
  
  const totalBatteries = assembledBatteries.reduce(reducer, 0);
  
  
  
