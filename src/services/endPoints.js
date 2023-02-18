import React from 'react';
import {baseUrl} from '../global/constants';
import axios from 'axios';
const Authorization =
  'cy5cyKw0yYiFZOevjelQ5rn9Pbk03eB7etaCwrjNTSXmEpeIBa7UYSPfWe90MpGg';

export async function get_dashboard_data() {
  var stat = '';
  await fetch(baseUrl + '/dashboard/statics', {
    method: 'GET',
    headers: {
      Authorization: Authorization,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        stat = response.data;
      }
      // console.log('response', response);
    })
    .catch(error => {
      console.log('Something went wrong' + error);
    });
  return stat;
}

export async function add_Purchase(
  project_id,
  suplier_id,
  date,
  bill_no,
  items,
  changeLoader,
) {
  var stat = '';
  var xdata = JSON.stringify({
    project_id: project_id,
    suplier_id: suplier_id,
    date: date,
    bill_no: bill_no,
    items: items,
  });
  console.log('data', xdata);
  var config = {
    method: 'post',
  maxBodyLength: Infinity,
    url: baseUrl+'/purchase/add',
    headers: { 
      'Authorization': Authorization, 
      'Content-Type': 'application/json'
    },
    data : xdata
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    changeLoader(true);
  })
  .catch(function (error) {
    changeLoader(false);
    console.log(error);
  });
}
export async function add_Expense(
  xdata,
  changeLoader,
) {
  var config = {
    method: 'post',
  maxBodyLength: Infinity,
    url: baseUrl+'/expenses/add',
    headers: { 
      'Authorization': Authorization, 
      'Content-Type': 'application/json'
    },
    data : xdata
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    changeLoader(true);
  })
  .catch(function (error) {
    changeLoader(false);
    console.log(error);
  });
}

export async function get_purchase_list(day, month, year, suppliarId) {
  var data = [];
  await fetch(
    baseUrl + '/purchase/' + day + '/' + month + '/' + year + '/' + suppliarId,
    {
      method: 'GET',
      headers: {
        Authorization: Authorization,
      },
    },
  )
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        data = response.data;
      }
      // console.log('response', response);
    })
    .catch(error => {
      console.log('Something went wrong' + error);
    });
  return data;
}
export async function get_projects_list() {
  var data = [];
  await fetch(baseUrl + '/projects', {
    method: 'GET',
    headers: {
      Authorization: Authorization,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        data = response.data;
      }
      // console.log('response', response);
    })
    .catch(error => {
      console.log('Something went wrong' + error);
    });
  return data;
}
export async function get_items_list() {
  var data = [];
  await fetch(baseUrl + '/items', {
    method: 'GET',
    headers: {
      Authorization: Authorization,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        data = response.data;
      }
      // console.log('response', response);
    })
    .catch(error => {
      console.log('Something went wrong' + error);
    });
  return data;
}
export async function get_expense_types() {
  var data = [];
  await fetch(baseUrl + '/expenses/types', {
    method: 'GET',
    headers: {
      Authorization: Authorization,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        data = response.data;
      }
      // console.log('response', response);
    })
    .catch(error => {
      console.log('Something went wrong' + error);
    });
  return data;
}
export async function get_expense_bills(sup_id) {
  var data = [];
  await fetch(baseUrl + '/expenses/bills/'+sup_id, {
    method: 'GET',
    headers: {
      Authorization: Authorization,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        data = response.data;
      }
      // console.log('response', response);
    })
    .catch(error => {
      console.log('Something went wrong' + error);
    });
  return data;
}
export async function get_suppliers_list() {
  var data = [];
  await fetch(baseUrl + '/suppliers', {
    method: 'GET',
    headers: {
      Authorization: Authorization,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        data = response.data;
      }
      // console.log('response', response);
    })
    .catch(error => {
      console.log('Something went wrong' + error);
    });
  return data;
}

export async function get_employees_list() {
  var data = [];
  await fetch(baseUrl + '/employees', {
    method: 'GET',
    headers: {
      Authorization: Authorization,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        data = response.data;
      }
      // console.log('response', response);
    })
    .catch(error => {
      console.log('Something went wrong' + error);
    });
  return data;
}

export async function get_expense_list(day, month, year, expenseType) {
  var data = [];
  await fetch(
    baseUrl + '/expenses/' + day + '/' + month + '/' + year + '/' + expenseType,
    {
      method: 'GET',
      headers: {
        Authorization: Authorization,
      },
    },
  )
    .then(response => response.json())
    .then(response => {
      if (response.status) {
        data = response.data;
      }
      console.log('response', response);
    })
    .catch(error => {
      console.log('Something went wrong' + error);
    });
  return data;
}
