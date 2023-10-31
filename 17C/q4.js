const books = [
    {
        title: "harry porter",
        author: "jimmy",
        year: 1924
    },
    {
        title: "got",
        author: "gimmy",
        year: 1934
    },
    {
        title: "half water",
        author: "jhon",
        year: 1949
    },
    {
        title: "godaan",
        author: "chetan bhagat",
        year: 1998
    },
];

function callback(title){
    title.sort();
    console.log(title.join(", "));
}

function alphbetTitles(books, callback){
const titles = books.map((el) => el.title )
return callback(titles)
}

alphbetTitles(books, callback)



// output
// godaan, got, half water, harry porter