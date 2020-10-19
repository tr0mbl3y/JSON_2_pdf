var data =[
  {
    name: 'Naval',
    twitterHandle: 'naval',
    image: 'https://pbs.twimg.com/.jpg',
    createAt: '2018-05-31',
    tweet: 'How to Get Rich (without getting lucky):'
  },
{
    name: 'Naval',
    twitterHandle: 'naval',
    image: 'https://pbs.twimg.com/.jpg',
    createAt: '2018-06-1',
    tweet: 'How to Get poor 2(without getting lucky):'
  }
];

function displayTable(tweetsTable){
  var table = document.getElementById('tweetsTable');

  for(var i=0;i<tweetsTable.length;++i)
  {
    var x =tweetsTable[i];
    var row =document.createElement('tr');
    var k =['name','twitterHandle','image','createAt','tweet'];
    for(var j=0;j<k.length;++j){
      var cell = document.createElement('td')
      cell.innerHTML=x[k[j]];
      row.appendChild(cell);
    }
    table.appendChild(row)
  }
 
}
displayTable(data);
window.print();
