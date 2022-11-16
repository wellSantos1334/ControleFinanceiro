import { server } from './server/Server'



server.listen(process.env.PORT || 3333, () => { console.log(`Server running on ${process.env.PORT || 3333} PORT`) })
