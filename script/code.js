let tableContainer = document.getElementById('table-container');
let tableData = [
    {name : 'Female Redcoat', 
    Price : 'R3000',
    image: 'https://i.postimg.cc/C5nm1Gtw/female2.jpg',
},
{name : 'black jacket', 
Price : 'R2000',
image: 'https://i.postimg.cc/zBSQNS96/female3.jpg',
},
{name : 'Thotyelwa', 
Price : 'R400',
image: 'https://i.postimg.cc/zBSQNS96/female3.jpg',
},

];
tableData.forEach( (item) => {
    tableContainer.innerHTML +=
    `
    <tr>
        <td>${item.name}</td>
        <td>${item.Price}</td>
        <td><img src="${item.image}" alt="img" loading="lazy"</td>
    </tr>
    `
})