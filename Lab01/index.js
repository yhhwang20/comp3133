const csv = require('csv-parser');
const fs = require('fs');
const path = './canada.txt';
const path2 = './usa.txt';

if (fs.existsSync(path)) {
  fs.unlinkSync(path);
} else if(fs.existsSync(path2)) {
  fs.unlinkSync(path2);
}

fs.createReadStream('./input_countries.csv')
.pipe(csv({}))
.on('data', (data) => {
  if(data.country.toLowerCase() === 'canada') {
    fs.appendFile('canada.txt',`${data.country}, ${data.year}, ${data.population}\n`,'utf8', (err) =>{
      if(err){
        console.log(err);
        return
      }
    });
  }
  if(data.country.toLowerCase() === 'united states') {
    fs.appendFile('usa.txt',`${data.country}, ${data.year}, ${data.population}\n`,'utf8', (err) =>{
      if(err){
        console.log(err);
        return
      }
    });
  }
})
.on('end', () => {
  console.log('Data written successfully');
});



