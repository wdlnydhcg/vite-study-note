let examplePlugin = {
    name : 'example' ,
    setup ( build ) {
        let fs = require('fs');
        // 文件类型的区分，返回namespace
        build.onResolve({ filter :  / \.txt$/ },  async (args)  => ({
            path:  args.path,
            namespace:  'txtType'
        }))
        //对文件内容进行处理
        build.onLoad({ filter:/\.*/, namespace : 'txtType' }, async (args) => {
        //build.onLoad({ filter :  / \.txt$/ }, async (args) => {
            let text = await fs.promises.readFile(args.path, 'utf8');
            return {
                contents: JSON.stringify((text.split(/\s+/))),
                loader: 'json' ,
            //    contents: `export default ${JSON.stringify(text.split(/\s+/))}`,
            };
        });

    },
}

require("esbuild").build({
    entryPoints: ["index.jsx"],
    bundle: true,
    outdir: "dist",
    loader: {
        ".png": "dataurl",
    },
    plugins: [
        examplePlugin
    ]
}).catch(()=> process.exit(1))
