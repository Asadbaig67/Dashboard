// JS CHART NO-1

// const ctx = document.getElementById('myChart');
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
// JS CHART NO-1



// JS CHART NO-2

//SETUP
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Sales Overview',
    // backgroundColor: 'rgb(255, 99, 132)',
    backgroundColor: '#0dcaf0',
    // borderColor: 'rgb(255, 99, 132)',
    borderColor: '#0dcaf0',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};
//SETUP

//CONFIGURE
const config = {
  type: 'line',
  data: data,
  options: {}
};
//CONFIGURE

//IMPLEMENT
const myownChart = new Chart(
  document.getElementById('myownChart'),
  config
);
//IMPLEMENT

// JS CHART NO-2


// JS CHART NO-3

//SETUP
// const dataa = {
//   labels: [
//     'Red',
//     'Blue',
//     'Yellow'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
//     hoverOffset: 4
//   }]
// };
// //SETUP

// //CONFIGURE
// const configg = {
//   type: 'doughnut',
//   data: dataa,
// };
// //CONFIGURE

// //IMPLEMENT
// const donutchart = new Chart(document.getElementById('donutchart'), configg);
//IMPLEMENT

// JS CHART NO-3

// JS CHART NO-4

//SETUP
const data1 = {
  labels: [
    'Red',
    'Sea Blue',
    'Yellow',
    'Grey',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      '#0dcaf0',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};
//SETUP

//CONFIGURE
const config1 = {
  type: 'polarArea',
  data: data1,
  options: {}
};
//CONFIGURE

//IMPLEMENT
const ploarchart = new Chart(document.getElementById('polarChart'), config1);
//IMPLEMENT

// JS CHART NO-4