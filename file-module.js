const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')

console.log(first);

writeFileSync(
    './content/subfolder/result-sync.txt', 
    `Halllooo ini hasilnya : ${first} 123`,
)

const {readFile, writeFile} = require('fs')

console.log('start');

readFile('./content/subfolder/result-sync.txt','utf8', (err, result)=> {
    if(err){
        console.log(err)
        return;
    }
    const third = result
    console.log('first step');
    
    readFile('./content/subfolder/test.txt','utf8', (err, result)=> {
        if(err){
            console.log(err)
            return;
        }
        const fourth = result
        console.log('second step');
        
        writeFile('./content/subfolder/result-async.txt',
            `Test : ${third}, ${fourth}`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                // console.log(result)
                console.log('done with this');  
            }
        )
    })
})

console.log('starting next one');
