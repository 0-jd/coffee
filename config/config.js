const config = {
    writePaths: {
        prdRawData : 'storage/raw/'
    },
    err: {
        fetchErr: 'storage/errors/fetchErrors',
        indexErr: 'storage/errors/indexErr',
        warn: 'storage/errors/warn', 
        critical: 'storage/errors/critical',
        info : 'storage/errors/info',
        uncategorized: 'storage/errors/uncategorized'
    }
}

export default config;