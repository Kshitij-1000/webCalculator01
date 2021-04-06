var a = '';
var b = '';
var num = [];
var ans;
var ctr=0;
function sendnum(digit)
{
  num.push(digit);
  if(num.length!=1)
  {
    a = '';
  }
  for(i=0;i<num.length;i++)
  {
    a = a + num[i];
  }
  document.getElementById('screen').innerHTML = a;
  a = '';
}


function equalTo()
{
  for(i=0;i<num.length;i++)
  {
    b = b+num[i];
  }
  ans = eval(b);
  b = '';
  document.getElementById('screen').innerHTML = ans;
  while(num.lenght>0)
  {
    num.pop();
  }
  ctr=1;
}
function delnum()
{
  if(ctr==0)
  {
    num.pop();
    for(i=0;i<num.length;i++)
    {
      b=b+num[i];
    }
    if(b=='')
      b = '0'
    document.getElementById('screen').innerHTML = b;
    b = '';
  }
  else
  {
    clrscr();
    ctr = 0;
  }
}
function clrscr()
{
  document.getElementById('screen').innerHTML = '0';
  while (num.length)
  {
      num.pop();
  }
}
