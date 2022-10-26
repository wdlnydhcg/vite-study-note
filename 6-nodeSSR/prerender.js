
const fs = require("fs")
const template = fs.readFileSync('./dist/client/index.html','utf8');
const renderxx  = require('./dist/server/server-entry').renderxx;
const routesToRender = fs.readdirSync("src/pages").map((file)=>{
    return file.replace(".jsx","").toLowerCase();
});
for(const route of routesToRender){
    const context = {}
    // renderxx(route,context).then(html=>{
    //     const responseHtml =  template.replace("<!--APP_HTML-->",html);
    //     const filePath = `dist/static/${route}.html`;
    //     fs.writeFile(filePath,responseHtml);
    //     console.log(`prerender ${filePath}`)
    // })
    const html = renderxx(route,context);
    const responseHtml =  template.replace("<!--APP_HTML-->",html);
    const filePath = `dist/static/${route}.html`;
    fs.writeFileSync(filePath,responseHtml);
    console.log(`prerender ${filePath}`)

}
