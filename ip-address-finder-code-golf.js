//IP address finder: code golf kata
//https://www.codewars.com/kata/5b883cdecc7c03c0fa00015a

f=i=>[1,2,3,4].map(x=>x*i.split('').reduce((t,c)=>t+c.charCodeAt(),0)%256)